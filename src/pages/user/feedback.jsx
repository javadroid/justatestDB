import Axios from "axios";
import Link from "next/link";
import fast1 from "@/assets/images/fast1.png";
import fast2 from "@/assets/images/fast2.png";
import fast3 from "@/assets/images/fast3.png";
import Image from "next/image";
import { Icon } from "@iconify/react"
import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const Feedback = () => {
  const url = "http://161.35.218.95:3000/api/feedback";
  const { register, handleSubmit, formState: { errors } } = useForm();

  function postData({ email, username, message }) {
    Axios.post(url, {
      email,
      username,
      message
    }).then((res) => {
     res = res.data.msg;
      toast.success(res);
      window.location.reload();
    }).catch((err) => {
      toast.error(err);
    })
  }
  return (
    <section className="mx-auto h-auto max-w-6xl bg-color-bg_light-100 pb-20">
      <div className=" pb-24">
        <div className="mx-0 space-y-4 px-4 sm:space-y-8 sm:pb-12 lg:pt-14">
          <h1 className="pt-2 text-center text-2xl font-extrabold sm:text-4xl">
            Contact Us
          </h1>
        </div>
        <div className="width-full mx-auto flex max-w-5xl flex-col text-center md:flex-row md:flex-wrap md:justify-center md:pb-8 lg:flex-nowrap">
          <div className="b-0 mb-8 basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <Link
              href=""
              className="block rounded-3xl bg-color-bg_light p-8 drop-shadow-lg hover:drop-shadow-2xl"
            >
              <Image src={fast1} width={200} height={200} alt="" className="inline" />
              <h2 className="text-xs font-extrabold text-color-primary sm:text-lg">
                How to get a number for one-time sign up?
              </h2>
            </Link>
          </div>
          <div className="mb-8 basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <Link
              href=""
              className="block rounded-3xl bg-color-bg_light p-8 drop-shadow-lg hover:drop-shadow-2xl"
            >
              <Image src={fast2} width={200} height={200} alt="" className="inline" />
              <h2 className="text-xs font-extrabold text-color-primary sm:text-lg">
                How to get sms to a bought number?
              </h2>
            </Link>
          </div>
          <div className="basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <Link
              href=""
              className="block rounded-3xl bg-color-bg_light p-8 drop-shadow-lg hover:drop-shadow-2xl"
            >
              <Image src={fast3} width={200} height={200} alt="" className="inline" />
              <h2 className="text-xs font-extrabold text-color-primary sm:text-lg">
                How to get a long-term number?
              </h2>
            </Link>
          </div>
        </div>
        <div className="mx-auto px-4 mt-10 grid max-w-4xl grid-cols-2 gap-5 md:text-xl md:px-0">
          <div className="flex flex-col items-start">
            <p className="font-bold">Chat Support:</p>
            <Link href="" className=" flex items-center justify-center space-x-4 font-bold text-color-tg w-full rounded-md border border-color-tg py-3 text-center group">
              <span>Go To</span>
              <Icon width={30} icon="uil:telegram-alt" className="transition-all duration-300 ease-in-out group-hover:rotate-[360deg]" />
            </Link>
          </div>
          <div className="flex flex-col items-start">
            <p className="font-bold">Youtube:</p>
            <Link href="" className="flex items-center justify-center space-x-4 font-bold text-color-yt w-full rounded-md border border-color-yt py-3 group">
              <span>Go To</span>
              <Icon width={30} icon="ion:logo-youtube" className="group-hover:rotate-45" />
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit(postData)} className="mx-auto px-4 mt-10 grid max-w-4xl grid-cols-2 gap-5 md:text-xl md:px-0">
            <input
              {...register("username", { required: true })}
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-md border outline-none placeholder:text-color-primary_darken border-color-primary_darken px-2 py-2 "
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your email"
              className="w-full rounded-md border outline-none placeholder:text-color-primary_darken border-color-primary_darken px-2 py-2"
            />
          <div className="col-span-2">
            <textarea
              {...register("message", { required: true })}
              type="text"
              placeholder="Ask a question"
              className="w-full rounded-md border outline-none placeholder:text-color-primary_darken border-color-primary_darken px-2 py-2"
              rows="5"
            />
          </div>
          <button className="group relative w-full mx-auto overflow-hidden rounded-3xl bg-color-primary py-3 text-center text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl">
          <span className="absolute left-0 top-0 mt-20 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
            <span className="relative">Send</span>
          </button>
        </form>
        <div className="mx-auto mt-10 md:w-11/12">
          <h3 className="text-sm md:text-xl font-bold text-color-text_light text-center lg:text-left">Company Details</h3>
          <p className="text-xs text-color-text_light">
            Liknot Ltd. Registration number 13819411 85 Great Portland Street
            First Floor, London W1W7LT, United Kingdom +443300271844
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;

Feedback.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
