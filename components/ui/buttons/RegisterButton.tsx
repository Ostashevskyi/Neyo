import React from 'react';

import Link from 'next/link';

import ButtonAuth from './ButtonAuth';

interface Props {
    children: React.ReactNode;
}

const RegisterButton: React.FC<Props> = ({ children }) => {
  return (
    <Link href={"/signup"}>
        <ButtonAuth>{children}</ButtonAuth>
    </Link>
  )
}

export default RegisterButton