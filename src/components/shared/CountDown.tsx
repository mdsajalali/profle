import { useEffect, useRef, useState } from "react";

interface TColorProps {
  textColor: string;
}

export default function CountDown({ textColor }: TColorProps) {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const hasScrolled = useRef(false);

  const animateCounts = () => {
    animateCount(50, setClients);
    animateCount(100, setProjects);
    animateCount(10, setExperience);
  };

  const animateCount = (
    target: number,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count++;
        setter(count);
      } else {
        clearInterval(interval);
      }
    }, 10);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !hasScrolled.current) {
        hasScrolled.current = true;
        animateCounts();
      } else if (window.scrollY <= 600) {
        hasScrolled.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>
        <h1 className="lg:text-[56px] text-2xl font-semibold">{clients}+</h1>
        <p
          className={`text-[10px] pt-4 lg:text-[20px] text-${textColor} dark:text-white`}
        >
          Satisfied Clients
        </p>
      </div>
      <div>
        <h1 className="lg:text-[56px] text-2xl font-semibold">{projects}+</h1>
        <p
          className={`text-[10px]  pt-4 lg:text-[20px] text-${textColor} dark:text-white`}
        >
          Projects Completed
        </p>
      </div>
      <div>
        <h1 className="lg:text-[56px] text-2xl font-semibold">{experience}+</h1>
        <p
          className={`text-[10px]  pt-4 lg:text-[20px] text-${textColor} dark:text-white`}
        >
          Years Experience
        </p>
      </div>
    </>
  );
}
