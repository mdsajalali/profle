import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[1280px] mx-auto md:px-4 px-3">{children}</div>;
};

export default Container;
