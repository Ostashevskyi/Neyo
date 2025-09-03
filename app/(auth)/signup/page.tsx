import SignUpForm from '@/components/ui/forms/SignUpForm'
import React from 'react'

const SignUpPage = () => {
  return (
    <section className='bg-dark-blue h-dvh w-full'>
      <div className='py-24 px-4'>
        <h2 className='font-orbitron font-bold text-3xl leading-100 capitalize text-white mb-10'>Start Now</h2>
        <SignUpForm />
      </div>
    </section>
  )
}

export default SignUpPage