import React from 'react';
import { Checkbox } from 'antd';

const TagFilter = () => {
    return (
        <aside className="aside-item filter-tag">
            <div className="title-head">
                Loại da
            </div>
            <div className="aside-content filter-group content_tag">
                <Checkbox.Group className="checkbox-group">
                    <Checkbox value="Da dầu">Da dầu</Checkbox>
                    <Checkbox value="Da nhờn">Da nhờn</Checkbox>
                    <Checkbox value="Da khô">Da khô</Checkbox>
                </Checkbox.Group>
            </div>
        </aside>
    );
};

export default TagFilter;
