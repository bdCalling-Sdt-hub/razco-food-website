"use client";
import React, { useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getFaq } from "@/redux/apiSlice/getFaqSlice";

const FaqClient = () => {
    const dispatch = useDispatch()
    const { faqs } = useSelector(state=> state.getFaq);

    useEffect(()=>{
        dispatch(getFaq())
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
            <h1 className="  lg:text-5xl text-center font-bold text-[#555656] lg:mb-10">
                Frequently Asked Questions
            </h1>

            <div className='grid grid-cols-1 gap-6 mt-16 mb-20'>
                        {
                            faqs?.map((faq, index) => (
                                <div key={index} className='border border-[#555555] border-opacity-[12%] rounded-lg'>

                                    {/* question */}
                                    <div className='flex cursor-pointer items-center justify-between px-4 py-3' onClick={() => toggleAccordion(index)}>
                                        <p className='text-[20px] leading-5 font-normal text-secondary'>{faq?.question}?</p>

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
                                        <div className='px-4 pb-4'>{faq?.question}</div>
                                    </div>


                                </div>
                            ))
                        }
            </div>
        </div>
    )
}

export default FaqClient