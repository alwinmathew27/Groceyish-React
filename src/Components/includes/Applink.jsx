import React from 'react';
import appStore from '../../assets/images/applink/applestore.png';
import googlePlay from '../../assets/images/applink/playstore.png';
import appScreenshot from '../../assets/images/applink/app.png';
import background from '../../assets/images/applink/background.png';
const GroceyishApp = () => {
  return (
    <div
      className="wrapper min-h-screen flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#D2EFE1' }}
        >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto p-8 bg-transparent rounded-lg">
        <div className="flex flex-col items-center lg:items-start lg:order-1 lg:flex-1">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Shop Faster With Groceyish App</h1>
          <p className="text-lg text-gray-700 mb-8">Available on both iOS & Android</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <img src={appStore} alt="Download on the App Store" className="w-40" />
            <img src={googlePlay} alt="Get it on Google Play" className="w-44" />
          </div>
        </div>
        <div className="flex justify-center lg:order-2 lg:flex-1">
          <img src={appScreenshot} alt="Groceyish App Screenshot" className="w-full max-w-md rounded-3xl" />
        </div>
      </div>
    </div>
  );
};
export default GroceyishApp;