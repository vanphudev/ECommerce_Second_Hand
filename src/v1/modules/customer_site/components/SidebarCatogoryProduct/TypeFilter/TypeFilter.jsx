import React from 'react';
import { Checkbox } from 'antd';


const TypeFilter = () => {
    return (
        <aside className="aside-item filter-type">
            <div className="title-head">
                Loại
            </div>
            <div className="aside-content filter-group content_type">
                <Checkbox.Group className="checkbox-group">
                    <Checkbox value="Sữa Rửa Mặt">Sữa Rửa Mặt</Checkbox>
                </Checkbox.Group>
            </div>
        </aside>
    );
};

export default TypeFilter;
