import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import rus from '../assets/flags/Russia.svg'
import vib from '../assets/socials/Viber.svg'


const History = () => {
  const histories = [
    {
      title: "Bought",
      time: "2025-07-15 12:23:48"
    },
    {
      title: "Service",
      icon: (<>
          <Image src={vib} alt="" className="mr-1" />Viber
      </>)
    },
    {
      title: "Country",
      icon: (<>
          <Image src={rus} alt="" width={20} className="mr-2" />Russia
        </>)
    },
    {
      title: "Phone",
      icon: (<>
        +134346088643<ClipboardDocumentCheckIcon width={20} className="text-color-primary ml-3" />
        </>)
    },
    {
      title: "Price",
      price: "0.19$"
    },
    {
      title: "Message",
      message: "SMS not received",
      style: "text-color-api-red bg-[rgba(255,67,130,.1)] py-2 rounded-3xl md:rounded-md"
    }
  ]
  return (
    <div>
      <div>
        <h2 className="text-center font-extrabold md:text-left md:pl-8 md:text-xl">History</h2>
      </div>
      <div className="px-2 pt-8">
        <div className="max-w-3xl mx-auto relative bg-color-white rounded-3xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] pt-6 mb-8 lg:max-w-4xl">
          <div className="px-2">
            <div className="wrapper pb-10">
              <div className="table overflow-hidden text-sm md:text-base lg:px-4">
                <div className="header-row">
                  {histories.map((history, index) =>(
                    <div key={index} className="th text-color-table_gray">
                    <p>{history.title}</p>
                    </div>
                  ))}
                </div>
                <div className="table-body lg:text-xs">
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

export default History
