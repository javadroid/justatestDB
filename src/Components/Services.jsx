import Link from "next/link";

const Services = () => {
  return (
    <div className="mx-5 flex flex-col items-center rounded-lg rounded-t-none bg-slate-50 drop-shadow-xl lg:mx-auto lg:max-w-7xl lg:flex-row">
      <div className="m-5 mx-auto grid max-w-sm grid-cols-2 justify-items-start gap-10 sm:px-5 md:gap-x-36 lg:mx-10 lg:max-w-4xl lg:grid-cols-4 lg:gap-x-32">
        <div>
          <p>Country</p>
          <div>
            <p>⛳Nigeria</p>
          </div>
        </div>
        <div>
          <p>Service</p>
          <div>
            <p>✅Whatsapp</p>
          </div>
        </div>
        <div className="">
          <p>Activated</p>
          <p>327 times</p>
        </div>
        <div>
          <p>Cost</p>
          <p>0.19 $</p>
        </div>
      </div>
      <div className="flex w-full flex-col self-center lg:w-1/4">
        <Link href={"/login"} className="mx-5 mb-6 rounded-lg bg-color-primary px-2 py-2 text-center text-white">
          <button>
            Receive SMS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
