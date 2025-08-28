import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { CiFilter, CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import OfferCard from "../component/common/OfferCard";
import Images from "../assents";
import OfferCard2 from "../component/common/OfferCard2";
import Restaurant from "../component/common/Restaurant";
import { Carousel } from "@material-tailwind/react";
import CarouselCard from "../component/common/CarouselCard";

function Task3() {
  // data/carouselData.js

  const carouselData = [
    {
      title: "Flat 50% off",
      subtitle1: "The Unstoppable deal ",
      subtitle2: "the season is up grab",
      buttonText: "Order Now",
    },
    {
      title: "Mega Sale 40% off",
      subtitle1: "The Unstoppable deal ",
      subtitle2: "the season is up grab",
      buttonText: "Shop Now",
    },
    {
      title: "Special Discount",
      subtitle1: "The Unstoppable deal ",
      subtitle2: "the season is up grab",
      buttonText: "Buy Now",
    },
  ];

  const offersData = [
    {
      name: "The Black Biryani",
      rating: 4.1,
      time: "25-30 mins",
      cuisine: "Biryani",
    },
    {
      name: "Chicken Tandoori",
      rating: 4.5,
      time: "30-35 mins",
      cuisine: "Indian",
    },
    {
      name: "The Black Biryani",
      rating: 4.1,
      time: "25-30 mins",
      cuisine: "Biryani",
    },
    {
      name: "Chicken Tandoori",
      rating: 4.5,
      time: "30-35 mins",
      cuisine: "Indian",
    },
    {
      name: "The Black Biryani",
      rating: 4.1,
      time: "25-30 mins",
      cuisine: "Biryani",
    },
    {
      name: "Chicken Tandoori",
      rating: 4.5,
      time: "30-35 mins",
      cuisine: "Indian",
    },
    {
      name: "The Black Biryani",
      rating: 4.1,
      time: "25-30 mins",
      cuisine: "Biryani",
    },
    {
      name: "Chicken Tandoori",
      rating: 4.5,
      time: "30-35 mins",
      cuisine: "Indian",
    },
  ];
  const categories = [
    { name: "Cakes Desserts", img: Images.cake },
    { name: "Pizzas", img: Images.Burger },
    { name: "Chinese", img: Images.pizza },
    { name: "Paratha", img: Images.cake1 },
    { name: "North Indian", img: Images.cake },
    { name: "Gift Hampers", img: Images.pizza1 },
    { name: "North Indian", img: Images.cake },
    { name: "Burgers", img: Images.pizza1 },
    { name: "North Indian", img: Images.cake },

    { name: "Biryani", img: Images.Burger },
  ];
  const restaurantData = [
    {
      name: "The Belgian Waffle Co.",
      rating: "4.6 (5.6K+)",
      time: "20-25 mins",
      cuisine: "Waffle, Desserts, Ice Cream",
      offer: "20% OFF",
      offerDetail: "UPTO ₹50",
      distance: "2.0 km",
      trophyText: "Best in Desserts",
    },
    {
      name: "Pizza Delight",
      rating: "4.4 (3.2K+)",
      time: "30-35 mins",
      cuisine: "Italian, Pizza",
      offer: "15% OFF",
      offerDetail: "UPTO ₹40",
      distance: "3.5 km",
      trophyText: "Popular Choice",
    },
    {
      name: "Sushi World",
      rating: "4.7 (2.1K+)",
      time: "25-30 mins",
      cuisine: "Japanese, Sushi",
      offer: "10% OFF",
      offerDetail: "UPTO ₹60",
      distance: "4.0 km",
      trophyText: "Top Rated",
      deliveryText: "FREE DELIVERY",
      deliveryType: "ONE LITE",
    },
    {
      name: "Burger Hub",
      rating: "4.5 (6.3K+)",
      time: "15-20 mins",
      cuisine: "Fast Food, Burgers",
      offer: "25% OFF",
      offerDetail: "UPTO ₹70",
      distance: "1.8 km",
      trophyText: "Best Fast Food",
      deliveryText: "FREE DELIVERY",
      deliveryType: "STANDARD",
    },
    {
      name: "Green Bowl",
      rating: "4.3 (1.8K+)",
      time: "20-25 mins",
      cuisine: "Salads, Healthy Food",
      offer: "5% OFF",
      offerDetail: "UPTO ₹30",
      distance: "2.5 km",
      trophyText: "Healthy Choice",
    },
    {
      name: "Tandoori Nights",
      rating: "4.6 (4.0K+)",
      time: "30-35 mins",
      cuisine: "Indian, North Indian",
      offer: "20% OFF",
      offerDetail: "UPTO ₹50",
      distance: "3.0 km",
      trophyText: "Chefs Special",
    },
  ];

  return (
    <>
      <div className="md:p-[20px] p-[8px] flex flex-col space-y-4">
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-1">
              <p className="">
                <IoMdHome className="text-orange-600 text-[24px]" />
              </p>
              <p className="font-bold text-[18px]">Home</p>
              <p>
                <FaAngleDown />
              </p>
            </div>
            <div className="text-[14px] md:text-[18px]">
              Samras Bouys Hostel ,123 feert ring road..
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <div className=" w-[60px] md:w-[70px] py-2 rounded-full text-[19px] font-bold text-white flex items-center justify-center bg-orange-500 relative">
              <span className="absolute top-[-8px] text-[13px] md:text-[15px] text-white">
                BUY
              </span>
              One
            </div>
            <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center bg-blue-gray-700">
              <FaUser className="text-white" />
            </div>
          </div>
        </div>
        {/* ---------------------------------- */}

        <div className="flex items-center space-x-4  pr-[15px] border border-gray-400 rounded">
          <input
            type="text"
            placeholder="Search For Cherimts Special"
            className=" px-2 py-2 w-full outline-none rounded"
          />
          <div className="flex items-center space-x-2">
            <p className="text-[18px] pr-[8px] border-r border-blue-gray-800">
              <CiSearch />
            </p>
            <p className="text-orange-600 text-[18px]">
              <FaMicrophone />
            </p>
          </div>
        </div>
        {/* ---------------------------------- */}

        <div>
          <Carousel className="rounded-xl">
            {carouselData.map((item, index) => (
              <CarouselCard
                key={index}
                title={item.title}
                subtitle1={item.subtitle1}
                subtitle2={item.subtitle2}
                buttonText={item.buttonText}
                image={item.image}
              />
            ))}
          </Carousel>
        </div>
        {/* ---------------------------------- */}
        <div className="">
          <OfferCard data={offersData} />
        </div>
        {/* ---------------------------------- */}
        <div className="py-[25px] flex flex-col space-y-5">
          <div className="text-[20px] md:text-[28px] font-normal mb-4 uppercase">
            Gaurang, whats on your mind?
          </div>
          <div className="flex space-x-12 w-full max-w-screen overflow-x-auto py-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 cursor-pointer"
              >
                <div className="w-full h-[90px] rounded-full overflow-hidden shadow-lg mb-2">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="max-w-[140px] w-full h-full object-fill"
                  />
                </div>
                <p className="text-center text-[16px] font-medium">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex space-x-12 w-full max-w-screen overflow-x-auto py-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 cursor-pointer"
              >
                <div className="w-full h-[90px] rounded-full overflow-hidden shadow-lg mb-2">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="max-w-[140px] w-full h-full object-fill"
                  />
                </div>
                <p className="text-center text-[16px] font-medium">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* ---------------------------------- */}
        <div className="">
          <OfferCard2 data={offersData} />
        </div>
        {/* ---------------------------------- */}
        <div className="flex items-center w-full px-[10px] justify-center space-x-4 overflow-x-auto">
          <div className="flex items-center space-x-2 px-[14px] py-[10px] rounded-full border border-brown-100">
            <p className="font-bold md:text-[22px] text-[16px]">Filter</p>
            <p className="text-[30px]">
              <CiFilter />
            </p>
          </div>

          <div className="flex items-center space-x-2 px-[14px] py-[10px] rounded-full border border-brown-100">
            <p className="font-bold md:text-[22px] text-[16px]">Sort</p>
            <p className="text-[30px]">
              <CiFilter />
            </p>
          </div>

          <div className="flex items-center space-x-2 px-[14px] py-[10px] rounded-full border border-brown-100">
            <p className="font-bold md:text-[22px] text-[16px]">
              Cash on Delivery
            </p>
          </div>

          <div className="flex items-center space-x-2 px-[14px] py-[10px] rounded-full border border-brown-100">
            <p className="font-bold md:text-[22px] text-[16px]">Price</p>
          </div>

          <div className="flex items-center space-x-2 px-[14px] py-[10px] rounded-full border border-brown-100">
            <p className="font-bold md:text-[22px] text-[16px]">Discount</p>
          </div>

          <div className="flex items-center space-x-2 px-[14px] py-[10px] rounded-full border border-brown-100">
            <p className="font-bold md:text-[22px] text-[16px]">Rating</p>
          </div>

          <div className="flex items-center space-x-2 px-[14px] py-[10px] rounded-full border border-brown-100">
            <p className="font-bold md:text-[22px] text-[16px]">Brand</p>
          </div>
          <div className="flex items-center space-x-2 px-[14px] py-[10px] rounded-full border border-brown-100">
            <p className="font-bold md:text-[22px] text-[16px]">Discount </p>
          </div>

          <div className="flex items-center space-x-2 px-[14px] py-[10px] rounded-full border border-brown-100">
            <p className="font-bold md:text-[22px] text-[16px]">Price</p>
          </div>

          <div className="flex items-center space-x-2 px-[14px] py-[10px] rounded-full border border-brown-100">
            <p className="font-bold md:text-[22px] text-[16px]">Brand</p>
          </div>
        </div>
        {/* ---------------------------------- */}
        <div className="">
          <Restaurant data={restaurantData} />
        </div>
      </div>
    </>
  );
}

export default Task3;
