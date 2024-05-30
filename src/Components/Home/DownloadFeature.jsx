import { AppleOutlined, GoogleOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import bgImg from "@/assets/bgImg.png";
import mobile from "@/assets/mobile.png";
const DownloadFeature = () => {
  return (
    <div className=" bg-[#F2FAED]">
      <div className="container grid grid-cols-12 gap-6 lg:gap-20 py-10">
        {/* 1 st side  */}
        <div className="col-span-12 md:col-span-6 order-2 md:order-1">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-3  leading-relaxed ">
            Download Our Grocery Mobile App And Save Time, Mony
          </h1>
          <p className=" mb-3 leading-loose text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more
          </p>
          <div className="lg:flex gap-4">
            <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center">
              <div className="mr-3 text-4xl">
                <AppleOutlined />
              </div>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-2xl font-semibold font-sans -mt-1">
                  App Store
                </div>
              </div>
            </div>
            {/* <!-- https://play.google.com/intl/en_us/badges/ -->  */}
            <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
              <div className="mr-3 text-4xl">
                <GoogleOutlined />
              </div>
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-semibold font-sans -mt-1">
                  Google Play
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd side  */}
        <div className="col-span-12 md:col-span-6 relative order-1 md:order-2">
          
            <Image
              src={mobile}
              width={500}
              height={500}
              alt=" "
              />
        </div>
      </div>
    </div>
  );
};

export default DownloadFeature;
