import React from 'react';
import title from "@/assets/title.png";
import Image from "next/image";
import Link from 'next/link';

const Drawers = () => {
    const item = [
        {
          label: "Home",
          path: "/"
        },
        {
          label: "Shop",
          path: "/shop"
        },
        {
          label: "About US",
          path: "/about"
        },
        {
          label: "Contact Us",
          path: "/contact"
        },
        {
          label: "Offer",
          path: "/offer"
        },
      ]
    return (
        <div>
            <Link href={`/`} className=" md:hidden flex items-center justify-center mb-6">
              <Image src={title} style={{height: 60}} width={160} alt="Photo" />
            </Link>

            <div className="flex flex-col items-start gap-6">
                {
                    item.map((menu, index) => {
                    return(
                        <Link key={index} className="font-normal text-[16px] leading-6 text-[#555656]" href={`${menu.path}`}>{menu.label}</Link>
                    )
                    } )
                }
            </div>
        </div>
    )
}

export default Drawers