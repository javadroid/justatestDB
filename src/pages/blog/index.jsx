import BlogComponent from "@/Components/BlogComponent";
import BlogSidebar from "@/Components/BlogSidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { get } from "react-hook-form";

const useBlogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const instance = axios.create({
      validateStatus: function (status) {
        return status >= 200 && status < 300; // default
      },
    });

    const getBlogs = async () => {
      const data = await instance.get(
        process.env.NEXT_PUBLIC_BASE_URL + "/blog/posts"
      );
      setBlogData(data?.data);
    };
    getBlogs();
  }, []);

  return blogData;
};

const Blog = () => {
  const blogData = useBlogs();
  const date = new Date();

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
        </div>
        <BlogSidebar />
      </div>
    </section>
  );
};

export default Blog;
