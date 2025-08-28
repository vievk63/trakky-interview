import React from "react";
import Images from "../../assents";
function CarouselCard({ title, subtitle1, subtitle2, buttonText, image }) {
  return (
    <>
      <div className="h-[241px] flex items-center rounded-lg p-[15px] bg-red-500 w-full">
        <div className="flex flex-col w-full">
          <p className="text-white text-[20px] md:text-[32px] mb-3 font-bold">
            {title}
          </p>
          <p className=" text-[15px] md:text-[25px] font-bold text-red-50">
            {subtitle1}
          </p>
          <p className="text-[15px] md:text-[25px] md:mt-[-9px] font-bold text-red-50">
            {subtitle2}
          </p>
          <p className="uppercase bg-red-50 w-[110px] md:text-[18px] text-[14px] md:w-[160px] flex items-center justify-center mt-2 rounded-full px-[10px] md:px-[20px] py-[6px] md:py-[12px] font-extrabold">
            {buttonText}
          </p>
        </div>
        <div className="w-full flex justify-end">
          <img
            src={Images.Poster}
            className=" h-[120px] md:h-[200px] rounded-lg max-w-[380px] w-full"
          />
        </div>
      </div>
    </>
  );
}

export default CarouselCard;
