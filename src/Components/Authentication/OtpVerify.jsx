import { forgotPassword } from "@/redux/apiSlice/Authentication/forgotPasswordSlice";
import { verifyOtp } from "@/redux/apiSlice/Authentication/verifyOtpSlice";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const CheckEmail = ({setTab}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  form.setFieldsValue()

  const handleSubmit=(values)=>{
    dispatch(verifyOtp({email: localStorage.getItem("email"), otp: values?.otp })).then((response)=>{
      if(response.type === "verifyOtp/fulfilled"){
        toast.success("OTP Verified successfuly")
        setTab("reset")
      }else{
        toast.error(response?.payload);
        form.resetFields()
      }
    })
  }

  const handleResent=()=>{
    dispatch(forgotPassword({email: localStorage.getItem("email")})).then((response)=>{
      if(response.type === "forgotPassword/fulfilled"){
        toast.success("Send OTP")
        setTab("otp")
        form.resetFields()
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
          We sent a reset link to <span className="text-secondary">contact@dscode...com</span>  enter 5 digit code that
          mentioned in the email
        </p>
      </div>


      <Form style={{margin: "40px 0"}} onFinish={handleSubmit} form={form}>
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
            type="number"
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

      <p className="text-center mt-10 text-[#6A6D7C] poppins text-[16px] leading-[25px] font-normal ">
        You have not received the email?
        <button type="button" onClick={handleResent} className="ml-2 cursor-pointer text-[#7CC84E]" >
          Resend
        </button>
      </p>
    </div>
  );
};

export default CheckEmail;
