import React, { FC } from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
}

const HomeParagraph: FC<Props> = ({ children, className }) => {
  return (
    <p className={`text-center font-medium capitalize md:text-base text-sm ${className}`}>{children}</p>
  )
}

export default HomeParagraph