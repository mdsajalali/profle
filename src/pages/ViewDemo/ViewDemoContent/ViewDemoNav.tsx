import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import logo from "../../../assets/images/home_logo_two.png";
import logo_white from "../../../assets/images/logo_white.png";
import { Link } from "react-router-dom";
import Container from "../../../components/shared/Container";
import { navItemsViewDemoNav } from "../../../data/navItems";
import { GoArrowUpRight } from "react-icons/go";
import { useTheme } from "next-themes";
import lg_white_logo from "../../../assets/images/footer-logo.png"

const ViewDemoNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme } = useTheme();
console.log("Theme", theme)
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`border-b fixed right-0 left-0 z-[999999] border-text_secondary ${
        isScrolled
          ? "bg-white dark:bg-black opacity-90 transition-all z-[99999]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="relative py-4 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="z-[9999]">
              <Link to="/">
                <img
                  src={theme === "dark" ? lg_white_logo : logo}
                  alt="logo"
                  className={`w-[93px] ${
                    isMenuOpen ? "lg:block hidden" : ""
                  } md:w-[197px] z-[9999]`}
                />
                <img
                  src={theme === "dark" ? logo_white : logo}
                  alt="logo"
                  className={`w-[93px] ${
                    isMenuOpen ? "lg:hidden block dark:hidden" : "hidden"
                  }`}
                />
                <img
                  src={theme === "dark" ? lg_white_logo : logo}
                  alt="logo"
                  className={`w-[93px] ${
                    isMenuOpen
                      ? "lg:hidden hidden dark:block dark:lg:hidden"
                      : "hidden"
                  }`}
                />
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center md:gap-5 relative">
              <ul className="flex gap-5">
                {navItemsViewDemoNav?.map((item) => (
                  <li
                    key={item.link}
                    onMouseEnter={() => item.subItems && setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <a
                      href={item.link}
                      className="text-[16px] font-medium dark:text-text_primary text-[#938F99] hover:text-primary hover:dark:text-primary transition flex items-center"
                      onClick={() => {
                        if (item.subItems) {
                          setDropdownOpen(!dropdownOpen);
                        }
                      }}
                    >
                      {item.name}
                      {item.subItems &&
                        (dropdownOpen ? (
                          <MdKeyboardArrowUp className="ml-1 transition-transform" />
                        ) : (
                          <MdKeyboardArrowDown className="ml-1 transition-transform" />
                        ))}
                    </a>
                    {item.subItems && dropdownOpen && (
                      <ul className="absolute bg-white dark:bg-black -mt-1 shadow-lg">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.link}>
                            <Link
                              to={subItem.link}
                              className="block px-6 py-2 text-[14px] font-medium dark:text-text_primary text-black hover:text-primary hover:dark:text-primary transition"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-1 text-[16px] font-medium underline cursor-pointer">
              <p>Buy On Envato Market</p> <GoArrowUpRight />
            </div>

            <div
              className="lg:hidden overflow-hidden z-[9999] cursor-pointer"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? (
                <MdClose className="text-white dark:text-primary" size={20} />
              ) : (
                <HiOutlineMenuAlt4 className="dark:text-primary" size={20} />
              )}
            </div>
          </div>

          <div
            className={`fixed inset-0 bg-primary dark:bg-dark_primary transition-transform duration-500 ease-in-out transform ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } lg:hidden`}
          >
            <ul className="flex flex-col mt-10 text-center items-center pt-10  h-full">
              {navItemsViewDemoNav?.map((item) => (
                <li key={item.link} className="w-full">
                  {item.name === "View Demo" ? (
                    <div>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex justify-center w-full items-center text-left px-5 py-2 text-[14px] font-medium text-white dark:text-primary"
                      >
                        {item.name}
                        {dropdownOpen ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </button>
                      {dropdownOpen && (
                        <ul className="bg-red-600 dark:bg-black">
                          {item?.subItems?.map((subItem) => (
                            <li key={subItem.link}>
                              <Link
                                to={subItem.link}
                                className="block py-2 text-[14px] font-medium text-white dark:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      className="block py-5 text-[14px] font-medium text-white dark:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ViewDemoNav;
