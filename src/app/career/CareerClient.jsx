"use client";
import CustomInput from '@/Components/Share/CustomInput';
import { DatePicker, Form, Input, Radio } from 'antd';
import React from 'react';

const CareerClient = () => {
    const handleSubmit =(values)=>{
        console.log(values);

    }
    return (
        <div className='container'>
            <h1 className='border-b-[1px] text-2xl font-medium my-10 border-[#d9d9d9] pb-3'>Applicant Information</h1>

            <Form onFinish={handleSubmit}>
                {/* name */}
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please Enter your name" }]}
                    className='w-full'
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    wrapperCol={{ style: { width: '70%' } }}
                >
                    <Input
                        style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            boxShadow: "none"
                        }}
                    />
                </Form.Item>

                {/* address */}
                <Form.Item
                    label="Address"
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'baseline' } }}
                    wrapperCol={{ style: { width: '70%' } }}
                >
                    <Form.Item
                        name={["address", "street_address"]}
                        rules={[{ required: true, message: 'Please input your Street Address!' }]}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'baseline' } }}
                        wrapperCol={{ style: { width: '70%' } }}
                    >
                        <Input 
                            placeholder={"Enter Street Address"}
                            style={{
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name={["address", "city"]}
                        rules={[{ required: true, message: 'Please input your city!' }]}
                    >
                        <Input 
                            placeholder={"Enter City"}
                            style={{
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name={["address", "state"]}
                        rules={[{ required: true, message: 'Please input your state!' }]}
                    >
                        <Input 
                            placeholder={"Enter State"}
                            style={{
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name={["address", "zip_code"]}
                        rules={[{ required: true, message: 'Please input your zip code!' }]}
                    >
                        <Input 
                            placeholder={"Enter Zip Code"} 
                            style={{
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                </Form.Item>
                
                {/* phone */}
                <Form.Item
                    label="Phone"
                    name={"phone"}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter your Phone"
                        }
                    ]}
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    wrapperCol={{ style: { width: '70%'} }}
                >
                    <Input 
                        placeholder={"Enter Street Address"}
                        style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            boxShadow: "none"
                        }}
                    />
                </Form.Item>
                
                {/* email */}
                <Form.Item
                    label="Email"
                    name={"email"}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter your Email"
                        }
                    ]}
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    wrapperCol={{ style: { width: '70%'} }}
                >
                    <Input
                        style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            boxShadow: "none"
                        }}
                    />
                </Form.Item>
                
                {/* position */}
                <Form.Item
                    label="Position Applying For"
                    name={"position"}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter your Position"
                        }
                    ]}
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    wrapperCol={{ style: { width: '70%'} }}
                >
                    <Input
                        style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            boxShadow: "none"
                        }}
                    />
                </Form.Item>
                
                {/* date availability */}
                <Form.Item
                    label="Date Availability"
                    name={"date_availability"}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter your Date Availability"
                        }
                    ]}
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    wrapperCol={{ style: { width: '70%'} }}
                >
                    <DatePicker
                        style={{
                            width: "100%",
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            boxShadow: "none"
                        }}
                    />
                </Form.Item>
                
                {/* salary */}
                <Form.Item
                    label="Desired Salary"
                    name={"salary"}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter your Desired Salary"
                        }
                    ]}
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    wrapperCol={{ style: { width: '70%'} }}
                >
                    <Input
                        style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            boxShadow: "none"
                        }}
                    />
                </Form.Item> 


                {/* citizen */}
                <Form.Item
                    label="Are You a United States Citizen"
                    name={"position"}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter your Position"
                        }
                    ]}
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    wrapperCol={{ style: { width: '70%'} }}
                >
                    <Radio.Group>
                        <Radio value={"yes"}>Yes</Radio>
                        <Radio value={"no"}>No</Radio>
                    </Radio.Group>
                </Form.Item>
                
                {/* worked for this company */}
                <Form.Item
                    label="Have you ever worked for this company"
                    name={"workedYet"}
                    rules={[
                        {
                            required: true,
                            message: "Please Choose the Option For Working"
                        }
                    ]}
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    wrapperCol={{ style: { width: '70%'} }}
                >
                    <Radio.Group>
                        <Radio value={"yes"}>Yes</Radio>
                        <Radio value={"no"}>No</Radio>
                    </Radio.Group>
                </Form.Item> 

                <Form.Item
                    label="Are you over the age of 18"
                    name={"ageRequirement"}
                    rules={[
                        {
                            required: true,
                            message: "Please Choose the Option For Age"
                        }
                    ]}
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    wrapperCol={{ style: { width: '70%'} }}
                >
                    <Radio.Group>
                        <Radio value={"yes"}>Yes</Radio>
                        <Radio value={"no"}>No</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="May we perform  a background check on you"
                    name={"check_background"}
                    rules={[
                        {
                            required: true,
                            message: "Please Choose the Option For background"
                        }
                    ]}
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    wrapperCol={{ style: { width: '70%'} }}
                >
                    <Radio.Group>
                        <Radio value={"yes"}>Yes</Radio>
                        <Radio value={"no"}>No</Radio>
                    </Radio.Group>
                </Form.Item>
                
                {/* availability */}
                <Form.Item
                    label={<p>Availability</p>}
                    name={"availability"}
                    labelCol={{ span: 24, style: { width: "100%", display: 'inline-block' } }}
                    wrapperCol={{ span: 24 }}
                    style={{margin: 0}}
                >
                    <p className='border-b-[1px] border-[#d9d9d9] pb-3 mb-6'>List approximate times available next to each day (e.g., Monday, 3pm to 10pm)</p>
                    <Form.Item
                        label={<p>Monday</p>}
                        name={['availability', 'monday']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>Tuesday</p>}
                        name={['availability', 'tuesday']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>Wednesday</p>}
                        name={['availability', 'wednesday']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                        wrapperCol={{ style: { width: '20%'} }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label={<p>Thursday</p>}
                        name={['availability', 'thursday']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                        wrapperCol={{ style: { width: '20%'} }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label={<p>Friday</p>}
                        name={['availability', 'friday']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                        wrapperCol={{ style: { width: '20%'} }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label={<p>Saturday</p>}
                        name={['availability', 'saturday']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                        wrapperCol={{ style: { width: '20%'} }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>Sunday</p>}
                        name={['availability', 'sunday']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                        wrapperCol={{ style: { width: '20%'} }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                </Form.Item>
                
                {/* education */}
                
                <Form.Item
                    label={<p>Education</p>}
                    name={"education"}
                    style={{margin: 0}}
                    labelCol={{span: 24}}
                >
                    <div className='w-full h-[1px] bg-[#d9d9d9] mb-6' />
                    <Form.Item
                        label={<p>Hight School</p>}
                        name={['education', "high_school", 'school_name']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                        
                    {/* address */}
                    <Form.Item 
                        label="Address"
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'baseline' } }}
                        wrapperCol={{ style: { width: '70%'} }}
                    >
                        <div className="grid grid-cols-12 gap-x-6">
                            <Form.Item
                                name={['education', 'high_school', "address", 'street_address']}
                                className='col-span-12'
                                rules={[{ required: true, message: 'Please input your Street Address!' }]}
                            >
                                <Input
                                    placeholder={"Enter Street Address"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['education', 'high_school', "address",'city']}
                                
                                className='col-span-6'
                                rules={[{ required: true, message: 'Please input your city!' }]}
                            >
                                <Input
                                    placeholder={"Enter City"}
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['education', 'high_school', "address", 'state']}
                                rules={[{ required: true, message: 'Please input your state!' }]}
                                className='col-span-6'
                            >
                                <Input
                                    placeholder={"Enter State"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['education', 'high_school', "address", 'zip_code']}
                                rules={[{ required: true, message: 'Please input your zip code!' }]}
                                className='col-span-12'
                            >
                                <Input
                                    placeholder={"Enter Zip Code"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                        </div>
                    </Form.Item>

                    <Form.Item
                        label={<p>From</p>}
                        name={['education', 'high_school', "from"]}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                        
                    <Form.Item
                        label={<p>To</p>}
                        name={['education', "high_school", 'to']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Did you graduate?"
                        name={["education", "high_school",  "graduate"]}
                        rules={[
                            {
                                required: true,
                                message: "Please Choose the Option For Education"
                            }
                        ]}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                        wrapperCol={{ style: { width: '70%'} }}
                    >
                        <Radio.Group>
                            <Radio value={"yes"}>Yes</Radio>
                            <Radio value={"no"}>No</Radio>
                        </Radio.Group>
                    </Form.Item>
                        
                    <Form.Item
                        label={<p>Degree</p>}
                        name={['education', "high_school", 'degree']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                    
                    {/* college */}
                    <div className='w-full h-[1px] bg-[#d9d9d9] mb-6' />
                    
                    <Form.Item
                        label={<p>Hight School</p>}
                        name={['education', "college", 'college_name']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                        
                        {/* address */}
                    <Form.Item 
                        label="Address"
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'baseline' } }}
                        wrapperCol={{ style: { width: '70%'} }}
                    >
                        <div className="grid grid-cols-12 gap-x-6">
                            <Form.Item
                                name={['education', 'college', "address", 'street_address']}
                                className='col-span-12'
                                rules={[{ required: true, message: 'Please input your Street Address!' }]}
                            >
                                <Input
                                    placeholder={"Enter Street Address"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['education', 'college', "address",'city']}
                                
                                className='col-span-6'
                                rules={[{ required: true, message: 'Please input your city!' }]}
                            >
                                <Input
                                    placeholder={"Enter City"}
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['education', 'college', "address", 'state']}
                                rules={[{ required: true, message: 'Please input your state!' }]}
                                className='col-span-6'
                            >
                                <Input
                                    placeholder={"Enter State"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['education', 'college', "address", 'zip_code']}
                                rules={[{ required: true, message: 'Please input your zip code!' }]}
                                className='col-span-12'
                            >
                                <Input
                                    placeholder={"Enter Zip Code"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                        </div>
                    </Form.Item>

                    <Form.Item
                        label={<p>From</p>}
                        name={['education', 'college', "from"]}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                        
                    <Form.Item
                        label={<p>To</p>}
                        name={['education', "college", 'to']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Did you graduate?"
                        name={["education", "college", "graduate"]}
                        rules={[
                            {
                                required: true,
                                message: "Please Choose the Option For Education"
                            }
                        ]}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                        wrapperCol={{ style: { width: '70%'} }}
                    >
                        <Radio.Group>
                            <Radio value={"yes"}>Yes</Radio>
                            <Radio value={"no"}>No</Radio>
                        </Radio.Group>
                    </Form.Item>
                        
                    <Form.Item
                        label={<p>Degree</p>}
                        name={['education', "college", 'degree']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                </Form.Item>
                

                {/* Reference */}
                <Form.Item
                    label={<p>Reference</p>}
                    name={"reference"}
                    style={{margin: 0}}
                    labelCol={{span: 24}}
                >
                    <div className='w-full h-[1px] bg-[#d9d9d9] mb-6' />
                    <Form.Item
                        label={<p>Name</p>}
                        name={['reference', 'name']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>Relationship</p>}
                        name={['reference', 'relationship']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label={<p>Company</p>}
                        name={['reference', 'company']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>Phone</p>}
                        name={['reference', 'phone']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item 
                        label="Address"
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'baseline' } }}
                        wrapperCol={{ style: { width: '70%'} }}
                        name={"address"}
                    >
                        <div className="grid grid-cols-12 gap-x-6">
                            <Form.Item
                                name={['reference', 'address', 'street_address']}
                                className='col-span-12'
                                rules={[{ required: true, message: 'Please input your Street Address!' }]}
                            >
                                <Input
                                    placeholder={"Enter Street Address"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['reference', 'address', 'city']}
                                className='col-span-6'
                                rules={[{ required: true, message: 'Please input your city!' }]}
                            >
                                <Input
                                    placeholder={"Enter City"}
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['reference', 'address', 'state']}
                                rules={[{ required: true, message: 'Please input your state!' }]}
                                className='col-span-6'
                            >
                                <Input
                                    placeholder={"Enter State"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['reference', 'address', 'zip_code']}
                                rules={[{ required: true, message: 'Please input your zip code!' }]}
                                className='col-span-12'
                            >
                                <Input
                                    placeholder={"Enter Zip Code"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                        </div>
                    </Form.Item>
                </Form.Item>
                
                {/* employment */}
                <Form.Item
                    label={<p>Employment History</p>}
                    name={"employment"}
                    style={{margin: 0}}
                    labelCol={{span: 24}}
                >
                    <h1 className='w-full h-[1px] border-b-[1px] border-[#d9d9d9] mb-12'>
                        Please list all present and past employers. Begin with your most recent.
                    </h1>
                    <Form.Item
                        label={<p>Present/Last Employment</p>}
                        name={['employment', 'present/last_employment']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label={<p>Phone</p>}
                        name={['employment', 'Phone']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item 
                        label="Address" 
                        rules={[{ required: true, message: 'Please input your city!' }]}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'baseline' } }}
                        wrapperCol={{ style: { width: '70%'} }}
                    >
                        <div className="grid grid-cols-12 gap-x-6">
                            <Form.Item
                                name={['employment', 'address', 'street_address']}
                                className='col-span-12'
                                rules={[{ required: true, message: 'Please input your Street Address!' }]}
                            >
                                <Input
                                    placeholder={"Enter Street Address"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['employment', 'address', 'city']}
                                className='col-span-6'
                                rules={[{ required: true, message: 'Please input your city!' }]}
                            >
                                <Input
                                    placeholder={"Enter City"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['employment', 'address', 'state']}
                                rules={[{ required: true, message: 'Please input your state!' }]}
                                className='col-span-6'
                            >
                                <Input
                                    placeholder={"Enter State"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['employment', 'address', 'zip_code']}
                                rules={[{ required: true, message: 'Please input your zip code!' }]}
                                className='col-span-12'
                            >
                                <Input
                                    placeholder={"Enter Zip Code"} 
                                    style={{
                                        width: "100%",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none"
                                    }}
                                />
                            </Form.Item>
                        </div>

                    </Form.Item>

                    <Form.Item
                        label={<p>Supervisor</p>}
                        name={['employment', 'supervisor']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>Job Title</p>}
                        name={['employment', 'job_title']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>Salary</p>}
                        name={['employment', 'salary']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>Responsibilities</p>}
                        name={['employment', 'responsibilities']}
                        labelCol={{ style: { width: '30%', display: 'flex' } }}
                    >
                        <Input.TextArea
                            style={{
                                width: "50%",
                                height: 200,
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none",
                                background: "transparent"
                            }}

                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>Start Date</p>}
                        name={['employment', 'start_date']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <DatePicker
                            placeholder='mm/dd/yyyy'
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none",
                                background: "transparent"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>End Date</p>}
                        name={['employment', 'end_date']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <DatePicker
                            placeholder='mm/dd/yyyy'
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none",
                                background: "transparent"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>Reason For Leaving</p>}
                        name={['employment', 'reason_for_leaving']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                </Form.Item>
                
                {/* military service */}
                <Form.Item
                    label={<p>Military Service</p>}
                    name={"military_service"}
                    labelCol={{ span: 24, style: { width: "100%", display: 'inline-block' } }}
                    wrapperCol={{ span: 24 }}
                    style={{margin: 0}}
                >
                    <div className='w-full h-[1px] bg-[#d9d9d9] mb-6'/>
                    <Form.Item
                        label={<p>Branch</p>}
                        name={['military_service', 'branch']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>From</p>}
                        name={['military_service', 'From']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<p>To</p>}
                        name={['military_service', 'to']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                        wrapperCol={{ style: { width: '20%'} }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label={<p>Rank At Discharge</p>}
                        name={['military_service', 'rank']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                        wrapperCol={{ style: { width: '20%'} }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label={<p>Type of Discharge</p>}
                        name={['military_service', 'type_of_discharge']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                        wrapperCol={{ style: { width: '20%'} }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label={<p>If other than honorable, explain</p>}
                        name={['military_service', 'explain']}
                        labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                        wrapperCol={{ style: { width: '20%'} }}
                    >
                        <Input
                            style={{
                                width: "50%",
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                    </Form.Item>
                </Form.Item>
                
                {/* Disclaimer  */}
                <h1>Disclaimer and Signature</h1>
                <p className='border-b-[1px] border-[#d9d9d9] pb-3 mb-6'>I certify that my answers are true and complete to the best of my knowledge. If this application leads to employment, I understand that false or misleading information in my application or interview may result in my release.</p>
                
                <Form.Item
                    label={<p>Signature (type name)</p>}
                    name={"signature"}
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    rules={[{required: true, message: "Please Enter Signature name"}]}
                >
                    <Input
                        style={{
                            width: "50%",
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            boxShadow: "none"
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label={<p>Date</p>}
                    name={"date"}
                    labelCol={{ style: { width: '30%', display: 'flex', alignItems: 'center' } }}
                    rules={[{required: true, message: "Please Enter you name"}]}
                >
                    <DatePicker
                        style={{
                            width: "50%",
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            boxShadow: "none",
                            background: "transparent"
                        }}
                    />
                </Form.Item>
                
                <div className='flex items-center justify-center'>
                    <button type='submit' className='bg-primary px-4 h-10 text-white rounded-lg w-[120px] text-xl mb-6'>Submit</button>
                </div>
            </Form>
        </div>
    )
}

export default CareerClient