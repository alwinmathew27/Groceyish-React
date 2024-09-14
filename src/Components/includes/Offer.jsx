import React from 'react';
import banner1 from '../../assets/images/offer image/Banner-1.webp';
import banner2 from '../../assets/images/offer image/Banner-2.webp';
import Arrow from "../../assets/images/offer image/li_arrow-right.png";
const Offer = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0 py-4 md:py-8 mt-10 mb-14">
      <div className="relative w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden">
        <img src={banner1} alt="Free delivery offer" className="w-full h-64 md:h-full object-cover" />
        <div className="absolute inset-0 flex items-center p-4 md:p-8">
          <div className="text-left">
            <span className="bg-[#ffd480] text-white text-xs sm:text-xs md:text-sm font-semibold mr-2 px-2 sm:px-2 md:px-3 py-1  lg:p-[7px] lg:text-[12px]">Free delivery</span>
            <h3 className="text-lg sm:text-xl lg:text-2xl md:text-xs font-bold mt-2 sm:mt-3 md:mt-1 text-black lg:mt-4">Free delivery over $50</h3>
            <p className="text-xs sm:text-sm lg:text-lg mt-1 sm:mt-2 md:mt-2 text-[#838383] md:text-xs lg:w-8/12">Shop $50 product and get free delivery anywhere.</p>
            <button className="mt-1 sm:mt-3 md:mt-8 bg-[#3bb77e] text-white px-3 sm:px-4 md:px-2 py-1.5 sm:py-2 md:py-2 text-xs sm:text-sm lg:text-[16px] md:text-sm  hover:bg-green-600 transition duration-300 flex items-center lg:p-[14px]">Shop Now <img src={Arrow} className='ml-2' alt="Arrow" /></button>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden">
        <img src={banner2} alt="Organic food offer" className="w-full h-64 md:h-full object-cover" />
        <div className="absolute inset-0 flex items-center p-4 md:p-8">
          <div className="text-left">
            <span className="bg-[#3bb77e] text-white text-xs sm:text-xs md:text-sm font-semibold mr-2 px-2 sm:px-2 md:px-3 py-1  lg:p-[7px] lg:text-[12px]">60% off</span>
            <h3 className=" sm:text-xl  font-bold mt-2 sm:mt-3 md:mt-1 text-black md:text-xs lg:text-2xl lg:mt-4">Organic Food</h3>
            <p className="text-xs sm:text-sm lg:text-lg mt-1 sm:mt-2 md:mt-2 text-[#838383] md:text-xs lg:w-9/12">Save up to 60% off on your first order</p>
            <button className="mt-1 sm:mt-3 md:mt-8 bg-[#3bb77e] text-white px-3 sm:px-4 md:px-2 py-1.5 sm:py-2 md:py-2 text-xs sm:text-sm lg:text-[16px]  md:text-sm hover:bg-green-600 transition duration-300 flex items-center lg:p-[14px]">Order Now <img src={Arrow} className='ml-2' alt="Arrow" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
