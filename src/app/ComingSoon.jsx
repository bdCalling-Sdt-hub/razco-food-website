import React from 'react';
import title from "@/assets/title.png";
import Image from 'next/image';

const ComingSoon = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div>
                <Image src={title} style={{margin: "0 auto"}} width={160} alt="Photo" />
                <h1 className="text-5xl text-primary">Coming Soon !</h1>
            </div>
        </div>
    )
}

export default ComingSoon