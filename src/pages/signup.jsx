import React from 'react'
import SignUpForm from '@/Components/SignUpForm';

const Signup= () => {
  return (
    <section id='signup' className="bg-color-bg_light">
      <div className='container mx-auto sm:px-4 py-6'>
        <SignUpForm />
      </div>
    </section>
  )
}

export default Signup;
