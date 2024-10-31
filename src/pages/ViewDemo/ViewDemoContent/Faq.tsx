import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Container from "../../../components/shared/Container";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, toggle }: FaqItemProps) => {
  const { theme } = useTheme();
  return (
    <div className=" border-gray-300 border-b">
      <div
        className="flex items-center justify-between py-5 cursor-pointer"
        onClick={toggle}
      >
        <h1 className="text-[16px]  md:text-[20px] dark:text-white  font-semibold">
          {question}
        </h1>
        {isOpen ? (
          <FaArrowUp
            className={`text-xl md:w-10 w-8 h-8 md:h-10 rounded-full border border-black p-[10px] ${
              theme ? "text-black" : "text-white"
            }`}
          />
        ) : (
          <FaArrowDown
            className={`text-xl md:w-10 w-8 h-8 md:h-10 rounded-full border border-black p-[10px] ${
              theme ? "text-black" : "text-white"
            }`}
          />
        )}
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-[14px] md:text-[16px] dark:text-white pb-5">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Profle?",
      answer:
        "Profle is a clean and modern personal portfolio website theme designed for creative professionals, freelancers, and individuals looking to showcase their work, skills, and projects in a visually appealing way.",
    },
    {
      question: "Who is Profle suitable for?",
      answer:
        "Profle is a clean and modern personal portfolio website theme designed for creative professionals, freelancers, and individuals looking to showcase their work, skills, and projects in a visually appealing way.",
    },
    {
      question: "What features does Profle offer?",
      answer:
        "Profle is a clean and modern personal portfolio website theme designed for creative professionals, freelancers, and individuals looking to showcase their work, skills, and projects in a visually appealing way.",
    },
    {
      question: "Is Profle easy to customize?",
      answer:
        "Profle is a clean and modern personal portfolio website theme designed for creative professionals, freelancers, and individuals looking to showcase their work, skills, and projects in a visually appealing way.",
    },
    {
      question: "Can I showcase my projects on Profle?",
      answer:
        "Profle is a clean and modern personal portfolio website theme designed for creative professionals, freelancers, and individuals looking to showcase their work, skills, and projects in a visually appealing way.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="md:py-14 py-10">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-[20px] md:text-2xl font-semibold text-center"
        >
          Frequently Asked Questions (FAQ)
        </motion.h1>
        <div className="my-10 bg-[#F9F5F2] dark:bg-black/50  p-4 md:p-6 rounded-lg">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
            >
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleItem(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Faq;
