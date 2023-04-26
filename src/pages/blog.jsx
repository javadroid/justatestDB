import BlogComponent from "@/Components/BlogComponent";
import BlogSidebar from "@/Components/BlogSidebar";
import React from "react";

const blog = () => {
  return (
    <section className="my-10 flex">
      <div className="mx-auto flex max-w-7xl flex-col px-3 lg:flex-row lg:items-start lg:gap-5">
        <div>
          <BlogComponent />
          <BlogComponent />
          <BlogComponent />
          <BlogComponent />
          <BlogComponent />
        </div>
        <BlogSidebar />
      </div>
    </section>
  );
};

export default blog;
