import { Button, Form, Input } from "antd";

const CheckEmail = ({setTab}) => {
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


      <Form style={{margin: "40px 0"}}>
        <Form.Item  
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
            length={5}
          />
        </Form.Item>

        <Form.Item >
          <Button
            onClick={()=>setTab("reset")}
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
        <span  className="ml-2 text-[#7CC84E]" type="link">
          Resend
        </span>
      </p>
    </div>
  );
};

export default CheckEmail;
