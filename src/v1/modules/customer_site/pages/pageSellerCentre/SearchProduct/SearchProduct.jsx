import React, { useState, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
// Hàm debounce tự viết
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

const mockData = [
    'Sữa rửa mặt Aqua',
    'Sữa rửa mặt hadalabo',
    'Sữa rửa mặt dành cho nam',
    'Sữa rửa mặt dành cho da dầu mụn',
    'Sữa rửa mặt dành cho nữ',
    'Sữa rửa mặt simple',
];

const SearchProduct = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Hàm tìm kiếm
    const fetchSuggestions = (query) => {
        if (!query) {
            setSuggestions([]);
            return;
        }
        const filtered = mockData.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered);
    };

    // Sử dụng debounce tự viết
    const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 500), []);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        debouncedFetchSuggestions(value);
    };

    return (
        <div className="tws-w-80 tws-mt-12 tws-bg-purple tws-p-4">
            <div className="tws-relative tws-flex tws-items-center tws-bg-white tws-rounded-lg tws-border-gray-300">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Nhập tên sản phẩm..."
                    className="tws-w-full tws-px-3 tws-py-4 tws-text-xs tws-border-none tws-outline-none tws-font-bold tws-rounded-lg"
                />
                <div className=' tws-bg-yellow tws-px-5 tws-py-4 tws-rounded-r-lg tws-flex tws-items-center tws-cursor-pointer'>
                    <FaSearch className="tws-text-white tws-text-lg" />

                </div>
            </div>
            {suggestions.length > 0 && (
                <>
                    <div className='tws-bg-white  tws-rounded-lg tws-border tws-border-gray-300 tws-px-2 tws-mt-2'>
                        <div className='tws-pt-3 tws-text-[#55018D8D] tws-font-semibold tws-text-xs tws-font-inter '>
                            Kết quả tìm kiếm
                        </div>
                        <hr className='tws-border-[#55018D7A] tws-px-2 tws-mt-2' />
                        <div className='tws-mt-2 tws-text-[9px] tws-font-inter tws-font-semibold tws-text-[#55018D]'>
                            Tìm shop “<span className='tws-text-[#F00]'>amazing</span>”
                        </div>
                        <ul className="tws-list-none  tws-mt-1 ">
                            {suggestions.map((item, index) => (
                                <li
                                    key={index}
                                    className="tws-py-2 tws-border-b tws-border-gray-200 tws-cursor-pointer tws-hover:bg-gray-100 tws-font-inter
                            tws-font-light tws-text-[#646464] tws-text-[10px] hover:tws-text-[#55018D]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>
                </>
            )}
        </div>
    );
};

export default SearchProduct;
