const Cookies = () => {
  return (
    <div className="absolute bottom-6 mx-4 hidden rounded-lg bg-white p-8 shadow-2xl">
      <h2 className="text-lg font-bold">
        Are you sure you want to accept cookies?
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        This website uses cookies in order to offer you the most relevant
        information. Please accept cookies for optimal performance
      </p>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600 transition hover:bg-green-600 hover:text-white"
        >
          Yes, I&apos;m sure accept all cookies
        </button>

        <button
          type="button"
          className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
        >
          No, manage cookies
        </button>
        {/* <tbody className="text-left block w-full md:inline-block"> */}
          {/* <tr className="block w-full lg:inline-block"> */}
        {/* td   className="block text-right pl-[50%] py-2 relative w-full before:absolute before:content-[attr(data-label)] before:left-0 before:width-1/2 before:text-color-table_gray md:text-left lg:inline lg:before:hidden" */}
      </div>
    </div>
  );
};

export default Cookies;
