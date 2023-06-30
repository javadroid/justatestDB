import BlogComponent from "@/Components/BlogComponent";
import BlogSidebar from "@/Components/BlogSidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";

const blog = () => {
  var instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  });

  useEffect(() => {
    const getBlogs = async () => {
      const data = await instance.get(
        process.env.NEXT_PUBLIC_BASE_URL + "/blog/posts"
      );
      console.log(data);
      setBlogData(data?.data);
    };
    getBlogs();
  }, []);

  const [blogData, setBlogData] = useState([]);
  // console.log("useState data", blogData);
  // console.log("useState id", blogData?.posts?.id);
  const date = new Date();
  //date.toDateString

  return (
    <section className="my-10 flex">
      <div className="mx-auto flex max-w-7xl flex-col px-3 lg:flex-row lg:items-start lg:gap-5">
        <div>
          {blogData?.post?.map((blog) => {
            return (
              <BlogComponent
                key={blog.id}
                title={blog.title}
                description={blog.description}
                Author={blog.author}
                date={date.toDateString(blog.date_created)}
                id={blog.id}
              />
            );
          })}
          {/* <BlogComponent /> */}
        </div>
        <BlogSidebar />
      </div>
    </section>
  );
};

export default blog;
