import Image from "next/image";
import footerTitle from "@/assets/footerTitle.png";
import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#70B446]">
      <div className="container grid grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-20 text-white">
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ">
              <Image src={footerTitle} height={8} width={150} alt="Photo" />
              <p className=" pt-3 text-balance font-normal text-[18px] leading-[34px] poppins">
                At Razco Super Shop, we pride ourselves on delivering exceptional service and quality 
                products to our customers. Shop with us for a seamless and satisfying experience 
                every time!
              </p>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <h6 className="mb-4 font-semibold uppercase  text-lg md:mb-12">
                Information
              </h6>
              <p className="mb-4  font-normal text-[16px] leading-[22px] poppins">
                <a href="/about">About Us</a>
              </p>
              <p className="mb-4 font-normal text-[16px] leading-[22px] poppins">
                <a href="/faq">FAQ</a>
              </p>
              <p className="mb-4 font-normal text-[16px] leading-[22px] poppins">
                <a href="/privacy">Privacy Policy</a>
              </p>
              <p className="mb-4 font-normal text-[16px] leading-[22px] poppins">
                <a href="/terms">Terms & Condition</a>
              </p>
              <p className="font-normal text-[16px] leading-[22px] poppins">
                <a href="/career">Career</a>
              </p>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ">
              <h6 className="mb-4  font-semibold uppercase md:mb-12">
                DOWNLOAD APP
              </h6>
              {/* <!-- component -->  */}

              {/* <!-- https://developer.apple.com/app-store/marketing/guidelines/#section-badges -->  */}
              <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center">
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
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
                <div className="">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    />
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    />
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    />
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    />
                  </svg>
                </div>
                
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold font-sans -mt-1">
                    Google Play
                  </div>
                </div>
              </div>


            </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <h6 className="mb-4  font-semibold uppercase md:mb-12">
                HELP && SUPPORT
              </h6>
              <p className="mb-4 flex font-normal text-[16px] leading-[30px] poppins">
                <span className="me-3 mt-1 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </span>
                765 N HARVARD AVE lindsay ca 93247
              </p>
              <p className="mb-4 flex items-center font-normal text-[16px] leading-[30px] poppins">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                coustmercare@razcofoods.net
              </p>
              <p className="mb-4 flex items-center font-normal text-[16px] leading-[30px] poppins">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                +559-562-5900
              </p>
          </div>


      </div>

      <div className="bg-black ">
        <div className=" py-3 container text-white flex flex-col md:flex-row gap:10 md:gap-0 justify-between items-center">
          <p className="text-[14px] md:text-[16px] font-normal leading-[30px] poppins">©2024 Razco Foods | All Right Reserved</p>
          <p className="flex items-center  gap-4  text-xl mt-3 md:mt-0">
              <a href="https://www.facebook.com/" target="_blank">
              <FacebookOutlined />
              </a>
              <a href={"https://www.instagram.com"} target="_blank"> 
              <InstagramOutlined />
              </a>

              <a href={"https://www.web.whatsapp.com"} target="_blank">
              <WhatsAppOutlined />
              </a>

              <a href={"https://www.twitter.com"} target="_blank">
                <TwitterOutlined />
              </a>
            </p>
          </div>
        </div>
    </div>
  );
};

export default Footer;