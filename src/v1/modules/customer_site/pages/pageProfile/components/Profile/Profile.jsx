import React from 'react';
import Sidebar from '../../../../components/SiderbarProfile/SiderbarProfile';
import '../style/Profile.scss';

const Prolife = () => {
    return (
        <div className="container">
            <Sidebar /> {/* Sử dụng Sidebar component */}
            <div className='content'>
                <h2><span>Thông tin tài khoản</span></h2>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                <div className="profile-content">
                    <div className="profile-form">
                        <div className="avatar-section">
                            <div className="avatar">
                                <img src="https://via.placeholder.com/100" alt="Avatar" />

                            </div>
                            <button className="choose-avatar">Chọn ảnh</button>
                            <p className="avatar-info">Dung lượng file tối đa 1 MB Định dạng: .JPEG, .PNG</p>
                        </div>
                        <form className="info-form">
                            <div className="form-group">
                                <label>Họ và tên:</label>

                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại:</label>

                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Giới tính:</label>

                                <select>
                                    <option value="">Giới tính</option>
                                    <option value="male">Nam</option>
                                    <option value="female">Nữ</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>

                                <input type="email" />
                            </div>
                            <div className="form-group">
                                <label>Ngày sinh:</label>

                                <input type="date" />
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ:</label>

                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Nghề nghiệp:</label>

                                <input type="text" />
                            </div>
                            <button type="submit" className="update-button">Cập nhật</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prolife;