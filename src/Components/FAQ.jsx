"use client";
import React, { useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { getCategory } from "@/redux/apiSlice/Category/getCategorySlice"
import { useDispatch, useSelector } from "react-redux";

const FAQ = () => {
    const dispatch = useDispatch()
  const { categories } = useSelector(state=> state.getCategory);

  useEffect(()=>{
    dispatch(getCategory())
  }, [dispatch])
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
        contentRefs.current[openIndex].style.maxHeight = `${contentRefs.current[openIndex].scrollHeight}px`;
        }

        contentRefs.current.forEach((ref, index) => {
        if (ref && index !== openIndex) {
            ref.style.maxHeight = '0px';
        }
        });
    }, [openIndex]);
    return (
        <div className=" container mt-10 mb-20 ">
            <h1 className=" text-4xl leading-[42px] font-semibold text-[#575757] pb-5 poppins">
                Frequently Asked Questions
            </h1>

            <div className='grid grid-cols-1 gap-6 mt-16 mb-20'>
                        {
                            [...Array(10)].map((_, index) => (
                                <div key={index} className='border border-[#555555] border-opacity-[12%] rounded-lg'>

                                    {/* question */}
                                    <div className='flex cursor-pointer items-center justify-between px-4 py-3' onClick={() => toggleAccordion(index)}>
                                        <p className='text-[20px] leading-5 font-normal poppins text-secondary'>Do you offer online shopping and home delivery?</p>

                                        <div className='w-7 h-7 border border-[#63A03E] rounded-full flex items-center justify-center'>
                                            <MdKeyboardArrowRight
                                                color='#63A03E'
                                                size={22} 
                                                className={`transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}
                                            />
                                        </div>
                                    </div>

                                    {/* answer section */}
                                    <div
                                        ref={(el) => (contentRefs.current[index] = el)}
                                        className='accordion-content overflow-hidden transition-max-height duration-300 ease-in-out'
                                        style={{
                                            maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px'
                                        }}
                                    >
                                        <div className='px-4 pb-4'>
                                            convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada
                                            tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet
                                            convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada
                                            tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet
                                            convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada
                                            tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet
                                            convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada
                                            tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet
                                        </div>
                                    </div>


                                </div>
                            ))
                        }
            </div>
        </div>
    )
}

export default FAQ