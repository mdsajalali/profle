import Container from "../../../components/shared/Container";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import banner_img from "../../../assets/images/photography/slider_banner.png";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderArrowBtn from "../../../components/SliderArrowBtn";

const PhotographyHero = () => {
  return (
    <Container>
      <div className="lg:pt-28 pt-20 pb-10 grid  grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-82px)]">
        <div className="bg-dark_secondary order-2 lg:order-1 lg:rounded-l-md  md:h-[649px] px-10 py-14 md:py-[138px] text-white flex flex-col">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="md:text-2xl text-[14px] font-medium text-text_secondary"
          >
            Photo & Film Artist
          </motion.h2>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:text-[56px] text-[32px] font-semibold"
          >
            Ethan Brooks
          </motion.h1>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:text-[16px] text-[12px]  leading-[19.2px] md:leading-[25.6px]"
          >
            A Photo & Film Artist combines photography and cinematography to
            craft visually striking stories. Through still images and dynamic
            films, they capture emotions and moments with creativity and
            precision. Their work transforms ordinary scenes into powerful
            visual narratives that resonate with audiences.
          </motion.p>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex md:mt-10 items-center justify-center gap-2 cursor-pointer bg-transparent border md:text-[16px] rounded-full hover:bg-secondary transition-all mt-5 text-[12px] md:py-4 py-2 md:mx-0 mx-auto md:w-[200px] w-[100px] text-white font-semibold"
          >
            Hire me <MdOutlineArrowOutward className="md:text-2xl" />
          </motion.button>
        </div>

        <div className="relative  order-1 lg:order-2">
          <div>
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".photography-prev",
                nextEl: ".photography-next",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <motion.a
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={banner_img}
                    alt="Banner Image"
                    className="h-[343px] md:h-[649px] w-full lg:rounded-r-md"
                  />
                </motion.a>
              </SwiperSlide>
              <SwiperSlide>
                <motion.a
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={banner_img}
                    alt="Banner Image"
                    className="h-[343px] md:h-[649px] w-full lg:rounded-r-md"
                  />
                </motion.a>
              </SwiperSlide>
              <SwiperSlide>
                <motion.a
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={banner_img}
                    alt="Banner Image"
                    className="h-[343px] md:h-[649px] w-full lg:rounded-r-md"
                  />
                </motion.a>
              </SwiperSlide>
            </Swiper>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex absolute md:bottom-20 bottom-8 right-0 left-0   z-[9999]  items-center justify-center gap-2 sm:gap-3 pt-5 "
          >
            <SliderArrowBtn
              direction="left"
              className="photography-prev rounded-full"
            />
            <SliderArrowBtn
              direction="right"
              className="photography-next rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default PhotographyHero;
