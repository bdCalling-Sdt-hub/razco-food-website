import { Button, Form, Input } from "antd";

const CheckEmail = ({setTab}) => {
  return (
    <div className="">
      <div className="text-center mt-14">
        <h1 className=" mt-8 text-2xl font-semibold text-[#6E6E6F]">
          Check your email
        </h1>
        <p className="text-[#929394]">
          We sent a reset link to contact@dscode...com enter 5 digit code that
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
          >
            Verify Code
          </Button>
        </Form.Item>
      </Form>

      <p className="text-center mt-10 text-[#6A6D7C]">
        You have not received the email?
        <Button  className="pl-0 text-[#7CC84E]" type="link">
          Resend
        </Button>
      </p>
    </div>
  );
};

export default CheckEmail;
