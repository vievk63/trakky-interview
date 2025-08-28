import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineStarRate } from "react-icons/md";
import Pizza from "../../assents/hq720.jpg";
function OfferCard2({ data }) {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <p className="font-bold text-[26px] md:text-[32px] uppercase">
            Top Rated Near You
          </p>
        </div>

        <div className="flex overflow-x-auto space-x-4 py-2">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col space-y-2 min-w-[300px]"
            >
              <div
                style={{ backgroundImage: `url(${Pizza})` }}
                className="h-[260px] w-[300px] p-[15px] flex flex-col justify-between rounded-[30px] bg-center bg-cover bg-no-repeat"
              >
                <div className="flex justify-between items-center">
                  <span className=" text-red-900 font-semibold -translate-x-[19px] bg-red-200 px-3 py-3 rounded-[15px] text-[20px]">
                    ONE Free Delivery
                  </span>

                  <div className="">
                    <FaRegHeart fill="#fff" className="text-[33px]" />
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex flex-col justify-end">
                    <p className="text-white font-semibold text-[29px]">
                      ₹125 OFF
                    </p>
                    <p className="text-white font-semibold text-[20px]">
                      ABOVE ₹88
                    </p>
                  </div>
                  <div className="text-[25px] text-brown-100 font-semibold border-l-[5px] border-brown-100 pl-[4px]">
                    AD
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <div className=" text-[22px] md:text-[30px] font-bold">
                  {item.name}
                </div>
                <div className="flex items-center space-x-2">
                  <p className="h-[30px] bg-green-700 w-[30px] rounded-full flex items-center justify-center">
                    <MdOutlineStarRate className="text-white text-[22px]" />
                  </p>
                  <p className="text-[26px]">
                    {item.rating} {item.time}
                  </p>
                </div>
                <div className="text-brown-100 text-[20px]">{item.cuisine}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OfferCard2;
