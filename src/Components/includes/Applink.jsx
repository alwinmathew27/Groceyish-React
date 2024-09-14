import React from 'react';
import appStore from '../../assets/images/applink/applestore.png';
import googlePlay from '../../assets/images/applink/playstore.png';
import appScreenshot from '../../assets/images/applink/app.png';
import background from '../../assets/images/applink/background.png';
const GroceyishApp = () => {
  return (
    <div
      className=" h-[796px] w-auto flex  justify-between max-[1100px]:hidden"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#D2EFE1' }}
        >
      <div className="wrapper flex  justify-between items-center bg-transparent w-[1280px] max-[1050px]:flex-wrap ">
        <div className=" items-left  flex  flex-col w-[532px] h-[192px] max-[1335px]:scale-75 max-[1051px]:scale-75">
          <h1 className="font-bold text-[55px] leading-[68.75px] mb-4 text-gray-800">Shop Faster With Groceyish App</h1>
          <p className="text-lg text-gray-700 mb-8 lg:mt-2">Available on both iOS & Android</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:mt-7">
            <img src={appStore} alt="Download on the App Store" className="w-[219px]" />
            <img src={googlePlay} alt="Get it on Google Play" className="w-[254px]" />
          </div>
        </div>
        <div className="w-[669px]  h-[716px] max-[1335px]:scale-75">
          <img src={appScreenshot} alt="Groceyish App Screenshot" className="w-full " />
        </div>
      </div>
    </div>
  );
};
export default GroceyishApp;