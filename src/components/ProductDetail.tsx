import React from "react";
import { useParams, Link } from "react-router-dom";
import { Brain, Database, FileText, Network as Network2 } from "lucide-react";

interface ProductFeature {
  title: string;
  description: string;
}

const products = {
  "ai-decision": {
    icon: <Brain className="h-24 w-24 text-blue-600" />,
    title: "AI 决策系统",
    description: "基于深度学习和知识图谱的智能决策支持系统，为各类机构提供数据驱动的决策建议。",
    features: [
      {
        title: "多源数据融合分析",
        description: "支持结构化、半结构化和非结构化数据的融合分析，提供全方位的数据洞察。"
      },
      {
        title: "智能预测与推荐",
        description: "运用先进的机器学习算法，实现精准的预测分析和个性化推荐。"
      },
      {
        title: "风险评估与预警",
        description: "实时监控关键指标，及时识别潜在风险，提供预警和应对建议。"
      },
      {
        title: "决策过程可视化",
        description: "直观展示决策依据和推理过程，提高决策的可解释性和可信度。"
      }
    ]
  },
  "big-data": {
    icon: <Database className="h-24 w-24 text-blue-600" />,
    title: "大数据平台",
    description: "高性能、安全可靠的大数据处理平台，支持PB级数据的存储、处理和分析。",
    features: [
      {
        title: "分布式存储与计算",
        description: "采用先进的分布式架构，实现海量数据的高效存储和计算。"
      },
      {
        title: "实时数据处理",
        description: "支持流式数据处理，实现毫秒级的数据分析响应。"
      },
      {
        title: "数据质量管理",
        description: "全方位的数据质量监控和治理，确保数据的准确性和可用性。"
      },
      {
        title: "多维数据分析",
        description: "支持多维度、多层次的数据分析，满足不同场景的分析需求。"
      }
    ]
  },
  "document-management": {
    icon: <FileText className="h-24 w-24 text-blue-600" />,
    title: "智能文档管理",
    description: "基于OCR和NLP技术的智能文档管理系统，实现文档的自动识别、分类、提取和检索。",
    features: [
      {
        title: "文档智能识别",
        description: "支持多种格式文档的智能识别和转换，提高文档处理效率。"
      },
      {
        title: "自动分类与标签",
        description: "基于内容的智能分类和标签推荐，实现文档的自动组织。"
      },
      {
        title: "内容提取与摘要",
        description: "智能提取文档关键信息，自动生成文档摘要。"
      },
      {
        title: "全文语义检索",
        description: "支持语义级别的文档检索，提供更精准的搜索结果。"
      }
    ]
  },
  "knowledge-graph": {
    icon: <Network2 className="h-24 w-24 text-blue-600" />,
    title: "知识图谱构建",
    description: "面向各领域的知识图谱构建工具，支持从非结构化数据中自动抽取实体和关系，构建领域知识图谱。",
    features: [
      {
        title: "实体关系抽取",
        description: "自动从文本中抽取实体和关系，构建知识网络。"
      },
      {
        title: "知识推理与融合",
        description: "支持知识的自动推理和多源知识的融合。"
      },
      {
        title: "知识可视化展示",
        description: "直观展示知识图谱结构，支持交互式探索。"
      },
      {
        title: "知识问答服务",
        description: "基于知识图谱的智能问答，提供准确的知识服务。"
      }
    ]
  }
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? products[productId as keyof typeof products] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">产品未找到</h2>
            <p className="mt-4 text-lg text-gray-500">
              抱歉，您请求的产品页面不存在。
            </p>
            <Link
              to="/"
              className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              返回首页
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            ← 返回首页
          </Link>
        </div>
        
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-8">
              {product.icon}
              <h1 className="text-4xl font-bold text-gray-900 ml-6">
                {product.title}
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 mb-12">
              {product.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                了解更多
              </h3>
              <p className="mb-6">
                想要深入了解{product.title}如何为您的业务赋能？我们的专业团队随时为您提供详细介绍和演示。
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
                联系我们
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
