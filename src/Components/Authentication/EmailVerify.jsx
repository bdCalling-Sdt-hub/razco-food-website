import useEmailVerifyModal from "@/hooks/useEmailVerifyModal";
import useLoginModal from "@/hooks/useLoginModal";
import { emailVerify } from "@/redux/apiSlice/Authentication/verifyEmailSlice";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const EmailVerify = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector(state=> state.verifyEmail);
    const loginModal = useLoginModal();
    const emailVerifyModal = useEmailVerifyModal();

    const handleSubmit=(values)=>{

        dispatch(emailVerify({email :localStorage.getItem("email"), code: values?.otp})).then((response)=>{
        if(response.type === "emailVerify/fulfilled"){
            toast.success("OTP Verified successfuly")
            loginModal.onOpen();
            emailVerifyModal.onClose();
        }else{
            toast.error(response?.payload)
        }
        })
    }

    return (
        <div className="">
            <div className="text-center mt-14">
                <h1 className=" mt-8 poppins text-[32px] leading-[48px] font-medium text-[#6E6E6F]">
                Check your email
                </h1>
                <p className="text-[#929394] poppins text-[16px] leading-[25px] font-normal ">
                We sent a reset link to <span className="text-secondary">{localStorage.getItem("email")}</span>  enter 4 digit code that
                mentioned in the email
                </p>
            </div>


            <Form style={{margin: "40px 0"}} onFinish={handleSubmit}>
                <Form.Item 
                name={"otp"} 
                style={{display :"flex", alignItems: "center", justifyContent: "center"}}
                rules={[
                    {
                    required: true,
                    message: "Please Enter Valid OTP"
                    }
                ]}
                >
                <Input.OTP
                    size="large"
                    className="otp-input  "
                    style={{ width: "100%", height: "50px" }}
                    length={4}
                />
                </Form.Item>

                <Form.Item >
                <Button
                    
                    htmlType="submit"
                    style={{
                    width: "100%",
                    background: "#7CC84E",
                    height: 48,
                    border: "none",
                    outline: "none",
                    color: "white"
                    }}
                    className="poppins"
                >
                    Verify Code
                </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EmailVerify;
