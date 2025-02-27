import React from 'react';

const Clients = () => {
  // Client logos would typically be actual images from your assets
  // Here we're using placeholder colored blocks with text for demonstration
  const clients = [
    { name: '国防部', color: 'bg-red-100 border-red-200', textColor: 'text-red-800' },
    { name: '最高人民法院', color: 'bg-blue-100 border-blue-200', textColor: 'text-blue-800' },
    { name: '国家工商总局', color: 'bg-green-100 border-green-200', textColor: 'text-green-800' },
    { name: '国家卫健委', color: 'bg-purple-100 border-purple-200', textColor: 'text-purple-800' },
    { name: '文化和旅游部', color: 'bg-yellow-100 border-yellow-200', textColor: 'text-yellow-800' },
    { name: '公安部', color: 'bg-indigo-100 border-indigo-200', textColor: 'text-indigo-800' },
    { name: '教育部', color: 'bg-pink-100 border-pink-200', textColor: 'text-pink-800' },
    { name: '财政部', color: 'bg-teal-100 border-teal-200', textColor: 'text-teal-800' },
  ];

  const testimonials = [
    {
      content: "智科TechAI的军事信息化解决方案大幅提升了我们的指挥效率和情报分析能力，是我们信息化建设的重要合作伙伴。",
      author: "某军区信息化部门负责人",
      role: "少将"
    },
    {
      content: "智能辅助判决系统帮助我们提高了案件处理效率，减轻了法官的工作负担，同时保证了判决的公正性和一致性。",
      author: "某高级人民法院",
      role: "院长"
    },
    {
      content: "医院智慧系统的实施使我们的医疗服务水平得到了显著提升，特别是在疫情期间，远程医疗平台发挥了重要作用。",
      author: "某三甲医院",
      role: "院长"
    }
  ];

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">值得信赖的合作伙伴</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们为众多国家机构提供智能化解决方案，助力其数字化转型
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className={`${client.color} ${client.textColor} border rounded-lg p-6 flex items-center justify-center h-24 font-bold text-lg shadow-sm`}
            >
              {client.name}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">客户评价</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;