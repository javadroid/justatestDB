import { CreditCardIcon, DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export const sidelists = [
  {
    title:"Receive SMS",
    icon:<><EnvelopeIcon className=" h-6 w-6 text-color-primary" /></>,
    href: "/user/receive-sms"
  },
  {
    title: "Rent",
    icon:<><DevicePhoneMobileIcon className="h-6 w-6  text-color-primary " /></>,
    href:"/user/rent"
  },
  {
    title:"profile",
    icon:<><UserCircleIcon className="h-6 w-6 text-color-primary" /></>,
    href: "/user/payment"
  },
  {
    title:"Top up balance",
    icon:<><CreditCardIcon className="h-6 w-6 text-color-primary" /></>,
  },
  {},
  {},
  {},
  {},
]