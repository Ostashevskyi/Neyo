import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const HomeSectionWrapper = ({ className, children }: Props) => {
  return (
    <section className={`center-column-flex gap-10 px-14 text-white ${className}`}>
      {children}
    </section>
  );
};

export default HomeSectionWrapper;
