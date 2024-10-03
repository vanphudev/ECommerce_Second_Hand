import React from "react";
import "../../styles/index.scss";
import "./ProjectDescription.scss";

const Home = () => {
   return (
      <>
         <div className='project-container'>
            <h1 className='project-title'>Tên dự án: Web Bán Hàng Second Hand</h1>
            <div className='project-section'>
               <h2 className='section-title'>Thông tin thành viên:</h2>
               <table className='team-table'>
                  <thead>
                     <tr>
                        <th>Họ và Tên</th>
                        <th>Trường</th>
                        <th>Mã Sinh Viên</th>
                        <th>Profile GitHub</th>
                        <th>Vai trò</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Nguyễn Văn Phú</td>
                        <td>HUIT</td>
                        <td>2001216041</td>
                        <td>
                           <a href='https://github.com/vanphudev' target='_blank' rel='noopener noreferrer'>
                              vanphudev
                           </a>
                        </td>
                        <td>Leader</td>
                     </tr>
                     <tr>
                        <td>Phạm Thiên Tân</td>
                        <td>HUIT</td>
                        <td>2001210518</td>
                        <td>
                           <a href='https://github.com/Jotoriz' target='_blank' rel='noopener noreferrer'>
                              Jotoriz
                           </a>
                        </td>
                        <td>Member</td>
                     </tr>
                     <tr>
                        <td>Đặng Công Mẩn</td>
                        <td>HUIT</td>
                        <td>2001210308</td>
                        <td>
                           <a href='https://github.com/dangman123' target='_blank' rel='noopener noreferrer'>
                              dangman123
                           </a>
                        </td>
                        <td>Member</td>
                     </tr>
                     <tr>
                        <td>Trần Thanh Hậu</td>
                        <td>HUIT</td>
                        <td>2001211917</td>
                        <td>
                           <a href='https://github.com/tranhau2607' target='_blank' rel='noopener noreferrer'>
                              tranhau2607
                           </a>
                        </td>
                        <td>Member</td>
                     </tr>
                     <tr>
                        <td>Nguyễn Hoài Chí Dũng</td>
                        <td>FPOLY</td>
                        <td>PS30326</td>
                        <td>
                           <a href='https://github.com/dung17042004' target='_blank' rel='noopener noreferrer'>
                              dung17042004
                           </a>
                        </td>
                        <td>Member</td>
                     </tr>
                     <tr>
                        <td>Nguyễn Như Tài</td>
                        <td>FPT</td>
                        <td>SE170563</td>
                        <td>
                           <a href='https://github.com/nhutai0403' target='_blank' rel='noopener noreferrer'>
                              nhutai0403
                           </a>
                        </td>
                        <td>Member</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div className='project-section'>
               <h2 className='section-title'>Mô tả dự án:</h2>
               <p className='section-content'>
                  Dự án <strong>&quot;Web Bán Hàng Second Hand&quot;</strong> nhằm xây dựng một nền tảng thương mại điện
                  tử nơi khách hàng có thể mua và bán các sản phẩm đã qua sử dụng. Hệ thống bao gồm ba đối tượng chính:
                  Admin, Khách hàng, và Nhà cung cấp. Các chức năng chính được phân bổ theo từng đối tượng như sau:
               </p>
            </div>

            <div className='project-section'>
               <h2 className='section-title'>Yêu cầu dành cho Admin:</h2>
               <ul className='section-list'>
                  <li className='list-item'>
                     <strong>Quản lý Sản phẩm (Product Management):</strong> Cho phép admin thêm, chỉnh sửa, xóa và quản
                     lý danh sách sản phẩm được đăng bán trên trang web.
                  </li>
                  <li className='list-item'>
                     <strong>Quản lý Đơn hàng (Order Management):</strong> Hỗ trợ quản lý đơn hàng từ lúc tạo, xử lý đến
                     khi hoàn tất giao hàng và ghi nhận doanh thu.
                  </li>
                  <li className='list-item'>
                     <strong>Quản lý Khách hàng và Nhà cung cấp (Customer and Supplier Management):</strong> Theo dõi
                     thông tin khách hàng và nhà cung cấp, bao gồm lịch sử giao dịch và quản lý tài khoản.
                  </li>
                  <li className='list-item'>
                     <strong>Báo cáo và Thống kê (Reports and Analytics):</strong> Cung cấp các báo cáo về doanh thu,
                     đơn hàng, và hiệu suất bán hàng của từng nhà cung cấp, giúp tối ưu hóa chiến lược kinh doanh.
                  </li>
               </ul>
            </div>

            <div className='project-section'>
               <h2 className='section-title'>Yêu cầu dành cho Khách hàng:</h2>
               <ul className='section-list'>
                  <li className='list-item'>
                     <strong>Tài khoản và Thông tin cá nhân (Account Management):</strong> Quản lý thông tin cá nhân,
                     thiết lập tài khoản và cập nhật chi tiết giao hàng.
                  </li>
                  <li className='list-item'>
                     <strong>Duyệt sản phẩm và Mua hàng (Product Browsing and Shopping):</strong> Khách hàng có thể
                     duyệt qua các sản phẩm, thêm vào giỏ hàng và tiến hành thanh toán.
                  </li>
                  <li className='list-item'>
                     <strong>Đánh giá và Phản hồi (Reviews and Feedback):</strong> Cho phép khách hàng đánh giá sản phẩm
                     và cung cấp phản hồi cho người bán.
                  </li>
                  <li className='list-item'>
                     <strong>Lịch sử Mua hàng (Order History):</strong> Theo dõi các đơn hàng đã thực hiện, chi tiết
                     giao dịch, và trạng thái đơn hàng.
                  </li>
               </ul>
            </div>

            <div className='project-section'>
               <h2 className='section-title'>Yêu cầu dành cho Nhà cung cấp:</h2>
               <ul className='section-list'>
                  <li className='list-item'>
                     <strong>Quản lý Sản phẩm (Product Management):</strong> Đăng tải sản phẩm, quản lý tồn kho và theo
                     dõi thông tin sản phẩm bán ra.
                  </li>
                  <li className='list-item'>
                     <strong>Quản lý Đơn hàng (Order Management):</strong> Theo dõi và quản lý các đơn hàng đã được đặt,
                     xử lý yêu cầu giao hàng.
                  </li>
                  <li className='list-item'>
                     <strong>Báo cáo và Doanh thu (Reports and Revenue):</strong> Nhà cung cấp có thể xem các báo cáo
                     liên quan đến doanh thu, sản phẩm bán chạy và hiệu suất kinh doanh.
                  </li>
               </ul>
            </div>

            <div className='info-box'>
               <p className='info-content'>
                  <strong>Thông tin dự án:</strong> Ngày bắt đầu dự án: 09/09/2024
               </p>
               <p className='info-content'>Ngày kết thúc dự án: [Chưa hoàn thành]</p>
               <p className='info-content'>Số lượng thành viên tham gia: 6 thành viên</p>
            </div>

            <div className='project-section'>
               <h2 className='section-title'>Nội dung các task thực hiện:</h2>
               <ul className='section-list'>
                  <li className='list-item'>Thiết kế Figma</li>
                  <li className='list-item'>Phát triển và code React</li>
               </ul>
            </div>

            <div className='project-section'>
               <h2 className='section-title'>Kết quả dự án:</h2>
               <p className='section-content'>[Chưa hoàn thành]</p>
            </div>

            <div className='project-section'>
               <h2 className='section-title'>Thiếu sót của dự án:</h2>
               <p className='section-content'>[Chưa cập nhật]</p>
            </div>

            <div className='info-box'>
               <p className='info-content'>
                  <strong>Ghi chú:</strong> Dự án đang trong giai đoạn phát triển, các tính năng sẽ được tiếp tục bổ
                  sung và cải thiện.
               </p>
            </div>

            <div className='footer'>
               <p className='footer-content'>© 2024 - Dự án Web Bán Hàng Second Hand</p>
            </div>
         </div>
      </>
   );
};

export default Home;
