import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

/**
 * Sienovo chatbot, routed through the Vercel AI Gateway.
 *
 * On Vercel infra, AI_GATEWAY_API_KEY is auto-injected (OIDC) — no need
 * to set a key for production. For local dev, set AI_GATEWAY_API_KEY in
 * .env.local. We also fall back to XAI_API_KEY for backward compat with
 * the original direct-xAI setup.
 */
const apiKey =
  process.env.AI_GATEWAY_API_KEY ||
  process.env.VERCEL_OIDC_TOKEN ||
  process.env.XAI_API_KEY ||
  "";

const baseURL = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN
  ? "https://ai-gateway.vercel.sh/v1"
  : "https://api.x.ai/v1";

const client = new OpenAI({ apiKey, baseURL });

// "provider/model" via the gateway. xai/grok-4.1-fast-non-reasoning is
// the current fast non-reasoning Grok — ideal for chatbot latency.
// Direct-xAI fallback uses the equivalent without the prefix.
const MODEL = baseURL.includes("ai-gateway.vercel.sh")
  ? "xai/grok-4.1-fast-non-reasoning"
  : "grok-4.1-fast-non-reasoning";

const SYSTEM_PROMPT = `你是信迈智科的政企方案客服代表，专门解答关于我们公司的政府和企业解决方案的问题。
我们的主要产品和服务包括：
- 智能文档管理系统
- AI决策系统
- 大数据平台
- 知识图谱构建

针对不同行业我们有专门的解决方案：
- 军队信息化
- 法院智能化
- 工商局数据管理
- 医院智慧系统
- 文化部资源整合

请用专业、简洁的语言回答用户的咨询。如果用户需要了解具体报价或实施细节，请引导他们联系：
邮箱: collin.liu@sienovo.cn
微信: xinmai002leo`;

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = request.body;
    if (!Array.isArray(messages)) {
      return response.status(400).json({ error: "messages array required" });
    }

    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
    });

    return response.status(200).json({
      message: completion.choices[0].message.content,
    });
  } catch (error: unknown) {
    // Surface the real cause to logs AND to the response (clients already
    // get the generic message; this helps us debug without re-deploying).
    const err = error as { status?: number; message?: string; response?: { data?: unknown } };
    console.error("chat.ts error:", {
      status: err.status,
      message: err.message,
      data: err.response?.data,
      model: MODEL,
      baseURL,
    });
    return response.status(500).json({
      error: "An error occurred while processing your request",
      detail: err.message || "unknown",
      upstreamStatus: err.status || null,
    });
  }
}
