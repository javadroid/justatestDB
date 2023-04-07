import React from 'react';

const Rent = () => {
  return (
    <>
    <section className="relative bg-color-primary p-3 text-2.2rem text-white">
      <div className="mx-auto px-3.75 w-4/5 max-w-full">
        <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Receive SMS online</h1>
            <p className="max-w-sm text-left text-2xl">Register on social networks, marketplaces, exchanges and online services 
              <span class="text-yellow-500"> without spam</span> and <span class="text-yellow-500">disclosure of personal data.</span></p>
            <div className="flex flex-col md:flex-row">
              <a className="p-3 px-6 pt-2 mb-8 text-blue-600 font-bold text-center bg-white rounded-full baseline">Rent number</a>
              <a className="p-3 px-6 pt-2 mb-2 bg-blue-600 font-bold text-center text-white rounded-full baseline">Receive SMS</a>
            </div>
          </div>
          <div>
            picture goes here
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container max-w-md mx-auto px-6">
        <div className="flex flex-col items-center md:flex row-reverse">
          <div className="mt-8 md:w-1/2">
            <h2 className="text-4xl font-bold text-left text-gray-800 mb-8 md:text-center">SMS-MAN - phone number rental to receive SMS</h2>
            <p className="text-2xl text-black mb-8 text-left">With SMS-MAN service you can rent a virtual number to receive sms from 20+ countries for: 24 hours, a week or a month. You can rent a phone number for SMS to receive any number of messages for a selected period of time.</p>
            <p className="text-2xl text-black mb-8 text-left">This is very handy when you need to register many accounts in online services to one number.</p>
            <p className="text-2xl text-black text-left">If phone number won't be suitable (if you hasn&apost received any SMS), you can easily cancel it within 20 minutes without losing money.</p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Rent;