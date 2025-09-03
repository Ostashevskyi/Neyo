import React, { FC } from "react";


import ButtonCTA from "./ButtonCTA";

interface SubmitButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ children, disabled, className, ...rest }) => {
    
    return (
      <ButtonCTA disabled={disabled} type="submit" className="w-full text-white disabled:bg-amber-200" {...rest}>
        {children}
      </ButtonCTA>
    );
  },
);

SubmitButton.displayName = "SubmitButton";

export { SubmitButton };
