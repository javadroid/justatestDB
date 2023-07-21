import Image from "next/image";
import Link from "next/link";
import Axios from "axios";
import fast1 from "../assets/images/fast1.png";
import fast2 from "../assets/images/fast2.png";
import fast3 from "../assets/images/fast3.png";
import { Icon } from "@iconify/react";
import stars from "../assets/random-shapes/christmas-stars.png";
import hashtag from "../assets/random-shapes/hashtag.png";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Contact = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/feedback";
  const { register, handleSubmit } = useForm();

  function postData({ email, username, message }) {
    Axios.post(
      url,
      {
        email,
        username,
        message,
      },
      {
        timeout: 30000,
      }
    )
      .then((res) => {
        res = res.data.msg;
        toast.success(res);
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  return (
    <section className="bg-color-white py-20">
      <div className="mx-auto w-full px-2 pb-24">
        <div className="mx-0 space-y-4 px-4 sm:space-y-8 sm:pb-12 lg:pt-14">
          <Image
            src={stars}
            alt="stars"
            width={80}
            className="absolute right-1/4 top-32 hidden lg:flex"
          />
          <Image
            src={hashtag}
            width={50}
            alt="hashtag"
            className="absolute left-28 top-28 hidden lg:flex"
          />
          <h1 className="pt-2 text-center text-2xl font-extrabold sm:text-4xl">
            Contact Us
          </h1>
        </div>
        <div className="mx-auto flex w-full max-w-6xl flex-col text-center md:flex-row md:flex-wrap md:justify-center md:pb-8 lg:flex-nowrap">
          <div className="b-0 mb-8 basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <Link
              href=""
              className="block rounded-3xl bg-color-bg_light p-8 drop-shadow-lg hover:drop-shadow-2xl"
            >
              <Image
                src={fast1}
                width={200}
                height={200}
                alt=""
                className="inline"
              />
              <h2 className="text-xs font-extrabold text-color-black sm:text-lg">
                Support service works 24 hours a day
              </h2>
            </Link>
          </div>
          <div className="mb-8 basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <Link
              href=""
              className="block rounded-3xl bg-color-bg_light p-8 drop-shadow-lg hover:drop-shadow-2xl"
            >
              <Image
                src={fast2}
                width={200}
                height={200}
                alt=""
                className="inline"
              />
              <h2 className="text-xs font-extrabold text-color-black sm:text-lg">
                The average responsetime per request is about 15 minutes
              </h2>
            </Link>
          </div>
          <div className="basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <Link
              href=""
              className="block rounded-3xl bg-color-bg_light py-8 drop-shadow-lg hover:drop-shadow-2xl"
            >
              <Image
                src={fast3}
                width={200}
                height={200}
                alt=""
                className="inline"
              />
              <h2 className="text-xs font-extrabold text-color-black sm:text-lg">
                During the weekend, the support service operates as usual
              </h2>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-5 px-4 md:px-0 md:text-xl">
          <div className="flex flex-col items-start">
            <p className="font-bold">Chat Support:</p>
            <Link
              href=""
              className=" group flex w-full items-center justify-center space-x-4 rounded-md border border-color-tg py-3 text-center font-bold text-color-tg"
            >
              <span>Go To</span>
              <Icon
                width={30}
                icon="uil:telegram-alt"
                className="transition-all duration-300 ease-in-out group-hover:rotate-[360deg]"
              />
            </Link>
          </div>
          <div className="flex flex-col items-start">
            <p className="font-bold">Youtube:</p>
            <Link
              href=""
              className="group flex w-full items-center justify-center space-x-4 rounded-md border border-color-yt py-3 font-bold text-color-yt"
            >
              <span>Go To</span>
              <Icon
                width={30}
                icon="ion:logo-youtube"
                className="group-hover:rotate-45"
              />
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(postData)}
          className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-5 px-4 md:px-0 md:text-xl"
        >
          <input
            {...register("username", { required: true })}
            type="text"
            placeholder="Your username"
            className="w-full rounded-md border border-color-primary_darken px-2 py-2 outline-none placeholder:text-color-primary_darken "
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Your email"
            className="w-full rounded-md border border-color-primary_darken px-2 py-2 outline-none placeholder:text-color-primary_darken"
          />
          <div className="col-span-2">
            <textarea
              {...register("message", { required: true })}
              type="text"
              placeholder="Your question"
              className="w-full rounded-md border border-color-primary_darken px-2 py-2 outline-none placeholder:text-color-primary_darken"
              rows="5"
            />
          </div>
          <button className="group relative mx-auto w-full overflow-hidden rounded-3xl bg-color-primary py-3 text-center text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl">
            <span className="absolute left-0 top-0 mt-20 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
            <span className="relative">Send</span>
          </button>
        </form>
        <div className="mx-auto mt-10 md:w-11/12">
          <h3 className="text-center text-sm font-bold text-color-text_light md:text-xl lg:text-left">
            Company Details
          </h3>
          <p className="text-xs text-color-text_light">
            Liknot Ltd. Registration number 13819411 85 Great Portland Street
            First Floor, London W1W7LT, United Kingdom +443300271844
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;