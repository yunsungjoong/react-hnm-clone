import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
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
    return (
        <div>
            <div>
                <div className="login-button">
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            </div>
            <div className="nav-logo">
                <img width={130} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt="HNM Logo"  />
            </div>
            <div className="menu-style">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li className="menu-item">{menu}</li>
                    ))}
                </ul>
                <div className="menu-search">
                    <div className="input-container">
                        <FontAwesomeIcon icon={faSearch} className='search-icon' />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;