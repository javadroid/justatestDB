import React from "react";
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

const Sidebar = () => {
  return (
    // <>
    //   <button
    //     data-drawer-target="separator-sidebar"
    //     data-drawer-toggle="separator-sidebar"
    //     aria-controls="separator-sidebar"
    //     type="button"
    //     class="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 dark:text-gray-400 dark:focus:ring-gray-600 dark:hover:bg-gray-700 sm:hidden"
    //   >
    //     <span class="sr-only">Open sidebar</span>
    //     <svg
    //       class="h-6 w-6"
    //       aria-hidden="true"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         clip-rule="evenodd"
    //         fill-rule="evenodd"
    //         d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
    //       ></path>
    //     </svg>
    //   </button>

    //   <aside
    //     id="separator-sidebar"
    //     class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
    //     aria-label="Sidebar"
    //   >
    //     <div class="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
    //       <ul class="space-y-2 font-medium">
    //         <li>
    //           <a
    //             href="#"
    //             class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
    //               <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
    //             </svg>
    //             <span class="ml-3">Dashboard</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
    //             </svg>
    //             <span class="ml-3 flex-1 whitespace-nowrap">Kanban</span>
    //             <span class="ml-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
    //               Pro
    //             </span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
    //               <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
    //             </svg>
    //             <span class="ml-3 flex-1 whitespace-nowrap">Inbox</span>
    //             <span class="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
    //               3
    //             </span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
    //                 clip-rule="evenodd"
    //               ></path>
    //             </svg>
    //             <span class="ml-3 flex-1 whitespace-nowrap">Users</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
    //                 clip-rule="evenodd"
    //               ></path>
    //             </svg>
    //             <span class="ml-3 flex-1 whitespace-nowrap">Products</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
    //                 clip-rule="evenodd"
    //               ></path>
    //             </svg>
    //             <span class="ml-3 flex-1 whitespace-nowrap">Sign In</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
    //                 clip-rule="evenodd"
    //               ></path>
    //             </svg>
    //             <span class="ml-3 flex-1 whitespace-nowrap">Sign Up</span>
    //           </a>
    //         </li>
    //       </ul>
    //       <ul class="mt-4 space-y-2 border-t border-gray-200 pt-4 font-medium dark:border-gray-700">
    //         <li>
    //           <a
    //             href="#"
    //             class="group flex items-center rounded-lg p-2 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               focusable="false"
    //               data-prefix="fas"
    //               data-icon="gem"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
    //               ></path>
    //             </svg>
    //             <span class="ml-4">Upgrade to Pro</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="group flex items-center rounded-lg p-2 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
    //                 clip-rule="evenodd"
    //               ></path>
    //             </svg>
    //             <span class="ml-3">Documentation</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="group flex items-center rounded-lg p-2 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
    //             </svg>
    //             <span class="ml-3">Components</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="group flex items-center rounded-lg p-2 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
    //                 clip-rule="evenodd"
    //               ></path>
    //             </svg>
    //             <span class="ml-3">Help</span>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </aside>
    <aside className="h-screen bg-color-bg_primary-500 ">
      <div className="m-4 flex w-full flex-col space-y-10 text-base lg:px-7 lg:mt-12 lg:font-medium">
        <div className="flex items-center gap-1">
          <EnvelopeIcon className=" h-6 w-6 text-color-primary" />
          <p className="hidden lg:block">Receive SMS</p>
        </div>
        <div className="flex items-center gap-1">
          <DevicePhoneMobileIcon className="h-6 w-6  text-color-primary " />
          <p className="hidden lg:block"> Rent</p>
        </div>
        <div className="flex items-center gap-1">
          <UserCircleIcon className="h-6 w-6 text-color-primary" />
          <p className="hidden lg:block"> Profile</p>
        </div>
        <div className="flex items-center gap-1">
          <CreditCardIcon className="h-6 w-6 text-color-primary" />
          <p className="hidden lg:block">Top up balance</p>
        </div>
        <div className="flex items-center gap-1">
          <HandThumbUpIcon className="h-6 w-4 text-color-primary" />
          <p className="hidden lg:block">Earn money sms</p>
        </div>
        <div className="flex items-center gap-1">
          <InformationCircleIcon className="h-6 w-6 text-color-primary" />
          <p className="hidden lg:block"> Instructions</p>
        </div>
        <div className="flex items-center gap-1">
          <Cog6ToothIcon className="h-6 w-6 text-color-primary" />
          <p className="hidden lg:block">API connection</p>
        </div>
        <div className="flex items-center gap-1">
          <PhoneArrowUpRightIcon className="h-6 w-6 text-color-primary" />
          <p className="hidden lg:block"> Feedback</p>
        </div>
        <div className="flex flex-col  space-y-6">
          <div className="flex items-center gap-1">
            <InformationCircleIcon className="h-6 w-6 text-color-primary" />
            <p className="hidden lg:block"> Help</p>
          </div>
          <div className="flex items-center gap-1">
            <ArrowLeftOnRectangleIcon className="h-6 w-6 text-color-primary" />
            <p className="hidden lg:block"> Log out</p>
          </div>
        </div>
      </div>
    </aside>
    // </>
  );
};

export default Sidebar;
