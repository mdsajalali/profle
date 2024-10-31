import { IoLocationOutline } from "react-icons/io5";
import { MdCall, MdOutlineMessage } from "react-icons/md";
import Container from "../../../components/shared/Container";
import { motion } from "framer-motion";

interface TCenterProps {
  center?: boolean;
  ques?: string;
  title?: string;
}

const DesignerContent = ({ center, ques, title }: TCenterProps) => {
  return (
    <Container>
      <div className="md:py-[60px] py-[40px]" id="contact">
        <motion.h3
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className={`text-xl md:text-2xl font-medium text-text_primary ${
            center && "text-center"
          }`}
        >
          Contact Me
        </motion.h3>
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl mt-2 lg:text-5xl font-semibold text-secondary dark:text-white leading-tight ${
            center && "text-center"
          }`}
        >
          {title}
        </motion.h1>
        <div className="border-text_secondary w-full h-2 mt-[60px] border-b" />
        <div className="  mt-[60px]   mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   items-center  md:gap-[30px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="border border-secondary dark:border-white p-2 rounded-full ">
                <MdOutlineMessage size={25} />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-secondary dark:text-white">
                  Chat to us
                </h1>
                <h5 className="text-text_primary text-sm mt-2 mb-1 dark:text-text_primary">
                  Our approachable team is ready to assist you.
                </h5>
                <p className="text-text_primary text-sm font-semibold dark:text-text_primary">
                  hiexample@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="border border-secondary p-2 dark:border-white rounded-full ">
                <IoLocationOutline size={25} />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-secondary dark:text-white">
                  Address
                </h1>
                <h5 className="text-text_primary text-sm mt-2 mb-1 dark:text-text_primary">
                  Come say Hello at our office HQ.
                </h5>
                <p className="text-text_primary text-sm font-semibold dark:text-text_primary">
                  San Francisco, CA 53 Bush St & 2nd Ave, Apt 3 San Francisco,
                  2324334
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="border border-secondary p-2 dark:border-white rounded-full">
                <MdCall size={25} />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-secondary dark:text-white">
                  Call Us
                </h1>
                <h5 className="text-text_primary text-sm mt-2 mb-1 dark:text-text_primary">
                  Monday to Friday, from 8:00 AM to 5:00 PM
                </h5>
                <p className="text-text_primary text-sm font-semibold dark:text-text_primary">
                  +1(555)000-0000
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-text_secondary rounded-md dark:bg-dark_secondary dark:border-none p-8 flex-1 "
          >
            <h1 className="text-xl font-semibold text-secondary dark:text-white text-center mb-5">
              {ques}
            </h1>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text_primary dark:text-text_secondary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="mt-1 dark:bg-dark_secondary block w-full border border-gray-300 p-2 focus:border-primary outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text_primary dark:text-text_secondary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="mt-1 block dark:bg-dark_secondary w-full border outline-none border-gray-300 p-2 focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text_primary dark:text-text_secondary"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="mt-1 dark:bg-dark_secondary block w-full border border-gray-300 p-2 focus:border-primary outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm  font-medium text-text_primary dark:text-text_secondary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 dark:bg-dark_secondary p-2 focus:border-primary outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary dark:bg-white dark:text-black rounded-full  text-white font-semibold py-3 transition duration-200 hover:bg-primary-dark"
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default DesignerContent;
