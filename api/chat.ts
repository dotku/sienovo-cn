import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

/**
 * Sienovo chatbot, routed through the Vercel AI Gateway.
 *
 * Set AI_GATEWAY_API_KEY in .env.local for local dev. On Vercel infra,
 * the same env var (or auto-injected VERCEL_OIDC_TOKEN) is used.
 *
 * Direct xAI (api.x.ai) is intentionally NOT used — keys provisioned
 * via Vercel share the same team budget as the gateway, so it's not a
 * meaningful backup. The gateway's own multi-provider fallback (xAI →
 * Vertex AI hosting Grok → others) is the resilience layer.
 */
const apiKey = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN || "";

const client = new OpenAI({
  apiKey,
  baseURL: "https://ai-gateway.vercel.sh/v1",
});

const MODEL = "xai/grok-4.1-fast-non-reasoning";

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
    });
    return response.status(500).json({
      error: "An error occurred while processing your request",
      detail: err.message || "unknown",
      upstreamStatus: err.status || null,
    });
  }
}
