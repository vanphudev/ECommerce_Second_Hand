import React from "react";
import {Form, Input, Button, Typography} from "antd";

const ResetPasswordForm = () => {
   const [form] = Form.useForm();

   const handleFinish = (values) => {
      console.log("Submitted values:", values);
   };

   return (
      <div style={{display: "flex", margin: "0 auto", justifyContent: "center", alignItems: "start", height: "100vh"}}>
         <div style={{width: 400, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.15)", borderRadius: 8}}>
            <Typography.Title level={3} style={{textAlign: "center"}}>
               Reset your password
            </Typography.Title>
            <Typography.Text type='secondary' style={{display: "block", textAlign: "center", marginBottom: 16}}>
               For account security, please do not share your password with others
            </Typography.Text>
            <Typography.Title level={5} style={{textAlign: "center", marginBottom: 16}}>
               (+84) 0377985402
            </Typography.Title>
            <Form form={form} layout='vertical' onFinish={handleFinish}>
               <Form.Item
                  label='Password'
                  name='currentPassword'
                  rules={[{required: true, message: "Please enter your current password!"}]}>
                  <Input.Password placeholder='Enter your current password' />
               </Form.Item>
               <Form.Item
                  label='New password'
                  name='newPassword'
                  rules={[{required: true, message: "Please enter your new password!"}]}>
                  <Input.Password placeholder='Enter new password' />
               </Form.Item>
               <Form.Item
                  label='Confirm password'
                  name='confirmPassword'
                  dependencies={["newPassword"]}
                  rules={[
                     {required: true, message: "Please confirm your password!"},
                     ({getFieldValue}) => ({
                        validator(_, value) {
                           if (!value || getFieldValue("newPassword") === value) {
                              return Promise.resolve();
                           }
                           return Promise.reject(new Error("Passwords do not match!"));
                        },
                     }),
                  ]}>
                  <Input.Password placeholder='Enter confirm password' />
               </Form.Item>
               <Form.Item>
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                     <Button type='default' htmlType='button'>
                        Cancel
                     </Button>
                     <Button type='primary' htmlType='submit'>
                        Reset
                     </Button>
                  </div>
               </Form.Item>
            </Form>
         </div>
      </div>
   );
};

export default ResetPasswordForm;
