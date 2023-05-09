import React, { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const SignUpForm = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   const res = async () => {
  //     if (session) {
  //       await axios.post(
  //         "http://161.35.218.95:3000/api/social_media_sign",
  //         {
  //           username: session.user.name,
  //           email: session.user.email,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //     }
  //   };
  //   res();
  // }, [session]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  });

  const providers = [
    {
      name: "github",
    },
    {
      name: "twitter",
    },
    {
      name: "google",
    },
  ];

  const handleOAuthSignIn = (provider) => () => signIn(provider);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await instance.post(
        "http://161.35.218.95:3000/api/signup",
        {
          username: data.username,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.msg);
      router.push("/");
    } catch (error) {
      console.log("Error is", error);
      toast.error(error.response.data.msg);
    }
    // router.push("/user/receive-sms");
  };

  return (
    <div className=" mx-2 rounded-2xl bg-color-white px-6 pb-12 pt-4 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:m-auto md:max-w-md md:rounded-3xl lg:max-w-xl">
      <div className="m-auto max-w-xs">
        <h3 className="my-4 text-center text-h2Size font-bold">Sign up</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-items-center space-y-4"
        >
          <input
            {...register("username", { required: true })}
            type="Username"
            placeholder="Enter your Username"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Create password"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            placeholder="Confirm password"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <button className="w-full rounded-3xl bg-color-primary py-3 text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl">
            Sign up
          </button>
        </form>
        <p className="my-2 text-center text-sm text-color-text_light sm:my-4 md:text-base">
          Already have an account?{" "}
          <Link
            href="/signup"
            className="font-bold text-color-primary hover:underline"
          >
            Sign in.
          </Link>
        </p>
      </div>
      <div className="m-auto flex flex-col items-center justify-between space-y-1 sm:space-y-4">
        <p className="text-center text-sm font-bold text-color-text_light md:text-base lg:text-xl">
          Or log in with your social network
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div
            className="w-1/4 rounded-md bg-color-black px-4"
            onClick={handleOAuthSignIn(providers[0].name)}
          >
            <Icon
              icon="octicon:mark-github-16"
              className="coltransition w-full text-5xl text-color-white duration-500 ease-in-out hover:opacity-75"
            />
          </div>
          <Link
            href="/"
            className="w-1/4 rounded-md bg-[#4267b2] px-4 py-2"
            //onClick={signOut}
          >
            <Icon
              icon="teenyicons:facebook-solid"
              className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75"
            />
          </Link>
          <Link href="/" className="w-1/4 rounded-md bg-[#03a9f4] px-4 py-2">
            <Icon
              icon="bi:twitter"
              className=" w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75"
              onClick={handleOAuthSignIn(providers[1].name)}
            />
          </Link>
          <Link
            href="/google"
            className="w-1/4 rounded-md bg-[#d93025] px-4 py-2"
          >
            <Icon
              icon="cib:google"
              className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75"
            />
          </Link>
        </div>
        <div>
          <Link href="/">
            <button className="mt-2 flex items-center justify-center space-x-4 rounded-lg bg-[#54a9eb] px-4 py-2 text-center text-color-white transition duration-500 ease-in-out hover:opacity-75">
              <Icon icon="akar-icons:telegram-fill" className="text-3xl" />
              <span className="md:text-base">Log in with Telegram</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
