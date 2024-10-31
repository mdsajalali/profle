import white_logo from "../assets/images/feedback_logo_white.png";
import { TiStar } from "react-icons/ti";

interface Testimonial {
  name: string;
  description: string;
  img: string;
  title?: string;
}

interface TestimonialProps {
  testimonial: Testimonial;
  quote?: string;
  quote_white?: string;
  star?: boolean;
}

const TestimonialCard = ({
  testimonial,
  quote,
  star,
  quote_white,
}: TestimonialProps) => {
  const { name, img, description, title } = testimonial;

  return (
    <div className="flex rounded-md flex-col justify-between bg-white dark:bg-transparent dark:border p-5">
      {quote && (
        <>
          <img
            src={quote}
            alt="Quote"
            className="w-[56px] h-[56px] dark:hidden"
          />
          <img
            src={quote_white}
            alt="Quote"
            className="w-[56px] h-[56px] hidden dark:block"
          />
        </>
      )}
      {title && (
        <h1 className="text-secondary dark:text-white text-[20px] font-semibold my-2">
          {title}
        </h1>
      )}
      <p className="leading-relaxed text-[#646670] dark:text-white">
        {description}
      </p>

      {star && (
        <div className="flex mt-3 -mb-3">
          {[...Array(5)].map((_, index) => (
            <TiStar key={index} color="#FFB800" size={24} />
          ))}
        </div>
      )}

      <div className="flex gap-[10px] mt-[30px] items-center">
        <div data-hide-on-theme="dark" className="dark:hidden">
          <img
            className="size-10 rounded-full  object-cover"
            src={img}
            alt={name}
          />
        </div>
        <div data-hide-on-theme="light" className="hidden dark:block">
          <img
            className="w-10 border p-2 object-cover"
            src={white_logo}
            alt={name}
          />
        </div>
        <h4 className="text-[20px] text-text_primary dark:text-white">
          {name}
        </h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
