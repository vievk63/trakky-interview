import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ size, color, className }) => {
  return (
    <ClipLoader color="#000000" size={22} className={`mr-1 ${className}`} />
  );
};

export default Loader;
