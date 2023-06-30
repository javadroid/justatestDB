import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import {
  UserCircleIcon,
  HandThumbUpIcon,
  InformationCircleIcon,
  Cog6ToothIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";


const Sidebar = () => {
const router = useRouter();

  const sidebarLists = [
    {
      name: "Receive-Sms",
      path: "/user/receive-sms",
      icon: <EnvelopeIcon className=" h-6 w-6 text-color-primary" />,
    },
    {
      name: "Rent",
      path: "/user/rent",
      icon: <DevicePhoneMobileIcon className=" h-6 w-6 text-color-primary" />,
    },
    {
      name: "Profile",
      path: "/user/profile",
      icon: <UserCircleIcon className=" h-6 w-6 text-color-primary" />,
    },
    {
      name: "Top up balance",
      path: "/user/payment",
      icon: <CreditCardIcon className=" h-6 w-6 text-color-primary" />,
    },
    {
      name: "Earn money sms",
      path: "/user/earn",
      icon: <HandThumbUpIcon className=" h-6 w-6 text-color-primary" />,
    },
    {
      name: "Instructions",
      path: "/user/instructions",
      icon: <InformationCircleIcon className=" h-6 w-6 text-color-primary" />,
    },
    {
      name: "API connection",
      path: "/api-connection",
      icon: <Cog6ToothIcon className=" h-6 w-6 text-color-primary" />,
    },
    {
      name: "Feedback",
      path: "/user/feedback",
      icon: <PhoneArrowUpRightIcon className=" h-6 w-6 text-color-primary" />,
    },
    {
      name: "Help",
      path: "/help",
      icon: <InformationCircleIcon className=" h-6 w-6 text-color-primary" />,
    },
    {
      name: "Log out",
      path: "/",
      icon: <ArrowLeftOnRectangleIcon className=" h-6 w-6 text-color-primary" />,
    },
  ];

  return (
    <aside className="h-auto w-[12%] bg-color-bg_primary-500 lg:w-1/4 lg:px-8">
      <div className="flex w-full flex-col space-y-2 text-sm items-center lg:items-start lg:text-sm xl:px-8 lg:mt-12 lg:font-medium">
        {sidebarLists.map((list, index) => {
          const isActive = list.path === router.pathname;
        return (<Link title={list.name} key={index} href={list.path} className={isActive ? "w-full bg-color-bg_light flex items-center gap-3 p-2 relative rounded-xl active:bg-color-bg_light" :"w-full flex items-center gap-3 p-2 relative rounded-xl transition-all ease-in-out duration-300 hover:bg-color-bg_light active:bg-color-bg_light"}>
          {list.icon}
          <span className="hidden lg:block">{list.name}</span>
        </Link>)
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
