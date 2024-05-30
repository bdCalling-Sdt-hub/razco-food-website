import { Button, Input } from "antd";

const CheckEmail = () => {
  return (
    <div className="">
      <div className="text-center mb-24 mt-14">
        <h1 className=" mt-8 mb-6 text-2xl font-semibold text-[#6E6E6F]">
          Check your email
        </h1>
        <p className="text-[#929394]">
          We sent a reset link to contact@dscode...com enter 5 digit code that
          mentioned in the email
        </p>
      </div>

      <Input.OTP
        size="large"
        className="otp-input  "
        style={{ width: "100%", height: "50px" }}
        length={5}
        formatter={(str) => str.toUpperCase()}
      />
      <button className="bg-[#7CC84E] h-12 text-white text-lg w-full   rounded-lg  mt-14 ">
        Verify Code
      </button>
      <p className="text-center mt-10 text-[#6A6D7C]">
        You have not received the email?
        <Button className="pl-0 text-[#7CC84E]" type="link">
          Resend
        </Button>
      </p>
    </div>
  );
};

export default CheckEmail;
