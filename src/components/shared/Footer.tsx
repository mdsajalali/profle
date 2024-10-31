import { FiGithub } from "react-icons/fi";
import footer_logo from "../../assets/images/footer-logo.png";
import { CiFacebook } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import Container from "./Container";
import footer_white from "../../assets/images/logo_white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-dark_secondary text-white pt-8">
      <Container>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8   md:py-[55px]    ">
          <div>
            <Link to="/">
              <img
                src={footer_logo}
                alt="Footer Logo"
                className="mb-4 lg:block hidden"
              />
              <img
                src={footer_white}
                alt="Footer Logo"
                className="mb-4 lg:hidden block"
              />
            </Link>
            <p className="text-text_primary mt-5   leading-[25.6px] md:text-[16px] text-[12]">
              Profile is a platform that helps freelancers manage their finances
              by offering tools for budgeting, saving, and tracking income. It
              also provides credit-building and financial insights to support
              better financial health.
            </p>
          </div>
          <div className="xl:ml-20">
            <h1 className="font-semibold text-white  md:text-[24px] text-[14px] mb-2">
              Services
            </h1>
            <ul className="space-y-2 md:mt-10">
              <li>
                <a
                  href="#"
                  className="hover:underline md:text-[16px] text-[12px] text-text_primary"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline md:text-[16px] text-[12px] text-text_primary"
                >
                  Front End Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline md:text-[16px] text-[12px] text-text_primary"
                >
                  Back End Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline md:text-[16px] text-[12px] text-text_primary"
                >
                  WordPress Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline md:text-[16px] text-[12px] text-text_primary"
                >
                  Webflow
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline md:text-[16px] text-[12px] text-text_primary"
                >
                  Framer
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:ml-20">
            <h1 className="  mb-2 font-semibold text-white  md:text-[24px] text-[14px] ">
              Menu
            </h1>
            <ul className="space-y-2 md:mt-10">
              <li>
                <a
                  href="#"
                  className="hover:underline md:text-[16px] text-[12px] text-text_primary"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline md:text-[16px] text-[12px] text-text_primary"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline md:text-[16px] text-[12px] text-text_primary"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline md:text-[16px] text-[12px] text-text_primary"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline md:text-[16px] text-[12px] text-text_primary "
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:ml-20">
            <h1 className=" mb-2 font-semibold text-white  md:text-[24px] text-[14px] ">
              Contact
            </h1>
            <ul className="space-y-2 md:mt-10">
              <li>
                <p className="md:text-[16px] text-[12px] text-text_primary">
                  +(555) 123-7890
                </p>
              </li>
              <li>
                <p className="md:text-[16px] text-[12px] text-text_primary">
                  Jaxonreed@example.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between mt-8 px-4">
        <p className="text-center sm:text-left md:text-[16px] text-[10px] order-2 md:order-1 text-text_primary">
          ©2024 Portfolio by{" "}
          <Link to="/" className="hover:underline transition-all">
            Profle
          </Link>
        </p>
        <div className="flex md:items-center items-start gap-3 md:mt-4 my-4 order-1 md:order-2 sm:mt-0">
          <h2 className="font-bold md:text-[16px] text-[12px] text-text_primary">
            Follow Me
          </h2>
          <div className="flex gap-1  sm:gap-2 text-white">
            <a
              href="#"
              aria-label="Github"
              className="hover:text-black transition border rounded-full  hover:bg-white p-2"
            >
              <FiGithub />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-black transition border rounded-full hover:bg-white p-2"
            >
              <CiFacebook />
            </a>
            <a
              href="#"
              aria-label="Behance"
              className="hover:text-black transition border rounded-full  hover:bg-white p-2"
            >
              <FaBehance />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-black transition border rounded-full hover:bg-white p-2"
            >
              <RiTwitterXFill />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-black transition border rounded-full  hover:bg-white p-2"
            >
              <RiLinkedinFill />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
