import React, { useEffect, useState } from "react";
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

  const router = useRouter();
  useEffect(() => {
    const getComments = async () => {
      const data = await instance.get(
        process.env.NEXT_PUBLIC_BASE_URL + "/blog/post",
        {
          timeout: 30000,
          params: {
            post_id: router?.query?.id || 1,
          },
        }
      );
      setComments(data?.data?.comments);
      setBody(data?.data?.post[0]?.blog_content);
    };
    getComments();
  }, [router?.query?.id, instance]);

  const [comments, setComments] = useState([]);
  const [body, setBody] = useState("");

  const makeComment = async (data) => {
    try {
      const response = await instance.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/comment",
        {
          comment: data.post,
        },
        {
          timeout: 30000,
          params: {
            postid: router?.query?.id,
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
      toast.error(error.response.data.msg || "No response from server");
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
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <h1 className="mt-5 text-2xl font-medium">Leave a comment</h1>
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
        <div className="flex items-baseline gap-x-3">
          <h1 className="mt-5 text-3xl font-medium">Comments</h1>
          <p className="text-2xl font-medium">({comments.length})</p>
        </div>

        {comments.map((comment, index) => {
          return (
            <ul key={index} className="list-disc px-3 text-lg">
              <li>{comment?.comment}</li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default BlogPage;
