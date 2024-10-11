import React from 'react';
import { Checkbox } from 'antd';


const VendorFilter = () => {
    return (
        <aside className="aside-item filter-vendor">
            <div className="title-head">
                Thương hiệu
            </div>
            <div className="aside-content filter-group content_vendor">
                <Checkbox.Group className="checkbox-group">
                    <Checkbox value="Cetaphil">Cetaphil</Checkbox>
                    <Checkbox value="Naruko">Naruko</Checkbox>
                    <Checkbox value="Senka">Senka</Checkbox>
                    <Checkbox value="Simple">Simple</Checkbox>
                    <Checkbox value="St.Ives">St.Ives</Checkbox>
                </Checkbox.Group>
            </div>
        </aside>
    );
};

export default VendorFilter;
