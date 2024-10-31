import { IoLocationOutline } from "react-icons/io5";
import { MdCall, MdOutlineMessage } from "react-icons/md";
import Container from "../../../components/shared/Container";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Container>
      <div className="md:pt-[80px] md:pb-[60px] py-[40px]" id="contact">
        <motion.h3
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium text-text_primary"
        >
          Contact Me
        </motion.h3>
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary dark:text-white leading-tight"
        >
          Let’s bring your vision to life. Contact me today to create something
          lasting!
        </motion.h1>
        <div className="flex flex-col items-center lg:flex-row mt-[60px]   gap-8 mb-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="border border-secondary rounded-full dark:border-white p-2 ">
                <MdOutlineMessage size={20} />
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
            </div>
            <div className="flex items-start gap-4 mb-8">
              <div className="border border-secondary rounded-full p-2 dark:border-white ">
                <IoLocationOutline size={20} />
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
            </div>
            <div className="flex items-start gap-4 mb-8">
              <div className="border border-secondary rounded-full p-2 dark:border-white ">
                <MdCall size={20} />
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
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border border-text_secondary dark:bg-dark_secondary dark:border-none p-8 flex-1 rounded-md "
          >
            <h1 className="text-xl font-semibold text-secondary dark:text-white text-center mb-5">
              Brief Me on Your Project Vision
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
                className="w-full rounded-full bg-secondary dark:bg-white dark:text-black  text-white font-semibold py-2 transition duration-200 hover:bg-primary-dark"
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

export default Contact;
