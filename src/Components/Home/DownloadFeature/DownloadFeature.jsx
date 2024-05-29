import { AppleOutlined, GoogleOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import bgImg from "@/assets/bgImg.png";
import mobile from "@/assets/mobile.png";
const DownloadFeature = () => {
  return (
    <div className=" bg-[#F2FAED] ">
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3 lg:ps-[270px] lg:pe-[250px] pt-5 pb-5 lg:pt-20 lg:pb-24 justify-items-center">
        {/* 1 st side  */}
        <div className="p-3 lg:pe-4">
          <h1 className="text-5xl font-semibold mb-3  leading-relaxed ">
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
        <div className="relative">
          <Image
            src={bgImg}
            sizes="100vw"
            width={800} // Set an appropriate width valu
            height={500}
            style={{ width: "100%", height: "500px" }}
            alt=" "
          />
          <div className="absolute top-3 left-1/3 translate-x-[-8%]">
            <Image
              src={mobile}
              sizes="100vw"
              width={400} // Set an appropriate width value
              height={400}
              style={{ width: "100%", height: "400px" }}
              alt=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadFeature;
