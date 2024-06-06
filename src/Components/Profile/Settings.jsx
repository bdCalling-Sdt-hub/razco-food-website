import React, { useState } from "react";
import CommonHeading from "./CommonHeading";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updatePassword } from "@/redux/apiSlice/Profile/updatePasswordSlice";






const Settings = () => {
  const dispatch = useDispatch();
  const [newPassError, setNewPassError] = useState("");
  const [conPassError, setConPassError] = useState("");


  const validatePasswordChange = (values) => {
    let errors = {};

    if (values?.currentPassword === values.newPassword) {
      errors.newPassError = "The New password is similar to the old Password";
      setNewPassError(errors.newPassError);
    } else {
        setNewPassError("");
    }

    if (values?.newPassword !== values.confirmPassword) {
      errors.conPassError = "New Password and Confirm Password Don't Match";
      setConPassError(errors.conPassError);
    } else {
      setConPassError("");
    }

    return errors;
  };

  const handleSubmit=(values)=>{
    let errors = validatePasswordChange(values);

    if (Object.keys(errors).length === 0) {
      dispatch(updatePassword(values)).then((response) => {
          if (response?.type === "updateProfile/fulfilled") {
            toast.success(response?.payload?.message);
          } else {
            toast.success(response?.payload?.message);
          }
      });
    }
  }
  return (
    <div className="p-5 lg:mt-2  mt-8 border border-[#DCDDDE4D] lg:p-10 ">
      <CommonHeading title={"Change Password "} />
      <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          style={{width: "100%", marginTop: 10, height: "fit-content"}}
          onFinish={handleSubmit}
        >

                    
                        <Form.Item
                            style={{marginBottom: 16}}
                            name="currentPassword"
                            rules={[
                                {
                                required: true,
                                message: "Please input your current password!",
                                },
                            ]}
                            label={"Current Password"}
                        >
                            <Input.Password
                                placeholder="Enter Password"
                                type="password"
                                style={{
                                border: "1px solid #E0E4EC",
                                height: "52px",
                                background: "white",
                                borderRadius: "8px",
                                outline: "none",
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="newPassword"
                            rules={[
                                {
                                  required: true,
                                  message: "Please input your new Password!",
                                },
                            ]}
                            label="New Password"
                            style={{marginBottom: 16}}
                        >
                            <Input.Password
                                type="password"
                                placeholder="Enter password"
                                style={{
                                border: "1px solid #E0E4EC",
                                height: "52px",
                                background: "white",
                                borderRadius: "8px",
                                outline: "none",
                                }}
                            />
                        </Form.Item>
                          { newPassError && <label style={{display: "block",marginBottom: 16, color: "red"}} htmlFor="error">{newPassError}</label>}
    
                    
                        <Form.Item
                            style={{marginBottom: 16}}
                            name="confirmPassword"
                            rules={[
                                {
                                required: true,
                                message: "Please input your Re-type Password!",
                                },
                            ]}
                            label="Confirm Password"
                        >
                            <Input.Password
                                type="password"
                                placeholder="Enter password"
                                style={{
                                border: "1px solid #E0E4EC",
                                height: "52px",
                                background: "white",
                                borderRadius: "8px",
                                outline: "none",
                                }}
                            />
                        </Form.Item>
                            { conPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{conPassError}</label>}

                        <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    style={{
                                        border: "none",
                                        height: "51px",
                                        background: "#7CC84E",
                                        color: "white",
                                        borderRadius: "8px",
                                        outline: "none",
                                    }}
                                >
                                    UPDATE
                                </Button>
                            </Form.Item>
                </Form>
    </div>
  );
};

export default Settings;
