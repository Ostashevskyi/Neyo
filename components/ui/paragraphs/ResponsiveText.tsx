"use client";

import React, { FC } from "react";

interface Props {
  mobile: string;
  tablet: string;
  desktop: string;
}

const ResponsiveText: FC<Props> = ({ desktop, tablet, mobile }) => (
  <>
    <span className="hidden sm:inline md:hidden">{mobile}</span>
    <span className="hidden md:inline lg:hidden">{tablet}</span>
    <span className="hidden lg:inline">{desktop}</span>
  </>
);

export default ResponsiveText;
