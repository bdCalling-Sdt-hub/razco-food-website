import { Form, Input } from "antd";
import { useEffect } from "react";

const CustomInput = ({style, name}) => {
    const form = Form.useFormInstance(); // Access the form instance

    useEffect(() => {
        
        form.setFieldsValue({ customField: '' });
    }, [form]);

    return (
        <Form.Item name={name} label="Custom Field">
            <Input
                style={{
                    height: 42,
                    width: `${style ? style : "100%"}`,
                    border: "1px solid #d9d9d9",
                    outline: "none",
                    boxShadow: "none",
                    background: "transparent"
                }}
            />
        </Form.Item>
    );
};

export default CustomInput