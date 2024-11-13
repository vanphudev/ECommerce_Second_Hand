import React from 'react';
import { Checkbox } from 'antd';


const PriceFilter = () => {
    return (
        <aside className="aside-item filter-price">
            <div className="title-head">
                Chọn mức giá
            </div>
            <div className="aside-content filter-group content_price">
                <Checkbox.Group className="checkbox-group">
                    <Checkbox value="100000">Dưới 100.000đ</Checkbox>
                    <Checkbox value="100000-200000">Từ 100.000đ - 200.000đ</Checkbox>
                    <Checkbox value="200000-300000">Từ 200.000đ - 300.000đ</Checkbox>
                    <Checkbox value="300000-500000">Từ 300.000đ - 500.000đ</Checkbox>
                    <Checkbox value="500000-1000000">Từ 500.000đ - 1 triệu</Checkbox>
                    <Checkbox value="1000000">Trên 1 triệu</Checkbox>
                </Checkbox.Group>
            </div>
        </aside>
    );
};

export default PriceFilter;
