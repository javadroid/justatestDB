import React from 'react'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const res = async () => {
      if (session) {
        await axios.post(
          "http://161.35.218.95:3000/api/social_media_sign",
          {
            username: session.user.name,
            email: session.user.email,
            password: session.user.password,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
    };
    res();
  }, [session]);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));

  return (
    <section id='login' className="bg-color-bg_light">
      <div className='md:w-4/5 mx-auto py-6'>
        <div className=" mx-2 px-6 pt-4 pb-12 bg-color-white rounded-2xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:rounded-3xl md:max-w-md md:m-auto lg:max-w-xl">
          <div className="max-w-xs m-auto">
            <h3 className="font-bold text-h2Size text-center my-4">
              Log in
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 items-center justify-items-center">
              <input defaultValue="test" {...register("example")} type="username" placeholder="Enter your Username" className="w-full border border-color-primary_black px-4 py-3 rounded-lg focus:outline-dashed focus:border-color-primary_black text-xs text-color-primary_black sm:text-lg" />
              <input {...register("exampleRequired", { required: true })} type="email" placeholder="Enter email" className="w-full border border-color-primary_black px-4 py-3 rounded-lg focus:outline-dashed focus:border-color-primary_black text-xs text-color-primary_black sm:text-lg" />
              <input type="password" placeholder="Enter password" className="w-full border border-color-primary_black px-4  py-3 rounded-lg focus:outline-dashed focus:border-color-primary_black text-sm text-color-primary_black sm:text-lg" />
              <button className="w-full bg-color-primary text-color-white font-bold rounded-3xl py-3 md:text-lg lg:text-xl lg:py-4">Sign in</button>
              <span>
                <Link href="/" className="text-color-primary font-bold hover:underline">
                  Forgot Password?
                </Link>
              </span>
            </form>
            <p className="text-center my-4 text-color-text_light text-sm md:text-base">
              Don&apos;t have an account yet? <Link href="/signup" className="text-color-primary font-bold hover:underline">Sign up</Link>
            </p>
          </div>
          <div className="flex flex-col items-center justify-between m-auto space-y-4">
            <p className="text-center text-color-text_light font-bold text-sm md:text-base lg:text-xl">
              Or log in with your social network
            </p>
            <div className="flex space-x-4 items-center justify-center">
              <Link href="/"  className="w-1/4 bg-color-black px-4 rounded-md">
                <Icon icon="octicon:mark-github-16" className="w-full text-5xl text-color-white coltransition duration-500 ease-in-out hover:opacity-75" />
              </Link>
              <Link href="/"  className="w-1/4 bg-[#4267b2] px-4 py-2 rounded-md">
                  <Icon icon="teenyicons:facebook-solid" className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75" />
              </Link>
              <Link href="/" className="w-1/4 bg-[#03a9f4] px-4 py-2 rounded-md">
                  <Icon icon="bi:twitter" className=" w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75" />
              </Link>
              <Link href="/google" className="w-1/4 bg-[#d93025] px-4 py-2 rounded-md">
                  <Icon icon="cib:google" className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75" />
              </Link>
            </div>
            <div>
              <Link href="/">
                <button className="flex items-center justify-center space-x-4 text-center text-color-white bg-[#54a9eb] px-4 py-2 rounded-lg transition duration-500 ease-in-out hover:opacity-75">
                  <Icon icon="akar-icons:telegram-fill" className="text-3xl" />
                  <span className="md:text-base">Log in with Telegram</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
