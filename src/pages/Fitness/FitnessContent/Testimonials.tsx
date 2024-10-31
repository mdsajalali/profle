import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderArrowBtn from "../../../components/SliderArrowBtn";
import quote from "../../../assets/images/hero_two/quote.svg";
import quote_white from "../../../assets/images/hero_two/quote_white.svg";
import user_one from "../../../assets/images/testimonials/user_one.png";
import user_two from "../../../assets/images/testimonials/user_two.png";
import user_three from "../../../assets/images/testimonials/user_three.png";
import TestimonialCard from "../../../components/TestimonialCard";
import { motion } from "framer-motion";

type SwiperType = {
  swiper: {
    activeIndex: number;
    slideTo: (index: number) => void;
  };
};

const testimonials = [
  {
    id: 1,
    name: "Tristan Parker",
    title: "Partnering with Samiul was a turning point for us",
    img: user_one,
    description:
      "Working with Samiul was a game-changer. He transformed our website's user experience, making it intuitive and visually stunning. Our customers love it!",
  },
  {
    id: 2,
    name: "Ava Mitchell",
    title: "Partnering with Samiul was a turning point for us",
    img: user_two,
    description:
      "Working with Samiul was a game-changer. He transformed our website's user experience, making it intuitive and visually stunning. Our customers love it!",
  },
  {
    id: 3,
    name: "Ethan Bennett",
    title: "Partnering with Samiul was a turning point for us",
    img: user_three,
    description:
      "Working with Samiul was a game-changer. He transformed our website's user experience, making it intuitive and visually stunning. Our customers love it!",
  },
  {
    id: 4,
    name: "Lily Thompson",
    title: "Partnering with Samiul was a turning point for us",
    img: user_two,
    description:
      "Working with Samiul was a game-changer. He transformed our website's user experience, making it intuitive and visually stunning. Our customers love it!",
  },
  {
    id: 5,
    name: "Ava Mitchell",
    title: "Partnering with Samiul was a turning point for us",
    img: user_two,
    description:
      "Working with Samiul was a game-changer. He transformed our website's user experience, making it intuitive and visually stunning. Our customers love it!",
  },
];

const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.slideTo(swiper.activeIndex + Math.sign(event.deltaY));
    }
  };

  return (
    <div
      className="md:pt-[60px] pt-[40px] bg-[#2B2E4A1A] dark:bg-dark_secondary"
      id="testimonial"
    >
      <div className="text-center max-w-[962px] mx-auto">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:text-2xl text-[14px] font-medium text-text_primary dark:text-text_secondary"
        >
          Client Voices
        </motion.h2>
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:text-[56px] text-2xl font-semibold md:leading-[67.2px] leading-[28.8px] text-secondary dark:text-white"
        >
          Success Stories & Testimonials
        </motion.h1>
      </div>
      <section className="md:py-[60px] py-10" onWheel={handleScroll}>
        <div className="container-overflow">
          <Swiper
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={{
              prevEl: ".feedback-prev",
              nextEl: ".feedback-next",
            }}
            breakpoints={{
              640: {
                spaceBetween: 35,
              },
            }}
          >
            {testimonials?.map((testimonial) => (
              <SwiperSlide
                className="w-[520px]  pt-10 lg:w-80"
                key={testimonial.id}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  quote={quote}
                  quote_white={quote_white}
                  star
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 sm:gap-5 pt-5 "
        >
          <SliderArrowBtn
            direction="left"
            className="feedback-prev rounded-full"
          />
          <SliderArrowBtn
            direction="right"
            className="feedback-next rounded-full"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Testimonials;
