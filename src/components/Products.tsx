import React from "react";
import { Brain, Database, FileText, Network as Network2 } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: <Brain className="h-16 w-16 text-blue-600" />,
      title: "AI决策系统",
      description:
        "基于深度学习和知识图谱的智能决策支持系统，为各类机构提供数据驱动的决策建议。",
      features: [
        "多源数据融合分析",
        "智能预测与推荐",
        "风险评估与预警",
        "决策过程可视化",
      ],
    },
    {
      icon: <Database className="h-16 w-16 text-blue-600" />,
      title: "大数据平台",
      description:
        "高性能、安全可靠的大数据处理平台，支持PB级数据的存储、处理和分析。",
      features: [
        "分布式存储与计算",
        "实时数据处理",
        "数据质量管理",
        "多维数据分析",
      ],
    },
    {
      icon: <FileText className="h-16 w-16 text-blue-600" />,
      title: "智能文档管理",
      description:
        "基于OCR和NLP技术的智能文档管理系统，实现文档的自动识别、分类、提取和检索。",
      features: [
        "文档智能识别",
        "自动分类与标签",
        "内容提取与摘要",
        "全文语义检索",
      ],
    },
    {
      icon: <Network2 className="h-16 w-16 text-blue-600" />,
      title: "知识图谱构建",
      description:
        "面向各领域的知识图谱构建工具，支持从非结构化数据中自动抽取实体和关系，构建领域知识图谱。",
      features: [
        "实体关系抽取",
        "知识推理与融合",
        "知识可视化展示",
        "知识问答服务",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            产品中心
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们提供全面的人工智能产品体系，满足各类机构的智能化需求
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                {product.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                全面的技术支持与服务
              </h3>
              <p className="text-blue-100 mb-6">
                我们不仅提供先进的AI产品，还提供全方位的技术支持与服务，确保系统稳定运行。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <span className="h-2 w-2 bg-white rounded-full mr-2"></span>
                  <span>7×24小时技术支持</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="h-2 w-2 bg-white rounded-full mr-2"></span>
                  <span>定制化开发服务</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="h-2 w-2 bg-white rounded-full mr-2"></span>
                  <span>系统部署与维护</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="h-2 w-2 bg-white rounded-full mr-2"></span>
                  <span>技术培训与知识转移</span>
                </li>
              </ul>
              <button className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                了解服务详情
              </button>
            </div>
            <div className="hidden lg:block relative">
              <div
                className="absolute inset-0 bg-cover bg-right"
                style={{
                  backgroundImage:
                    "url('//miro.medium.com/v2/da:true/resize:fit:1200/1*Uo-aYtmJixVpmEkUxmw_IQ.gif?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
