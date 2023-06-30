import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import stars from "../assets/random-shapes/christmas-stars.png";
import hashtag from "../assets/random-shapes/hashtag2.png";
import star from "../assets/random-shapes/shooting-star.png";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

const SignUpForm = () => {
  const { data: session } = useSession();
  const router = useRouter();


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
    {
      name: "facebook",
    },
  ];

  const handleOAuthSignIn = (provider) => () =>
    signIn(provider, {
      callbackUrl: `${window.location.origin}/signup`,
    });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await instance.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/signup",
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
      toast.error(error.response.data.msg);
      return <div>{error}</div>;
      // console.log("Error is", error);
      // router.push("/user/receive-sms");
    }
  };

  const [isVerified, setIsVerified] = useState(false);
  function onChange() {
    setIsVerified(!isVerified);
  }

  return (
    <div className="relative mx-2 rounded-2xl bg-color-white px-6 pb-12 pt-4 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:m-auto md:max-w-md md:rounded-3xl lg:max-w-xl">
      <Image
        src={stars}
        alt="stars"
        width={100}
        className="absolute -left-40 bottom-40 hidden lg:flex"
      />
      <Image
        src={hashtag}
        width={70}
        alt="hashtag"
        className="absolute -right-40 top-40 hidden lg:flex"
      />
      <Image
        src={star}
        width={120}
        alt="shooting-star"
        className="absolute -left-1/2 hidden lg:flex"
      />
      <div className="m-auto max-w-xs">
        <h3 className="my-4 text-center text-h2Size font-bold">Sign up</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-items-center space-y-4"
        >
          <input
            {...register("username", { required: true })}
            type="Username"
            required
            defaultValue={session?.user?.name || ""}
            placeholder="Enter your Username"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            required
            defaultValue={session?.user?.email || ""}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            required
            placeholder="Create password"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            required
            placeholder="Confirm password"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
          <button
            disabled={!isVerified}
            className={isVerified ? "group relative w-full overflow-hidden rounded-3xl bg-color-primary py-3 text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl" : "relative w-full overflow-hidden rounded-3xl bg-color-primary py-3 text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl opacity-50 cursor-not-allowed"}
          >
            Sign up
          </button>
          {/* <div
            // href={"/user/receive-sms"}
            className="group relative w-full overflow-hidden rounded-3xl bg-color-primary py-3 text-center text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl"
          >
            <span className="absolute left-0 top-0 mt-16 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
           
          </div> */}
          <button
            onClick={signOut}
            className="w-full rounded-3xl bg-color-primary py-3 text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl"
          >
            Sign Out
          </button>
        </form>
        <p className="my-2 text-center text-sm text-color-text_light sm:my-4 md:text-base">
          Already have an account?{" "}
          <Link
            href="/login"
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
            className="w-1/4 cursor-pointer rounded-md bg-color-black px-4"
            onClick={handleOAuthSignIn(providers[0].name)}
          >
            <Icon
              icon="octicon:mark-github-16"
              className="coltransition w-full text-5xl text-color-white duration-500 ease-in-out hover:opacity-75"
            />
          </div>
          <div
            className="w-1/4 rounded-md bg-[#4267b2] px-4 py-2"
            onClick={handleOAuthSignIn(providers[3].name)}
          >
            <Icon
              icon="teenyicons:facebook-solid"
              className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75"
            />
          </div>
          <div className="w-1/4 cursor-pointer rounded-md bg-[#03a9f4] px-4 py-2">
            <Icon
              icon="bi:twitter"
              className=" w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75"
              onClick={handleOAuthSignIn(providers[1].name)}
            />
          </div>
          <div
            className="w-1/4 cursor-pointer rounded-md bg-[#d93025] px-4 py-2"
            onClick={handleOAuthSignIn(providers[2].name)}
          >
            <Icon
              icon="cib:google"
              className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75"
            />
          </div>
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
