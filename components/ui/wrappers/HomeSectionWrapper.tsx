import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const HomeSectionWrapper = ({ className, children }: Props) => {
  return (
    <section
      className={`center-column-flex text-white md:gap-8 md:px-8 lg:gap-10 lg:px-15 px-4 pt-40 pb-20 gap-7 ${className}`}
    >
      {children}
    </section>
  );
};

export default HomeSectionWrapper;
