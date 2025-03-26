import { Calendar, User, ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      title: "信迈智科 Sienovo与国防部签署战略合作协议",
      date: "2025-04-15",
      author: "公司新闻",
      summary:
        "信迈智科 Sienovo与国防部签署战略合作协议，将为军队信息化建设提供全方位技术支持，助力国防现代化。",
      image:
        "https://images.unsplash.com/photo-1569017388730-020b5f80a004?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "智能辅助判决系统在全国法院系统推广应用",
      date: "2025-03-28",
      author: "产品动态",
      summary:
        "由信迈智科 Sienovo开发的智能辅助判决系统已在全国多个省市的法院系统推广应用，有效提升了司法效率。",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: '信迈智科 Sienovo荣获"国家高新技术企业"称号',
      date: "2025-02-10",
      author: "公司荣誉",
      summary:
        '信迈智科 Sienovo凭借在人工智能领域的技术创新和市场表现，荣获"国家高新技术企业"称号。',
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              新闻中心
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              了解信迈智科 Sienovo的最新动态、产品更新和行业资讯
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
          >
            查看全部新闻 <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{item.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  阅读更多
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
