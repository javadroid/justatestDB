import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import rus from '../assets/flags/Russia.svg'
import vib from '../assets/socials/Viber.svg'

const Historyy = () => {
  const histories = [
    {
      title: "Bought",
      icon: "2025-07-15 12:23:48",
      style: "col-start-1 col-span-1 row-start-1 row-span-1"
    },
    {
      title: "Service",
      icon: (<>
          <Image src={vib} alt="" className="mr-1" />Viber
      </>),
      style: "col-start-2 col-span-1 row-start-1 row-span-2"
    },
    {
      title: "Country",
      icon: (<>
          <Image src={rus} alt="" width={20} className="mr-2" />Russia
        </>),
      style: "col-start-1 col-span-2 lg:col-start-3 lg:col-span-1 row-start-2 row-span-1 lg:row-start-1"
    },
    {
      title: "Phone",
      icon: (<>
        +134346088643<ClipboardDocumentCheckIcon width={20} className="text-color-primary ml-3" />
        </>),
      style: "col-start-1 col-span-1 lg:col-start-4 row-start-3 row-span-1 lg:row-start-1"
    },
    {
      title: "Price",
      icon: "0.19$",
      style: "col-start-2 col-span-1 lg:col-start-5 row-start-3 row-span-1 lg:row-start-1"
    },
    {
      title: "Message",
      icon: "SMS not received",
      style: "col-start-1 col-span-2 lg:col-start-6 lg:col-span-1 row-start-4 row-span-1 lg:row-start-1",
      style2: "text-color-api-red bg-[rgba(255,67,130,.1)] py-2 rounded-3xl md:rounded-md"
    }
  ]
  return (
    <div>
      <div>
      <div>
        <h2 className="text-center font-extrabold md:text-left md:pl-8 md:text-xl">History</h2>
      </div>
      <div className="px-2 pt-8">
        <div className="max-w-3xl mx-auto relative bg-color-white rounded-3xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] pt-6 mb-8 lg:max-w-4xl">
          <div className="px-2">
            <div className="wrapper pb-10">
              <div className="table w-full overflow-hidden text-sm md:text-base lg:px-4">
                <div className="header-row hidden lg:grid ">
                  {histories.map((history, index) =>(
                    <div key={index} className="th text-color-table_gray">
                    <p>{history.title}</p>
                    </div>
                  ))}
                </div>
                <div className="table-body lg:text-xs">
                  <div className={"table-row shadow-[0_0_12px_-10px] rounded-xl pb-4 grid-cols-2 lg:grid-cols-[4fr_3fr_4fr_4fr_1fr_4fr] grid-rows-[auto_auto_auto_auto] lg:grid-rows-1 md:shadow-none md:rounded-none"}>
                  {histories.map((history, id) => (
                    <div key={id} className={ history.style}>
                        <h6 className="text-color-table_gray font-medium">{history.title}</h6>
                        <p className={history.style2}>{history.icon}</p>
                    </div>
                     ))}
                    {/* <div className="td service">
                        <h6 className="text-color-table_gray font-medium">Service</h6>
                        <p className="flex items-center">
                          <Image src={vib} alt="" className="mr-1" />
                          Viber
                        </p>
                    </div>
                    <div className="td country">
                        <h6 className="text-color-table_gray font-medium">Country</h6>
                        <p className="flex items-center">
                          <Image src={rus} alt="" width={20} className="mr-2" />Russia</p>
                    </div>
                    <div className="td phone">
                        <h6 className="text-color-table_gray font-medium">Phone</h6>
                        <p className="flex items-center">+134346088643
                        <ClipboardDocumentCheckIcon width={20} className="text-color-primary ml-3" /></p>
                    </div>
                    <div className="td price">
                        <h6 className="text-color-table_gray font-medium">Price</h6>
                        <p>$0.19</p>
                    </div>
                    <div className="td message">
                        <h6 className="text-color-table_gray font-medium">Message</h6>
                        <p className="text-color-api-red bg-[rgba(255,67,130,.1)] py-2 rounded-3xl md:rounded-md">SMS not recieved</p>
                    </div> */}
                  </div>

                  {/* <div className="table-row shadow-[0_0_12px_-10px] rounded-xl pb-4 md:shadow-none md:rounded-none">
                    <div className="td bought md:py-2">
                        <h6 className="text-color-table_gray font-medium">Bought</h6>
                        <p>2025-07-15 12:23:48</p>
                    </div>
                    <div className="td service">
                        <h6 className="text-color-table_gray font-medium">Service</h6>
                        <p className="flex items-center">
                          <Image src={vib} alt="" className="mr-1" />
                          Viber
                        </p>
                    </div>
                    <div className="td country">
                        <h6 className="text-color-table_gray font-medium">Country</h6>
                        <p className="flex items-center">
                          <Image src={rus} alt="" width={20} className="mr-2" />Russia</p>
                    </div>
                    <div className="td phone">
                        <h6 className="text-color-table_gray font-medium">Phone</h6>
                        <p className="flex items-center">+134346088643
                        <ClipboardDocumentCheckIcon width={20} className="text-color-primary ml-3" /></p>
                    </div>
                    <div className="td price">
                        <h6 className="text-color-table_gray font-medium">Price</h6>
                        <p>$0.19</p>
                    </div>
                    <div className="td message">
                        <h6 className="text-color-table_gray font-medium">Message</h6>
                        <p className="text-color-api-red bg-[rgba(255,67,130,.1)] py-2 rounded-3xl md:rounded-md">SMS not recieved</p>
                    </div>
                  </div>
                  <div className="table-row shadow-[0_0_12px_-10px] rounded-xl pb-4 md:shadow-none md:rounded-none">
                    <div className="td bought md:py-2">
                        <h6 className="text-color-table_gray font-medium">Bought</h6>
                        <p>2025-07-15 12:23:48</p>
                    </div>
                    <div className="td service">
                        <h6 className="text-color-table_gray font-medium">Service</h6>
                        <p className="flex items-center">
                          <Image src={vib} alt="" className="mr-1" />
                          Viber
                        </p>
                    </div>
                    <div className="td country">
                        <h6 className="text-color-table_gray font-medium">Country</h6>
                        <p className="flex items-center">
                          <Image src={rus} alt="" width={20} className="mr-2" />Russia</p>
                    </div>
                    <div className="td phone">
                        <h6 className="text-color-table_gray font-medium">Phone</h6>
                        <p className="flex items-center">+134346088643
                        <ClipboardDocumentCheckIcon width={20} className="text-color-primary ml-3" /></p>
                    </div>
                    <div className="td price">
                        <h6 className="text-color-table_gray font-medium">Price</h6>
                        <p>$0.19</p>
                    </div>
                    <div className="td message">
                        <h6 className="text-color-table_gray font-medium">Message</h6>
                        <p className="text-color-api-red bg-[rgba(255,67,130,.1)] py-2 rounded-3xl md:rounded-md">SMS not recieved</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Historyy
