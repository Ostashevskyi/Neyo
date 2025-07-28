import React from 'react';

import Link from 'next/link';

import ButtonAuth from './ButtonAuth';

interface Props {
    children: React.ReactNode;
}

const LoginButton: React.FC<Props> = ({ children }) => {
  return (
    <Link href={"/login"}>
        <ButtonAuth variant='default'>{children}</ButtonAuth>
    </Link>
  )
}

export default LoginButton