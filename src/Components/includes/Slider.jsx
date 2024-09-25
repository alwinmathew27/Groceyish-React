import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import SliderImage1 from "../../assets/images/slider images/slider-1.webp";
import SliderImage2 from "../../assets/images/slider images/slider-2.webp";
import SliderImage3 from "../../assets/images/slider images/slider-3.webp";
import Sent from "../../assets/images/slider images/li_send.png";
function Modal({ show, onClose }) {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center ">
      <div className="bg-white p-20 rounded shadow">
        <h2 className="text-5xl mb-4">Subscribed!</h2>
        <p className="text-xl">Thank you for subscribing.</p>
        <button
          className="mt-8 bg-green-500 text-white px-8 py-3 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
function Slider() {
  const slides = [
    {
      url: SliderImage1,
      alt: "Local slider image",
    },
    {
      url: SliderImage2,
      alt: "Local slider image",
    },
    {
      url: SliderImage3,
      alt: "Local slider image",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const handleSubscription = (e) => {
    e.preventDefault();
    // Here you would typically send the email to a server
    setIsSubscribed(true);
    setShowModal(true);
    setEmail("");
  };
  return (
    <div className="max-w-[1600px] h-[450px] w-full m-auto  px-0 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      >
        {currentIndex === 0 && (
          <>
            <div className="wrapper">
              <div className=" absolute top-20  bg-opacity-50 text-black  rounded ">
                <h2
                  style={{ lineHeight: "1.5" }}
                  className="myheading font-bold leading-snug text-2xl sm:text-4xl md:text-5xl w-2/3 max-[376px]:w-fit lg:text-[55px] "
                >
                  Don't miss our daily amazing deals.
                </h2>
                <p className="mt-2 sm:mt-6 lg:text-[20px] text-[#838383] max-[639px]:text-[12px]">
                  Save up to 60% off on your first order
                </p>
              </div>
              {!isSubscribed && (
                <form
                  onSubmit={handleSubscription}
                  className="absolute  bottom-20 max-[640px]:bottom-48 max-[760px]:bottom-32  max-[376px]:bottom-40"
                >
                  <div className="flex items-center bg-white border border-gray-300  ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                      <img
                        src={Sent}
                        alt="Sent icon"
                        className="w-4 h-auto ml-1"
                      />
                    </div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>{" "}
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="block w-[329px] p-3 max-[639px]:py-2 max-[639px]:w-[200px] pl-10 text-sm text-gray-900
                       bg-gray-50 rounded-none outline-none flex-1 placeholder:text-[14px] max-[639px]:placeholder:text-[12px]"
                    />
                    <button
                      type="submit"
                      className="p-[14px] text-sm font-medium text-white  border-none bg-primary-700
                       hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 max-[639px]:p-[8px]"
                      style={{ backgroundColor: "#3bb77e" }}
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              )}
            </div>
          </>
        )}
        {currentIndex === 1 && (
          <div className="wrapper">
            <div className=" absolute top-32  bg-opacity-50 text-black  rounded">
              <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl">
                Fresh Vegetables, Big discount
              </h2>
            </div>
          </div>
        )}
        {currentIndex === 2 && (
          <div className="wrapper">
            <div className="absolute top-32   bg-opacity-50 text-black rounded">
              <h2 className=" font-bold text-2xl sm:text-4xl md:text-5xl">
                Bring nature into your home
              </h2>
            </div>
          </div>
        )}
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center py-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? "text-green-500" : "text-gray-400"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
export default Slider;
