import { useState } from "react";
import photography_one from "../../../assets/images/photography/photography_one.png";
import photography_two from "../../../assets/images/photography/photography_two.png";
import photography_three from "../../../assets/images/photography/photography_three.png";
import photography_four from "../../../assets/images/photography/photography_four.png";
import photography_five from "../../../assets/images/photography/photography_five.png";
import photography_six from "../../../assets/images/photography/photography_six.png";
import photography_seven from "../../../assets/images/photography/photography_seven.png";
import { CgArrowRight } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../../../components/shared/Container";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

interface TPhotograpiesProps {
  id: number;
  img: string;
  category: string;
}

const allPhotograpies: TPhotograpiesProps[] = [
  {
    id: 1,
    img: photography_one,
    category: "Event Photography",
  },
  {
    id: 2,
    img: photography_two,
    category: "Event Photography",
  },
  {
    id: 3,
    img: photography_three,
    category: "Product Photography",
  },
  {
    id: 4,
    img: photography_four,
    category: "Architectural Photography",
  },
  {
    id: 5,
    img: photography_five,
    category: "Event Photography",
  },
  {
    id: 6,
    img: photography_six,
    category: "Fashion Photography",
  },
  {
    id: 7,
    img: photography_seven,
    category: "Fashion Photography",
  },
];

const PhotographyShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [index, setIndex] = useState(-1);

  const slides = allPhotograpies.map(({ img }) => ({
    src: img,
  }));

  const handleClick = (index: number) => setIndex(index);

  const filteredPhotograpies = selectedCategory
    ? allPhotograpies.filter(
        (photography) => photography.category === selectedCategory
      )
    : allPhotograpies;

  const filterPhotograpies = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <div className=" max-w-[1057px] mx-auto" id="work">
        <div className="  text-center">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="md:text-[24px] text-[14px] font-medium text-text_primary dark:text-text_secondary"
          >
            Work & Portfolio
          </motion.h2>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:text-[56px] text-2xl my-2 md:leading-[67.2px] leading-[28.8px] font-semibold text-secondary dark:text-white"
          >
            A Showcase of My Photography Work
          </motion.h1>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:text-[16px] text-[12px] md:leading-[25.6px] leading-[19.2px] text-text_primary"
          >
            This portfolio highlights my photography work, showcasing a range of
            moments and scenes. Each piece reflects my passion for capturing
            unique perspectives and telling visual stories.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-[10px] mt-5 justify-center">
          {[
            "Event Photography",
            "Product Photography",
            "Architectural Photography",
            "Fashion Photography",
          ].map((category) => (
            <button
              key={category}
              className={` sm:py-4 sm:px-[10px] px-[5px] py-[10px] rounded-full transition border-text_primary border hover:bg-secondary dark:hover:bg-white dark:hover:text-black hover:text-white flex items-center justify-center ${
                selectedCategory === category
                  ? "bg-secondary dark:bg-white dark:text-black text-white"
                  : ""
              }`}
              onClick={() => filterPhotograpies(category)}
            >
              <div className="flex items-center sm:text-[16px] text-[10px] gap-2">
                {category} <FiArrowUpRight />
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="md:my-[60px]  my-5">
        {selectedCategory ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {filteredPhotograpies.map((photography) => (
              <img
                key={photography.id}
                src={photography.img}
                alt={`Photography of ${photography.category}`}
                className="w-full h-[300px] object-cover"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="xl:grid sm:hidden grid grid-rows-2 md:grid-flow-col gap-4">
              <div className="flex flex-col md:col-span-1">
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1 * 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    onClick={() => handleClick(0)}
                    src={allPhotograpies?.[0].img}
                    alt="photography"
                    className="w-full h-auto object-cover cursor-pointer"
                  />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 2 * 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    onClick={() => handleClick(3)}
                    src={allPhotograpies?.[3].img}
                    alt="photography"
                    className="w-full h-auto object-cover md:my-2 my-6 cursor-pointer"
                  />
                </motion.a>
              </div>

              <div className="row-span-2 md:col-span-1 md:-mt-0 -mt-12 pb-8 md:pb-0">
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 3 * 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    onClick={() => handleClick(1)}
                    src={allPhotograpies?.[1].img}
                    alt="photography"
                    className="w-full h-[731px]  object-cover cursor-pointer"
                  />
                </motion.a>
              </div>

              <div className="flex flex-col md:col-span-1">
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 4 * 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    onClick={() => handleClick(2)}
                    src={allPhotograpies?.[2].img}
                    alt="photography"
                    className="w-full h-auto object-cover md:-mt-0 -mt-7 cursor-pointer"
                  />
                </motion.a>

                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 5 * 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    onClick={() => handleClick(4)}
                    src={allPhotograpies?.[4].img}
                    alt="photography"
                    className="w-full h-auto object-cover md:my-2 my-5 cursor-pointer"
                  />
                </motion.a>
              </div>
            </div>
            <div className="xl:grid sm:hidden grid grid-cols-1 md:grid-cols-12 gap-4 xl:-mt-[750px]">
              <div className="md:col-span-8 col-span-1  md:mt-0 mt-2">
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 6 * 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    onClick={() => handleClick(5)}
                    src={allPhotograpies?.[5].img}
                    alt="photography"
                    className="xl:w-[824px] w-full h-auto object-cover cursor-pointer"
                  />
                </motion.a>
              </div>
              <div className="md:col-span-4 col-span-1">
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 7 * 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    onClick={() => handleClick(6)}
                    src={allPhotograpies?.[6].img}
                    alt="photography"
                    className="w-full xl:-ml-[2px] h-[437px]  object-cover md:mt-0 mt-2 cursor-pointer"
                  />
                </motion.a>
              </div>
            </div>
            {/* tablet design */}
            <div className="xl:hidden sm:grid hidden grid-cols-3 gap-4">
              {allPhotograpies.slice(0, 6).map((photography) => (
                <img
                  key={photography.id}
                  onClick={() => handleClick(photography.id)}
                  src={photography.img}
                  alt="img"
                  className="w-[410px] h-[293px] object-cover"
                />
              ))}
            </div>
            <Lightbox
              slides={slides}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              styles={{
                container: {
                  background: "rgba(0, 0, 0, 0.85)",
                  backdropFilter: "blur(5px)",
                  zIndex: "999",
                  marginTop: "50px",
                },
              }}
            />
          </>
        )}
      </div>

      <div className="flex items-center pb-10 justify-center">
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 8 * 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 justify-center bg-white hover:bg-secondary hover:text-white transition-all text-black border border-secondary rounded-full py-4 px-7"
        >
          See More <CgArrowRight size={20} />
        </motion.button>
      </div>
    </Container>
  );
};

export default PhotographyShowcase;
