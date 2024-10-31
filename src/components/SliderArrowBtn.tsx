import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface BtnProps {
  direction: string;
  className: string;
}

const SliderArrowBtn = ({ direction, className }: BtnProps) => {
  return (
    <div
      className={`${className} flex h-12 w-12 cursor-pointer items-center justify-center  bg-white dark:bg-transparent dark:border dark:text-white   text-2xl text-secondary transition-colors duration-300 hover:bg-secondary dark:hover:bg-white dark:hover:border-none hover:text-white dark:hover:text-black sm:h-14 sm:w-14`}
    >
      {direction === "left" ? <GoArrowLeft /> : <GoArrowRight />}
    </div>
  );
};

export default SliderArrowBtn;
