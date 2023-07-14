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
      icon: <EnvelopeIcon className="h-6 w-6 text-color-primary" />,
    },
    {
      name: "Rent",
      path: "/user/rent",
      icon: <DevicePhoneMobileIcon className="h-6 w-6 text-color-primary" />,
    },
    {
      name: "Profile",
      path: "/user/profile",
      icon: <UserCircleIcon className="h-6 w-6 text-color-primary" />,
    },
    {
      name: "Top up balance",
      path: "/user/payment",
      icon: <CreditCardIcon className="h-6 w-6 text-color-primary" />,
    },
    {
      name: "Earn money sms",
      path: "/user/earn",
      icon: <HandThumbUpIcon className="h-6 w-6 text-color-primary" />,
    },
    {
      name: "Instructions",
      path: "/user/instructions",
      icon: <InformationCircleIcon className="h-6 w-6 text-color-primary" />,
    },
    {
      name: "API connection",
      path: "/api-connection",
      icon: <Cog6ToothIcon className="h-6 w-6 text-color-primary" />,
    },
    {
      name: "Feedback",
      path: "/user/feedback",
      icon: <PhoneArrowUpRightIcon className="h-6 w-6 text-color-primary" />,
    },
    {
      name: "Help",
      path: "/help",
      icon: <InformationCircleIcon className="h-6 w-6 text-color-primary" />,
    },
    {
      name: "Log out",
      path: "/",
      icon: (
        <ArrowLeftOnRectangleIcon className="h-6 w-6 text-color-primary" />
      ),
    },
  ];

  return (
    <aside className="h-auto w-[12%] bg-color-bg_primary-500 lg:w-1/4 lg:px-8">
      <div className="flex w-full flex-col items-center space-y-2 text-sm lg:mt-12 lg:items-start lg:text-sm lg:font-medium xl:px-8">
        {sidebarLists.map((list, index) => {
          const isActive = list.path === router.pathname;
          return (
            <Link
              onClick={() => {
                list.name === "Log out" ? sessionStorage.clear() : "";
              }}
              title={list.name}
              key={index}
              href={list.path}
              className={
                isActive
                  ? "relative flex w-full items-center justify-center gap-3 rounded-xl bg-color-bg_light p-2 active:bg-color-bg_light lg:justify-normal"
                  : "relative flex w-full items-center justify-center gap-3 rounded-xl p-2 transition-all duration-300 ease-in-out hover:bg-color-bg_light active:bg-color-bg_light lg:justify-normal"
              }
            >
              {list.icon}
              <span className="hidden lg:block">{list.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
