import React, { useState } from "react";
import { FaChevronLeft, FaUser } from "react-icons/fa6";
import { CiShare2, CiHeart } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdOutlineStarRate } from "react-icons/md";
import { task1 } from "../config/service";
import { fileToBase64 } from "../utlis/helper";

function Task1() {
  const [formData, setFormData] = useState({
    spa_name: "",
    city: "",
    area: "",
    images: [],
    price: "",
    timing: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const base64Images = await Promise.all(
      formData.images.map((file) => fileToBase64(file))
    );

    const payload = {
      ...formData,

      images: base64Images,
    };

    const data = await task1(payload);
    if (data) {
      console.log("API Response:", data);
    }
  };

  return (
    <div className="flex md:flex-row flex-col-reverse w-full justify-between h-full p-6 md:space-x-6">
      <div className="w-full">
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Spa Name</label>
            <input
              type="text"
              name="spa_name"
              value={formData.spa_name}
              onChange={handleChange}
              placeholder="Enter spa name"
              className="border rounded-lg p-4 w-full"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="border rounded-lg p-4 w-full"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Area</label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Enter area"
              className="border rounded-lg p-4 w-full"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Images</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="border rounded-lg p-4 w-full"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="border rounded-lg p-4 w-full"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Timing</label>
            <input
              type="time"
              name="timing"
              value={formData.timing}
              onChange={handleChange}
              className="border rounded-lg p-4 w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-[#513895] text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>

      <div className=" w-full md:w-1/2 border rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <FaChevronLeft />
            <p className="text-[#513895] text-[28px] font-bold">Trakky</p>
          </div>
          <FaUser />
        </div>
        <div>
          {" "}
          {formData.images.length > 0 && (
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {formData.images.map((file, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-[330px] object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className="flex items-center justify-between my-2">
          <div> Opens {formData?.timing}</div>
          <div className="flex items-center space-x-3">
            <CiShare2 />
            <CiHeart />
          </div>
        </div>

        <div className="space-y-2 flex flex-col">
          <p className="text-[22px] font-bold">{formData?.spa_name}</p>
          <p className="">
            {formData?.area},{formData?.city}`
          </p>
          <p className="text-[#513895] font-semibold">{`₹${formData?.price}`}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="h-[20px] bg-[#513895] w-[20px] flex items-center justify-center rounded-full">
            <MdOutlineStarRate className="text-white" />
          </p>
          <p>4.48 15 Reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Task1;
