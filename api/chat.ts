import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import { promises as fs } from "fs";
import path from "path";

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: "https://api.x.ai/v1",
});

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = request.body;
    const webMdPath = path.join(process.cwd(), "README.md");
    const content = await fs.readFile(webMdPath, "utf-8");

    const completion = await client.chat.completions.create({
      model: "grok-2-latest",
      messages: [
        {
          role: "system",
          content: `
              ${content}
              你是信迈智科的政企方案客服代表，专门解答关于我们公司的政府和企业解决方案的问题。
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
              微信: xinmai002leo
          `,
        },
        ...messages,
      ],
    });

    return response.status(200).json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error);
    return response.status(500).json({
      error: "An error occurred while processing your request",
    });
  }
}
