import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineStarRate } from "react-icons/md";
import Pizza from "../../assents/Copycat-McDonalds-French-Fries-.webp";
import Images from "../../assents";
import { BsThreeDotsVertical } from "react-icons/bs";

function Restaurant({ data }) {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <p className="font-bold text-[24px] md:text-[32px] uppercase">
            Top 2294 Restaurant to explore
          </p>
        </div>

        <div className="flex flex-col overflow-x-auto space-y-10 py-2">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex space-x-2 md:space-x-8 min-w-[300px] w-full"
            >
              <div
                style={{ backgroundImage: `url(${Pizza})` }}
                className="h-[280px] w-[350px] p-[15px] flex flex-col justify-between rounded-[30px] bg-center bg-cover bg-no-repeat"
              >
                <div className="flex justify-end items-center">
                  <div className="">
                    <FaRegHeart fill="#fff" className="text-[43px]" />
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex flex-col justify-end">
                    <p className="text-white font-semibold text-[19px] md:text-[29px]">
                      ₹125 OFF
                    </p>
                    <p className="text-white font-semibold text-[14px] md:text-[20px]">
                      ABOVE ₹88
                    </p>
                  </div>
                  <div className="text-[14px] md:text-[25px] text-brown-100 font-semibold border-l-[5px] border-brown-100 pl-[4px]">
                    AD
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src={Images.Trophy} className="h-[35px] md:h-[40px]" />
                    <p className="text-[14px] md:text-[22px] font-bold">
                      Best in Deserets
                    </p>
                  </div>
                  <div>
                    <BsThreeDotsVertical className="text-gray-600 text-[26px]" />
                  </div>
                </div>

                <div className=" text-[22px] md:text-[30px] font-bold">
                  {item.name}
                </div>
                <div className="flex items-center space-x-2">
                  <p className=" h-[25px] md:h-[30px] bg-green-700 w-[25px] md:w-[30px] rounded-full flex items-center justify-center">
                    <MdOutlineStarRate className="text-white text-[19px] md:text-[22px]" />
                  </p>
                  <p className=" text-[16px] md:text-[26px]">
                    {item.rating} {item.time}
                  </p>
                </div>
                <div className="text-brown-100 text-[14px] md:text-[20px]">
                  {item.cuisine}
                </div>
                <div className="text-brown-100 text-[14px] md:text-[20px]">
                  Navrangpura {item.distance}
                </div>

                <div className="mt-3 bg-gradient-to-r from-red-50 via-red-50 to-red-100 flex items-center justify-between px-[22px] md:px-[35px] py-[5px] md:py-[8px] w-full rounded-full">
                  <span className="font-extrabold text-red-900 text-[15px] md:text-[30px]">
                    FREE DELIVERY
                  </span>
                  <span className="flex flex-col">
                    <p className="font-extrabold text-red-900 text-[15px] md:text-[25px]">
                      ONE
                    </p>
                    <p className="border-2 px-[4px] flex items-center justify-center rounded-md border-red-900 text-red-900 text-[12px] md:text-[19px]">
                      LITE
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Restaurant;
