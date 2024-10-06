import React from 'react';
import CategoryList from './components/CategoryList';
import PriceFilter from './components/PriceFilter';
import TagFilter from './components/TagFilter';
import TypeFilter from './components/TypeFilter';
import VendorFilter from './components/VendorFilter';
import './style/Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="dqdt-sidebar">
            <CategoryList />
            <div class="filter-content">
                <PriceFilter />
                <TypeFilter />
                <VendorFilter />
                <TagFilter />
            </div>

        </div>
    );
};

export default Sidebar;
