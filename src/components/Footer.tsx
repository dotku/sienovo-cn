import {
  Mail,
  MapPin,
  MessageSquare as Wechat,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-white flex items-center mb-6">
              <span className="text-3xl mr-2">信迈智科</span>
              <span className="text-blue-400">SIENOVO</span>
            </div>
            <p className="text-gray-400 mb-6">
              深圳信迈智科 SIENOVO
              是国内领先的人工智能解决方案提供商，致力于为政府机构提供智能化服务，助力数字化转型。
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                关于我们
              </a>
              <a
                href="#news"
                className="text-gray-400 hover:text-white transition-colors"
              >
                新闻动态
              </a>
              <a
                href="#clients"
                className="text-gray-400 hover:text-white transition-colors"
              >
                客户案例
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6" id="solutions">解决方案</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://deepseek.sienovo.cn/docs/system-downloads"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  军队信息化
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  法院智能化
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  工商局数据管理
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  医院智慧系统
                </a>
              </li>
              <li>
                <a
                  href="https://www.fujian.gov.cn/zwgk/ztzl/sxzygwzxsgzx/sdjj/wvjj/202402/t20240207_6393711.htm"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  文化部资源整合
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6" id="products">产品中心</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AI决策系统
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  大数据平台
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  智能文档管理
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  知识图谱构建
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  技术支持服务
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6" id="contact">
              联系我们
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  深圳市宝安区 72 区新安街道宝石路 29 号蓝坤集团 A 栋 4 层
                </span>
              </li>
              <li className="flex items-center">
                <Wechat className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">微信: xinmai002leo</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <a 
                  href="mailto:collin.liu@sienovo.cn"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  collin.liu@sienovo.cn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            2025 信迈智科 SIENOVO 保留所有权利 粤 ICP 备 18109958 号
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              隐私政策
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              使用条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
