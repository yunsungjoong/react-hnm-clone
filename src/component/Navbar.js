import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setAuthenticate, authenticate }) => {
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속 가능성"
    ];

    let [width, setWidth] = useState(0);
    const navigate = useNavigate();

    const search = (e) => {
        if (e.key === "Enter") {
            let keyword = e.target.value;
            navigate(`/?q=${keyword}`);
        }
    };

    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                    <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>
            
            <div className="nav-header">
                    {/* 메뉴바 */}
                    <div className="burger-menu hide">
                        <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                    </div>
                    {/* 검색바 */}
                    <div className="search-box">
                        {/* input-container */}
                        <FontAwesomeIcon icon={faSearch} className='search-icon' />
                        <input type="text" placeholder="제품검색" onKeyUp={(e) => search(e)}  />
                    </div>
                    {authenticate ? (
                        <div onClick={() => setAuthenticate(false)}>
                            <FontAwesomeIcon icon={faUser} />
                            <span style={{ cursor:"pointer" }}>로그아웃</span>
                        </div>
                    ) : (
                        <div onClick={() => navigate("/login")}>
                            <FontAwesomeIcon icon={faUser} />
                            <span style={{ cursor:"pointer" }}>로그인</span>
                        </div>
                    )}
                
            </div>
            <div className="nav-logo" onClick={() => navigate("/")}>
                <img 
                width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt="HNM Logo" />
            </div>
            <div className="menu-style">
                <ul className="menu">
                    {menuList.map((menu, index) => (
                        <li>
                            <a href="#" key={index}>
                                {menu}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;