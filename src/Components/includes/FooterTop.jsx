import React from "react";
import priceimage from "../../assets/images/footer_image/price.png";
import refundimage from "../../assets/images/footer_image/refund.png";
import deliveryimage from "../../assets/images/footer_image/delivery.png";
import Logoimage from "../../assets/images/footer_image/Logo.png";
import paymentMethodsImage from "../../assets/images/footer_image/Payment.png";
import Facebook from "../../assets/images/footer_image/facebook.png";
import Linkedin from "../../assets/images/footer_image/linkedin.png";
import Instagram from "../../assets/images/footer_image/instagram.png";
import Twitter from "../../assets/images/footer_image/twitter.png";
import location from "../../assets/images/footer_image/middle/address.png"
import call from "../../assets/images/footer_image/middle/call.png"
import email from "../../assets/images/footer_image/middle/email.png"
import time from "../../assets/images/footer_image/middle/time.png"
const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-8 sm:mt-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[
            {
              img: priceimage,
              alt: "price card",
              title: "Best Prices & Deals",
              desc: "Don't miss our daily amazing deals and prices",
            },
            {
              img: refundimage,
              alt: "refund img",
              title: "Refundable",
              desc: "If your items have damage we agree to refund it",
            },
            {
              img: deliveryimage,
              alt: "delivery van",
              title: "Free delivery",
              desc: "Do purchase over $50 and get free delivery anywhere",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center text-center sm:text-left"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-8 h-8 mb-2 sm:mb-0 sm:mr-3"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Main Footer Content */}
        <hr className="my-8" />
        <div className="flex  justify-between flex-wrap  ">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <img
              src={Logoimage}
              alt="logoimage"
              className="w-48 h-14 mb-4 mx-auto sm:mx-0"
            />
            <p className="flex text-sm text-gray-500 mb-2 items-center mt-6 ">
              <img src={location} alt="Location" className="h-4 w-4 mr-1" />Address: 1762 School House Road
            </p>
            <p className="flex text-sm text-gray-500 mb-2 mt-5">
              <img src={call} alt="Call_icon" className="h-4 w-4 mr-1" />Call Us: 1233-777</p>
            <p className="flex text-sm text-gray-500 mb-2 mt-5">
              <img src={email} className="h-4 w-4 mr-1" alt="Email_icon" />
              Email: groceyish@contact.com
            </p>
            <p className="flex text-sm text-gray-500 mt-5">
              <img src={time} alt="Time_icon" className="h-4 w-4 mr-1 mb-5" />
              Work hours: 8:00 - 20:00, Sunday - Thursday
            </p>
          </div>
          {/* Account */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/" className=" hover:text-gray-700 ">Wishlist</a></li>
              <li><a href="/" className=" hover:text-gray-700 ">Cart</a></li>
              <li><a href="/" className=" hover:text-gray-700 " >Track Order</a></li>
              <li><a href="/" className=" hover:text-gray-700 ">Shipping Details</a></li>
            </ul>
          </div>
          {/* Useful links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Useful links</h3>
            <ul className="space-y-2  text-gray-500">
              <li><a href="/" className=" hover:text-gray-700 ">About Us</a></li>
              <li><a href="/" className=" hover:text-gray-700 ">Contact</a></li>
              <li><a href="/" className=" hover:text-gray-700 ">Hot Deals</a></li>
              <li><a href="/" className=" hover:text-gray-700 ">Promotions</a></li>
              <li><a href="/" className=" hover:text-gray-700 ">New Products</a></li>
            </ul>
          </div>
          {/* Help Center */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4 ">Help Center</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="/" className=" hover:text-gray-700 ">Payments</a></li>
              <li><a href="/" className=" hover:text-gray-700 ">Refund</a></li>
              <li><a href="/" className=" hover:text-gray-700 ">Checkout</a></li>
              <li><a href="/" className=" hover:text-gray-700 ">Shipping</a></li>
              <li><a href="/" className=" hover:text-gray-700 ">Q&A</a></li>
              <li><a href="/" className=" hover:text-gray-700 ">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; 2022, All rights reserved
            </p>
            <div className="w-44 mb-4 md:mb-0 ">
              <img
                src={paymentMethodsImage}
                alt="Accepted payment methods: Visa, Mastercard, Maestro, American Express"
                className="w-full "
              />
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span><a href="/"><img src={Facebook} alt="Facebook icon" className="h-11 w-11" /></a></span>
              <span><a href="/"><img src={Linkedin} alt="Linkedin icon" className="h-11 w-11" /></a></span>
              <span><a href="/"><img src={Instagram} alt="Instagram icon" className="h-11 w-11" /></a></span>
              <span><a href="/"><img src={Twitter} alt="Twitter icon" className="h-11 w-11" /></a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
