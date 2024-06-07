
import { Form, Modal } from 'antd'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import debitCard from "@/assets/debitCard.png";
import SuccessModal from "../Components/Payment/PaymentModal/PaymentModal";
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { makePaymentIntent } from '@/redux/apiSlice/Order/makePaymentIntentSlice';


const PaymentModal = ({open, setOpen, total}) => {
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();
    const {intent} = useSelector(state=> state.makePayment);

    useEffect(()=>{
        dispatch(makePaymentIntent(total))
    }, [dispatch, total])


    const handleSubmit=(values)=>{
        setSuccess(true)
    }
    return (
        <Modal
            open={open}
            onCancel={()=>setOpen(false)}
            footer={false}
        >
            <div className="  ">
                <Image
                    src={debitCard}
                    width={200}
                    height={100}
                    alt=""
                    className="mx-auto lg:mb-14  mb-4 "
                />
                <Form 
                    layout="vertical" 
                    className="grid grid-cols-12 gap-4"
                    onFinish={handleSubmit}
                >

                    <Form.Item
                        name="card_number"
                        style={{marginBottom: 0}}
                        label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal pb-0">Card Number</p>}
                        className="col-span-12"
                        rules={[
                            {
                            required: true,
                            message: "Please Choose Your Pickup Time"
                            }
                        ]}
                    >
                        <input type="text" className="border-b-[1px] poppins pb-1 border-[#949494] border-opacity-[24%]  w-full outline-none" />
                    </Form.Item>

                    <Form.Item
                        name="validity_date"
                        style={{marginBottom: 0}}
                        label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Validity Date</p>}
                        className="col-span-6"
                        rules={[
                            {
                            required: true,
                            message: "Please Choose Your Pickup Time"
                            }
                        ]}
                    >
                    <input type="text" className="border-b-[1px] poppins pb-1 border-[#949494] border-opacity-[24%]  w-full outline-none" />
                    </Form.Item>

                    <Form.Item
                        name="cvc"
                        style={{marginBottom: 0}}
                        label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">CVC</p>}
                        className="col-span-6"
                        rules={[
                            {
                            required: true,
                            message: "Please Choose Your Pickup Time"
                            }
                        ]}
                    >
                        <input type="text" className="border-b-[1px] poppins pb-1 border-[#949494] border-opacity-[24%]  w-full outline-none" />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        style={{marginBottom: 0}}
                        label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Cardholder Name</p>}
                        className="col-span-12"
                        rules={[
                            {
                            required: true,
                            message: "Please Choose Your Pickup Time"
                            }
                        ]}
                    >
                    <input type="text"className="border-b-[1px] poppins pb-1 border-[#949494] border-opacity-[24%]  w-full outline-none" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        style={{marginBottom: 0}}
                        label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Cardholder Email</p>}
                        className="col-span-12"
                        rules={[
                            {
                            required: true,
                            message: "Please Choose Your Pickup Time"
                            }
                        ]}
                    >
                        <input type="text" className="border-b-[1px] poppins pb-1 border-[#949494] border-opacity-[24%]  w-full outline-none" />
                    </Form.Item>


                    <Form.Item
                        name="email"
                        style={{marginBottom: 0}}
                        label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Cardholder Email</p>}
                        className="col-span-12"
                        rules={[
                            {
                            required: true,
                            message: "Please Choose Your Pickup Time"
                            }
                        ]}
                    >
                        <input type="text" className="border-b-[1px] poppins pb-1 border-[#949494] border-opacity-[24%]  w-full outline-none" />
                    </Form.Item>

                    <Form.Item className="col-span-12" style={{marginTop: 10}}>
                        <button type="submit" className="bg-[#7CC84E] h-12 text-white text-lg w-full   rounded-lg">
                            Confirm Pay
                        </button>
                    </Form.Item>
                </Form>

                <SuccessModal open={success} setOpen={setSuccess} />
            </div>   
        </Modal>
    )
}

export default PaymentModal