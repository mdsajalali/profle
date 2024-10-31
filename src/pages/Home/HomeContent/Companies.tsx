import company_one from "../../../assets/images/company_one.png";
import company_two from "../../../assets/images/company_two.png";
import company_three from "../../../assets/images/company_three.png";
import company_four from "../../../assets/images/company_four.png";
import company_one_white from "../../../assets/images/company_one_white.png";
import company_two_white from "../../../assets/images/company_two_white.png";
import company_three_white from "../../../assets/images/company_three_white.png";
import company_four_white from "../../../assets/images/company_four_white.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Container from "../../../components/shared/Container";
import { motion } from "framer-motion";

interface TNameProps {
  name?: string;
}

const companies = [
  { src: company_one, alt: "Company One", whiteSrc: company_one_white },
  { src: company_two, alt: "Company Two", whiteSrc: company_two_white },
  { src: company_three, alt: "Company Three", whiteSrc: company_three_white },
  { src: company_four, alt: "Company Four", whiteSrc: company_four_white },
  { src: company_two, alt: "Company Two", whiteSrc: company_two_white },
];

const Companies = ({ name }: TNameProps) => {
  return (
    <Container>
      <div className=" py-[40px]">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-[24px] text-[14px] font-semibold text-text_primary dark:text-text_secondary leading-[36px]"
        >
          {name}
        </motion.h1>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={20}
          loop={true}
          speed={400}
          autoplay={{ delay: 2000 }}
          slidesPerView={4}
        >
          {companies?.map((item) => (
            <SwiperSlide
              className=" md:max-w-[300px] h-[41px] md:h-[55px] flex justify-center items-center md:mt-[30px]"
              key={item?.alt}
            >
              <img
                src={item?.src}
                alt={item?.alt}
                className="object-cover block dark:hidden w-[78px] lg:w-[218px]"
              />
              <img
                src={item?.whiteSrc}
                alt={item?.alt}
                className="object-cover w-[78px] lg:w-[218px] dark:block hidden"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Companies;
