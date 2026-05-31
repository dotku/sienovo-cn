import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Track which top-level submenu is open on touch (tablet/mobile have no
  // hover). null = none. Closed by tapping outside or scrolling.
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setOpenSubmenu(null);
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenSubmenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const navItems = [
    { name: "首页", href: "#" },
    {
      name: "解决方案",
      href: "#solutions",
      submenu: [
        { name: "军队信息化", href: "#" },
        { name: "法院智能化", href: "#" },
        { name: "工商局数据管理", href: "#" },
        { name: "医院智慧系统", href: "#" },
        { name: "文化部资源整合", href: "#" },
      ],
    },
    {
      name: "产品中心",
      href: "#products",
      submenu: [
        { name: "AI决策系统", href: "#" },
        { name: "大数据平台", href: "#" },
        { name: "智能文档管理", href: "#" },
        { name: "知识图谱构建", href: "#" },
      ],
    },
    { name: "客户案例", href: "#clients" },
    { name: "新闻中心", href: "#news" },
    { name: "关于我们", href: "#about" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4 gap-3">
          <div className="flex items-center shrink-0">
            <a href="#" className="font-bold flex items-baseline">
              <span
                className={`text-xl sm:text-2xl lg:text-3xl mr-1.5 lg:mr-2 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                信迈智科
              </span>
              <span
                className={`text-base sm:text-lg lg:text-2xl tracking-wide ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                SIENOVO
              </span>
            </a>
          </div>

          {/* Tablet+Desktop Navigation */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center space-x-4 lg:space-x-8"
          >
            {navItems.map((item) => {
              const isOpen = openSubmenu === item.name;
              return (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      // On touch devices the first tap should open the submenu
                      // rather than navigating, so submenu items become reachable.
                      if (item.submenu && !isOpen) {
                        e.preventDefault();
                        setOpenSubmenu(item.name);
                      }
                    }}
                    aria-expanded={item.submenu ? isOpen : undefined}
                    aria-haspopup={item.submenu ? "menu" : undefined}
                    className={`${
                      isScrolled
                        ? "text-gray-800 hover:text-blue-700"
                        : "text-white hover:text-blue-200"
                    } font-medium flex items-center text-sm lg:text-base whitespace-nowrap`}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {item.submenu && (
                    <div
                      className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden origin-top-left z-50 transition-all duration-200
                        ${
                          isOpen
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none"
                        }
                        group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto`}
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setOpenSubmenu(null)}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center shrink-0 gap-2 lg:gap-3">
            <a
              href="https://intl.sienovo.cn"
              aria-label="Switch to English site"
              className={`text-sm lg:text-base font-medium whitespace-nowrap px-2 py-1 rounded transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-700"
                  : "text-white/90 hover:text-white"
              }`}
            >
              EN
            </a>
            <a href="#contact">
              <button
                className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-md transition-colors text-sm lg:text-base font-medium whitespace-nowrap ${
                  isScrolled
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm border border-white/30"
                }`}
              >
                联系我们
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
              className={`focus:outline-none ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-700"
                  : "text-white hover:text-blue-200"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
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
            <a
              href="https://intl.sienovo.cn"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-700 rounded-md border-t border-gray-100 mt-2 pt-3"
            >
              English (intl.sienovo.cn) →
            </a>
            <div className="pt-4 flex justify-between items-center">
              <a href="#contact">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                  联系我们
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
