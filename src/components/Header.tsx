import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', href: '#' },
    { 
      name: '解决方案', 
      href: '#solutions',
      submenu: [
        { name: '军队信息化', href: '#' },
        { name: '法院智能化', href: '#' },
        { name: '工商局数据管理', href: '#' },
        { name: '医院智慧系统', href: '#' },
        { name: '文化部资源整合', href: '#' },
      ]
    },
    { 
      name: '产品中心', 
      href: '#products',
      submenu: [
        { name: 'AI决策系统', href: '#' },
        { name: '大数据平台', href: '#' },
        { name: '智能文档管理', href: '#' },
        { name: '知识图谱构建', href: '#' },
      ]
    },
    { name: '客户案例', href: '#clients' },
    { name: '新闻中心', href: '#news' },
    { name: '关于我们', href: '#about' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex items-center">
              <span className="text-3xl mr-2 text-white">智科</span>
              <span className="text-white">TechAI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a 
                  href={item.href} 
                  className="text-white hover:text-blue-200 font-medium flex items-center"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-blue-200">
              <Search className="h-5 w-5" />
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
              联系我们
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex justify-between items-center">
              <button className="text-gray-800 hover:text-blue-700">
                <Search className="h-5 w-5" />
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                联系我们
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;