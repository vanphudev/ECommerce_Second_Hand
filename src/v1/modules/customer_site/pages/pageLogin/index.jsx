import React, {useState} from "react";
import {Button, Form, Input, message} from "antd";
import {UserOutlined, LockOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import "./style.scss";
import {FaGoogle, FaFacebook} from "react-icons/fa";

const LoginPage = () => {
   const [isSignUp, setIsSignUp] = useState(false);
   const toggleForm = () => {
      setIsSignUp(!isSignUp);
   };
   const handleSubmit = () => {
      message.success(isSignUp ? "Đăng ký thành công!" : "Đăng nhập thành công!");
   };
   return (
      <div className={`login-container ${isSignUp ? "active" : ""}`}>
         <div className='box tws-relative tws-flex  tws-h-full tws-w-1/2 tws-bg-white tws-z-1 tws-overflow-hidden'>
            {!isSignUp && (
               <div className='form sign_in '>
                  <h3 className='tws-text-[30px] tws-font-extrabold '>ĐĂNG NHẬP</h3>
                  <Form onFinish={handleSubmit} name='signIn'>
                     <Form.Item name='email' rules={[{required: true, message: "Vui lòng nhập Email!"}]}>
                        <Input prefix={<MailOutlined />} placeholder='Email' />
                     </Form.Item>
                     <Form.Item name='password' rules={[{required: true, message: "Vui lòng nhập mật khẩu!"}]}>
                        <Input.Password prefix={<LockOutlined />} placeholder='Mật khẩu' />
                     </Form.Item>
                     <div className='tws-flex tws-items-center tws-justify-between tws-my-4'>
                        <p className='tws-flex tws-items-center'>
                           <input type='checkbox' className='tws-w-4 tws-h-4 tws-mr-2 tws-cursor-pointer' />
                           Lưu mật khẩu
                        </p>
                        <p className='tws-text-dark-blue tws-cursor-pointer'>Quên mật khẩu?</p>
                     </div>
                     <Button type='primary' htmlType='submit' block>
                        ĐĂNG NHẬP
                     </Button>
                     <div className='tws-py-5'>
                        <span>HOẶC</span>
                     </div>
                     <div className='tws-flex tws-justify-between'>
                        <div className='social tws-flex tws-justify-between tws-gap-3 tws-items-center'>
                           <FaGoogle className='tws-text-dark-red' />
                           <p>Đăng nhập với Google</p>
                        </div>
                        <div className='social tws-flex tws-justify-between tws-gap-3 tws-items-center'>
                           <FaFacebook className='tws-text-light-blue' />
                           <p>Đăng nhập với Facebook</p>
                        </div>
                     </div>
                  </Form>
               </div>
            )}
            {isSignUp && (
               <div className='form sign_up'>
                  <h3 className='tws-text-[30px] tws-font-extrabold '>ĐĂNG KÝ</h3>
                  <Form onFinish={handleSubmit} name='signUp'>
                     <Form.Item name='name' rules={[{required: true, message: "Vui lòng nhập họ tên!"}]}>
                        <Input prefix={<UserOutlined />} placeholder='Họ tên' />
                     </Form.Item>
                     <Form.Item name='email' rules={[{required: true, message: "Vui lòng nhập email!"}]}>
                        <Input prefix={<MailOutlined />} placeholder='Email' />
                     </Form.Item>
                     <Form.Item name='phone' rules={[{required: true, message: "Vui lòng nhập số điện thoại!"}]}>
                        <Input prefix={<PhoneOutlined />} placeholder='Số điện thoại' />
                     </Form.Item>
                     <Form.Item name='password' rules={[{required: true, message: "Vui lòng nhập mật khẩu!"}]}>
                        <Input.Password prefix={<LockOutlined />} placeholder='Mật khẩu' />
                     </Form.Item>
                     <Button type='primary' htmlType='submit' block>
                        ĐĂNG KÝ
                     </Button>
                     <div className='tws-py-5'>
                        <span>HOẶC</span>
                     </div>
                     <div className='tws-flex tws-justify-between'>
                        <div className='social tws-flex tws-justify-between tws-gap-3 tws-items-center'>
                           <FaGoogle className='tws-text-dark-red' />
                           <p>Đăng nhập với Google</p>
                        </div>
                        <div className='social tws-flex tws-justify-between tws-gap-3 tws-items-center'>
                           <FaFacebook className='tws-text-light-blue' />
                           <p>Đăng nhập với Facebook</p>
                        </div>
                     </div>
                  </Form>
               </div>
            )}
         </div>

         <div className='overlay tws-flex tws-h-full tws-w-1/2 tws-overflow-hidden tws-z-1 tws-opacity-1'>
            <div className={`page page_signIn ${!isSignUp ? "active" : ""}`}>
               <h3>CHÀO MỪNG BẠN</h3>
               <p>Đăng ký nếu bạn chưa có tài khoản!</p>
               <Button className='btn btnSign-in' onClick={toggleForm}>
                  ĐĂNG KÝ <i className='bi bi-arrow-right'></i>
               </Button>
            </div>
            <div className={`page page_signUp ${isSignUp ? "active" : ""}`}>
               <h3>CHÀO MỪNG BẠN</h3>
               <p>Đăng nhập nếu bạn đã có tài khoản!</p>
               <Button className='btn btnSign-up' onClick={toggleForm}>
                  <i className='bi bi-arrow-left'></i> ĐĂNG NHẬP
               </Button>
            </div>
         </div>
      </div>
   );
};

export default LoginPage;
