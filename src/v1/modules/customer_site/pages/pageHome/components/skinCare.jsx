import React from 'react';
import './styles/skinCare.scss';
import { Container } from '@mui/material';
import { Col, Row } from 'antd';

function skinCare() {
    return ( 
            <div className="skin-care">
                
                    <Row>
                        <Col span={24} className='title-skinCare'>
                            <h2 className='title-fc'>SKIN CARE</h2>
                            <hr/>
                        </Col>
                        <Col span={7} >
                            <img src="https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/image_tab1.png?1710378441395" alt="son-moi"/>
                            <div className='item-search'>
                                <button className='btn-search'>Kem Chống Nắng</button>
                                <button className='btn-search'>Tẩy Trang</button>
                                <button className='btn-search'>Toner</button>
                                <button className='btn-search'>Sữa rửa mặt</button>
                            </div>
                        </Col>
                        <Col span={17}>
                            <Row>
                                <Col span={24} className='option-skinCare'>
                                    <button className='btn-active'>Sữa rửa mặt</button>
                                    <button>Kem dưỡng</button>
                                    <button>Mặt nạ</button>
                                    <button>Kem chống nắng</button>
                                    <button>Nước hoa hồng</button>
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
                    </Row>
      
        </div>
     );
}

export default skinCare;
