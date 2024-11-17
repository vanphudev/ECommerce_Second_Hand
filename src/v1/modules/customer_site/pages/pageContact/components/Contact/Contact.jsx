import React from "react";
import "../style/Contact.scss"; // Giả định rằng bạn sẽ thêm các lớp vào file Contact.scss

const Contact = () => {
   return (
      <div className='contact-bodywrap'>
         <div className='container'>
            <div className='layout-contact'>
               {/* Thông tin liên hệ */}
               <div className='contact-info-wrapper'>
                  <h4 className='contact-header'>Cửa hàng Dola Cosmetic</h4>
                  <div className='contact-info'>
                     <div className='info-description'>
                        Dola Cosmetic luôn tôn trọng khách hàng, lấy niềm vui, sự hài lòng của khách hàng để làm động
                        lực, không ngừng tìm kiếm các sản phẩm tốt nhất để mỗi khách hàng đều có thể trở nên tự tin và
                        xinh đẹp hơn.
                     </div>
                     <div className='address-title'>Cửa hàng chính</div>
                     <ul className='contact-details'>
                        <li>
                           <b>Địa chỉ: </b>
                           <span>70 Lữ Gia, Phường 15, Quận 11, TP.HCM</span>
                        </li>
                        <li>
                           <b>Điện thoại: </b>
                           <a href='tel:19006750' title='1900 6750' className='contact-phone'>
                              1900 6750
                           </a>
                        </li>
                        <li>
                           <b>Email: </b>
                           <a href='mailto:support@sapo.vn' title='support@sapo.vn' className='contact-email'>
                              support@sapo.vn
                           </a>
                        </li>
                     </ul>
                     <a className='see-store' href='/he-thong-cua-hang' title='Hệ thống cửa hàng'>
                        Hệ thống cửa hàng
                     </a>
                  </div>
               </div>

               {/* Form liên hệ */}
               <div className='form-contact-wrapper'>
                  <h4 className='form-header'>Liên hệ với chúng tôi</h4>
                  <div className='form-contact'>
                     <form method='post' action='/postcontact' id='contact' acceptCharset='UTF-8'>
                        <div className='group_contact'>
                           <input
                              placeholder='Họ và tên'
                              type='text'
                              className='form-input'
                              required
                              name='contact[Name]'
                           />
                           <input
                              placeholder='Email'
                              type='email'
                              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                              required
                              className='form-input'
                              name='contact[email]'
                           />
                           <input
                              type='text'
                              placeholder='Điện thoại*'
                              name='contact[phone]'
                              className='form-input'
                              required
                           />
                           <textarea
                              placeholder='Nội dung'
                              name='contact[body]'
                              className='form-textarea'
                              rows='3'
                              required></textarea>
                           <button type='submit' className='btn-submit'>
                              Gửi thông tin
                           </button>
                        </div>
                     </form>
                  </div>
               </div>

               {/* Bản đồ Google Maps */}
               <div className='map-wrapper'>
                  <div className='map'>
                     <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904611732553!2d105.81388241542348!3d21.03650239288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY8O0bmcgbmdo4buHIFNBUE8!5e0!3m2!1svi!2s!4v1555900531747!5m2!1svi!2s'
                        allowFullScreen=''
                        loading='lazy'></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
