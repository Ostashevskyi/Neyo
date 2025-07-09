import React, { FC } from 'react'

interface Props {
    children: React.ReactNode
}

const HomeHeading2: FC<Props> = ({ children }) => {
  return (
    <h2 className='font-orbitron text-center capitalize'>{children}</h2>
  )
}

export default HomeHeading2