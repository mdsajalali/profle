import { useState, useEffect } from "react";
import { MdClose, MdDarkMode, MdLightMode } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import Container from "../../../components/shared/Container";
import { navItemsOne } from "../../../data/navItems";
import { FaBehance } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import white_logo from "../../../assets/images/footer-logo.png";
import logo from "../../../assets/images/home_logo_two.png";
import logo_white from "../../../assets/images/logo_white.png";

const PhotographyNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isToggled = theme === "dark";

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleToggle = () => {
    setTheme(isToggled ? "light" : "dark");
  };

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
                  src={logo}
                  alt="logo"
                  className={`w-[93px] ${
                    isMenuOpen ? "lg:block hidden" : "dark:hidden"
                  } md:w-[197px] z-[9999]`}
                />

                <img
                  src={white_logo}
                  alt="logo"
                  className={`w-[93px] ${
                    isMenuOpen ? "block dark:hidden" : "hidden dark:block"
                  } md:w-[197px] z-[9999]`}
                />

                <img
                  src={logo_white}
                  alt="logo"
                  className={`w-[93px] ${
                    isMenuOpen ? "hidden dark:block" : "hidden"
                  }`}
                />
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center md:gap-5 relative">
              <ul className="flex gap-5">
                {navItemsOne?.map((item) => (
                  <li
                    key={item.link}
                    onMouseEnter={() => item.subItems && setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <a
                      href={item.link}
                      className="text-[16px] font-medium dark:text-text_primary text-black hover:text-primary hover:dark:text-primary transition flex items-center"
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

            <div className="lg:flex gap-[10px] justify-center items-center hidden">
              <div className=" flex">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isToggled}
                    onChange={handleToggle}
                  />
                  <div className="w-[70px] h-[40px] bg-white border dark:bg-dark_primary dark:border rounded-full shadow-inner" />
                  <div
                    className={`absolute mx-2 w-8 h-8 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                      isToggled ? "translate-x-6" : "translate-x-0"
                    }`}
                  >
                    {isToggled ? (
                      <MdDarkMode
                        color="black"
                        className="text-gray-800 w-8 h-8 rounded-full p-2 bg-white"
                      />
                    ) : (
                      <MdLightMode
                        color="white"
                        className="text-gray-800 w-8 h-8 rounded-full p-2 bg-black"
                      />
                    )}
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-center gap-[10px]">
                <div className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full size-10">
                  <CiFacebook size={24} />
                </div>
                <div className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full size-10">
                  <FaBehance size={20} />
                </div>
                <div className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full size-10">
                  <RiTwitterXFill size={18} />
                </div>
                <div className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full size-10">
                  <RiLinkedinFill size={20} />
                </div>
              </div>
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
              {navItemsOne?.map((item) => (
                <li key={item.link} className="w-full">
                  {item.name === "Home" ? (
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

              <div className="flex gap-2 items-center">
                <span className="text-white dark:text-primary my-3 text-[14px]">
                  Change Mood
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isToggled}
                    onChange={handleToggle}
                  />
                  <div className="w-[30px] h-[18px] bg-gray-200 dark:bg-black rounded-full shadow-inner" />
                  <div
                    className={`absolute mx-[2px] flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                      isToggled ? "translate-x-2" : "translate-x-0"
                    }`}
                  >
                    {isToggled ? (
                      <MdDarkMode
                        color="black"
                        className="text-gray-800 rounded-full p-[2px] bg-white"
                      />
                    ) : (
                      <MdLightMode
                        color="white"
                        className="text-gray-800 rounded-full p-[2px] bg-black"
                      />
                    )}
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-center gap-[10px]">
                <div className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full size-10">
                  <CiFacebook size={24} />
                </div>
                <div className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full size-10">
                  <FaBehance size={20} />
                </div>
                <div className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full size-10">
                  <RiTwitterXFill size={18} />
                </div>
                <div className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full size-10">
                  <RiLinkedinFill size={20} />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PhotographyNav;
