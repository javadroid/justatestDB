import SignUpForm from '@/Components/SignUpForm';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Signup= () => {
  
  const router = useRouter();

  // Accessing the query parameters
  const { id } = router.query;
  const [referrer,setreferrer]=useState(id)

  return (
    <section id='signup' className="bg-color-bg_light">
      <div className='md:w-4/5 mx-auto mt-14 pt-14 pb-6'>
        <SignUpForm referrer={id} />
      </div>
    </section>
  )
}

export default Signup;
