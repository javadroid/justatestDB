import React from "react";
import Image from "next/image";
import ArticleImage from "@/assets/ArticleImage.jpg";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-hot-toast";

const BlogPage = () => {
  const instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  });

  const { query } = useRouter();
  console.log(query.id);

  const makeComment = async (data) => {
    console.log(data);
    try {
      const response = await instance.post(
        "http://161.35.218.95:3000/api/comment",
        {
          comment: data.post,
        },
        {
          params: {
            postid: query.id,
            userid: sessionStorage.getItem("id"),
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      );
      toast.success(response.data.msg);
      window.location.reload();
    } catch (error) {
      console.log("Error is", error);
      toast.error(error.response.data.msg);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="mb-10 mt-24 ">
      <div className="p-5">
        <h1 className="text-2xl font-medium">
          Can I create an anonymous LinkedIn account?
        </h1>
        <p>
          LinkedIn is a well-known social network that allows users to create
          business contacts by discussing their skills and competencies. All
          activities take place on user pages and communities sorted by numerous
          parameters. The California-based company appeared in 2003 and is now
          controlled by Microsoft Corporation. LinkedIn features help people
          find business partners and jobs through a mobile app and website.
          About 850 million professionals in 150 industries have already
          completed LinkedIn registration. If you are interested in this app,
          let’s take a look at its benefits and features.
        </p>
        <Image
          src={ArticleImage}
          alt="Blog pic"
          className="h-96 w-[850px] object-contain"
        />
        <h1 className="text-2xl font-medium">
          Features and benefits of LinkedIn
        </h1>
        <p>
          58 million companies contact talented employees daily on this
          platform. The latter create projects and unite into communities on
          LinkedIn. Such success derives from comfortable filters and
          communication opportunities.
        </p>
        <p>Let’s look at a few pros before you sign up for LinkedIn:</p>
        <ul className="list-disc">
          <li>
            The software lets people view each other’s details: education,
            career chronologies, interests, competencies, living locations, etc.
            People seeking job/networking opportunities are frequent posters
            here;
          </li>
        </ul>
        <p>
          This social media provides additional functions to improve customer
          experience. You can make use of advanced search options to see
          employees and colleagues sorted by the characteristics you set up.
          They also let you make your friend list disappear and hide from those
          who check the visitors to their LinkedIn profiles. These features help
          customers feel comfortable sharing info. However, it requests things
          like an email or mobile number to sign up. Many consider them
          inappropriate and avoid using the application. Here is a guide on the
          procedure & explanation of their rationale for the requirements.
        </p>
        <h1 className="text-2xl font-medium">
          The process of LinkedIn Registration
        </h1>
        <p>
          To sign up for the well-known business social network, you will need
          to provide a few details of personal information such as your name,
          location, email address and come up with a strong password. But that’s
          not all, to complete your LinkedIn registration, the system will send
          a verification code to your phone number, which you will need to enter
          at the end of the registration process.
        </p>
        <Image
          src={ArticleImage}
          alt="Blog pic"
          className="h-96 w-[850px] object-contain"
        />
        <h1 className="text-2xl font-medium">
          Can I create LinkedIn anonymous account?
        </h1>
        <p>
          Virtual numbers require no additional software or devices. You can use
          them to text from any device, including computers, laptops and
          tablets. They are usually used to sign up anonymously for social
          networks, messengers, and apps. Many people wonder how to be anonymous
          on LinkedIn? This is where virtual mobile numbers come in handy. Many
          services offer them for different purposes with different prices and
          features. The SMS-man platform gives you the opportunity to get a
          virtual number for a limited period of time, which you can use to
          receive SMS. The site has phone numbers available for different
          regions and a thousand different online services for which they can be
          used to register.
        </p>
        <form onSubmit={handleSubmit(makeComment)}>
          <textarea
            {...register("post")}
            rows={5}
            placeholder="Comment on post"
            className="mt-5 w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <button className="mt-4 rounded-xl bg-color-primary px-10 py-4 text-sm font-bold text-color-white md:text-lg lg:text-xl">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default BlogPage;
