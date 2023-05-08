import React from 'react'
import SignUpForm from '@/Components/SignUpForm';

const Signup= () => {
  return (
    <section id='signup' className="bg-color-bg_light">
      <div className='md:w-4/5 mx-auto mt-14 pt-14 pb-6'>
        <SignUpForm />
      </div>
    </section>
  )
}

export default Signup;
