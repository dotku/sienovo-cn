import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80 z-10"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.7)",
        }}
      ></div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            智能科技赋能
            <br />
            <span className="text-blue-200">数字化转型</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            为军队、法院、工商局、医院、文化部等机构提供全方位的人工智能解决方案，
            助力国家机构数字化转型与智能化升级。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#solutions">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center">
                了解解决方案 <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>
            <a href="#contact">
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                预约演示
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-white py-6 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-700 mb-1">20+</p>
              <p className="text-gray-600">年行业经验</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-700 mb-1">300+</p>
              <p className="text-gray-600">政府机构客户</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-700 mb-1">1000+</p>
              <p className="text-gray-600">成功案例</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-700 mb-1">100%</p>
              <p className="text-gray-600">客户满意度</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
