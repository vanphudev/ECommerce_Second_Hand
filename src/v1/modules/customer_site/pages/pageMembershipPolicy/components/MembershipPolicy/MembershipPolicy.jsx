import React from 'react';
import '../style/MembershipPolicy.scss';

const MembershipPolicy = () => {
    return (
        <div className='membership-bodywrap'>
            <section className="membership-page">
                <div className="membership-container">
                    <div className="membership-pg_page membership-padding-top-15">
                        <div className="membership-row">
                            <div className="membership-col-12">
                                <div className="membership-page-title membership-category-title">
                                    <h1 className="membership-title-head">
                                        <a href="#">Chính sách thành viên</a>
                                    </h1>
                                </div>
                                <div className="membership-content-page membership-rte">
                                    <p>Điều kiện chính sách thành viên</p>
                                    <p><strong>1. Thẻ thành viên</strong></p>
                                    <p>Điều kiện cấp thẻ thành viên: Khi khách hàng mua hàng trên hệ thống nhà hàng Dola Restaurant sẽ được cấp thẻ thành viên.</p>
                                    <p><strong>2. Thẻ VIP</strong></p>
                                    <p><strong>Điều kiện nhận thẻ VIP:</strong></p>
                                    <ul>
                                        <li>Có giá trị tổng đơn hàng lớn hơn 15 triệu/ tháng</li>
                                        <li>Mua hàng với giá trị 3 triệu trở lên</li>
                                        <li>Tham gia các hoạt động, chương trình khuyến mãi của Dola</li>
                                    </ul>
                                    <p><strong>Lưu ý:&nbsp;</strong>Hạn mức 10, 20, 30, 50, 100 triệu đồng là tính từ thời điểm bắt đầu mua tới khi lên thẻ. Khi lên thẻ VIP và tích tiếp lên 20 đến 100 triệu, tổng tiền này là tính từ khi khách hàng mua lần đầu và cộng dồn lên.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MembershipPolicy;
