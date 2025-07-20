"use client";

import { useResponsive } from "@/hooks/useResponsive";
import React, { FC } from "react";

interface Props {
  mobile: string;
  tablet: string;
  desktop: string;
}

const ResponsiveText: FC<Props> = ({ desktop, mobile, tablet }) => {
  const { isMobile, isTablet } = useResponsive();

  if (isMobile) return <>{mobile}</>;
  if (isTablet) return <>{tablet}</>;
  return <>{desktop}</>;
};

export default ResponsiveText;
