import React from 'react';
import banner1 from '../../assets/images/offer image/Banner-1.webp';
import banner2 from '../../assets/images/offer image/Banner-2.webp';
const Offer = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0 py-4 md:py-8">
      <div className="relative w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden">
        <img src={banner1} alt="Free delivery offer" className="w-full h-64 md:h-full object-cover" />
        <div className="absolute inset-0 flex items-center p-4 md:p-8">
          <div className="text-left">
            <span className="bg-yellow-200 text-yellow-800 text-xs sm:text-xs md:text-sm font-semibold mr-2 px-2 sm:px-2 md:px-3 py-1 rounded">Free delivery</span>
            <h3 className="text-lg sm:text-xl lg:text-2xl md:text-xs font-bold mt-2 sm:mt-3 md:mt-1 text-black lg:mt-4">Free delivery over $50</h3>
            <p className="text-xs sm:text-sm lg:text-lg mt-1 sm:mt-2 md:mt-2 text-black md:text-xs">Shop $50 product and get free delivery anywhere.</p>
            <button className="mt-1 sm:mt-3 md:mt-4 bg-[#3bb77e] text-white px-3 sm:px-4 md:px-2 py-1.5 sm:py-2 md:py-2 text-xs sm:text-sm lg:text-lg md:text-sm rounded-lg hover:bg-green-600 transition duration-300">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden">
        <img src={banner2} alt="Organic food offer" className="w-full h-64 md:h-full object-cover" />
        <div className="absolute inset-0 flex items-center p-4 md:p-8">
          <div className="text-left">
            <span className="bg-green-200 text-green-800 text-xs sm:text-xs md:text-sm font-semibold mr-2 px-2 sm:px-2 md:px-3 py-1 rounded">60% off</span>
            <h3 className=" sm:text-xl  font-bold mt-2 sm:mt-3 md:mt-1 text-black md:text-xs lg:text-2xl lg:mt-4">Organic Food</h3>
            <p className="text-xs sm:text-sm lg:text-lg mt-1 sm:mt-2 md:mt-2 text-black md:text-xs">Save up to 60% off on your first order</p>
            <button className="mt-1 sm:mt-3 md:mt-4 bg-[#3bb77e] text-white px-3 sm:px-4 md:px-2 py-1.5 sm:py-2 md:py-2 text-xs sm:text-sm lg:text-lg rounded-lg md:text-sm hover:bg-green-600 transition duration-300 ">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
