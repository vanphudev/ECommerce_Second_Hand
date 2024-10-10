import React from 'react';
import './styles/skinCare.scss';
import { Container } from '@mui/material';
import { Col, Row } from 'antd';

function makeUp() {
    return ( 
            <div className="skin-care">
      
                    <Row>
                        <Col span={24} className='title-skinCare'>
                            <h2 className='title-fc'>MAKEUP</h2>
                            <hr/>
                        </Col>

                        <Col xl={17} md={24} sm={24} xs={24} lg={17} >
                            <Row>
                                <Col span={24} className='option-skinCare'>
                                    <button className='btn-active'>Sữa rửa mặt</button>
                                    <button>Son Môi</button>
                                    <button>Kẻ Mặt</button>
                                    <button>Kem Nền</button>
                                    <button>Mascara</button>
                                    <button>Kem Lót</button>
                                </Col>
                            </Row>
                            <Row>
                            </Row>
                            <Row>
                                <Col span={24} className='btn-view-all'>
                                    <button>Xem tất cả</button>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={7} md={0} sm={0} xs={0} lg={7} className='banner-right'>
                            <img  src="https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/image_tab2.png?1710378441395" alt="son-moi"/>
                            <div className='item-search'>
                                <button className='btn-search'>Kem Chống Nắng</button>
                                <button className='btn-search'>Tẩy Trang</button>
                                <button className='btn-search'>Toner</button>
                                <button className='btn-search'>Sữa rửa mặt</button>
                            </div>
                        </Col>
                    </Row>
     
        </div>
     );
}

export default makeUp;