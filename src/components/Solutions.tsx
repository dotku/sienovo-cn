import {
  Shield,
  Scale,
  Building2,
  Stethoscope,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "军队信息化解决方案",
      description:
        "提供军事指挥、情报分析、战场态势感知等智能化系统，保障国防安全与军事现代化。",
      features: [
        "指挥控制系统",
        "情报分析平台",
        "战场态势感知",
        "军事训练模拟",
      ],
      url: "https://deepseek.sienovo.cn/docs/system-downloads",
    },
    {
      icon: <Scale className="h-12 w-12 text-blue-600" />,
      title: "法院智能化解决方案",
      description:
        "为司法系统提供案件管理、智能辅助判决、法律文书自动生成等服务，提升司法效率与公正性。",
      features: [
        "智能案件管理",
        "辅助判决系统",
        "法律文书自动生成",
        "庭审记录智能化",
      ],
    },
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: "工商局数据管理方案",
      description:
        "整合工商数据资源，提供企业信用评估、市场监管、商事服务等智能化应用，优化营商环境。",
      features: ["企业信用评估", "市场监管分析", "商事服务平台", "数据可视化"],
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-blue-600" />,
      title: "医院智慧系统解决方案",
      description:
        "构建智慧医疗体系，包括医疗影像AI诊断、智能病历管理、医疗资源调配等，提升医疗服务质量。",
      features: [
        "医疗影像AI诊断",
        "智能病历管理",
        "医疗资源调配",
        "远程医疗平台",
      ],
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: "文化部资源整合方案",
      description:
        "为文化部门提供文化资源数字化、智能检索、文化传播等服务，促进文化资源的保护与传承。",
      features: [
        "文化资源数字化",
        "智能检索系统",
        "文化传播平台",
        "文化数据分析",
      ],
      url: "https://fujian-west-coast-culture.sienovo.cn",
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            行业解决方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            针对不同政府机构的需求，我们提供定制化的人工智能解决方案，助力各行业数字化转型
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={solution.url || `#contact`}>
                  <button className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
                    了解更多 <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
