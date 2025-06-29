import React from "react";

const LimitLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-page-limit m-auto">{children}</div>;
};

export default LimitLayout;
