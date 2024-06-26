import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
const Navbar = ({ setAuthenticate, authenticate }) => {
    const menuList = [ "Women","Men","Baby","Kids", "H&M HOME", "Sport", "Sale", "지속가능성" ];
    const headerList = ["고객 서비스","뉴스레터","매장 찾기"];
    let [width, setWidth] = useState(0);
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmed = window.confirm("로그아웃하시겠습니까?");
        if(confirmed) {
            setAuthenticate(false);
            navigate("/");
        }
    }
    const search = (e) => {
        if (e.key === "Enter") {
            let keyword = e.target.value;
            navigate(`/?q=${keyword}`);
        }
    };

    return (
        <div className="sc-iBdnpw lglYXn">
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
                    {/* <div style={{}}>
                        <div>
                            {headerList.map((headerMenu, index) => (
                                <button key={index}>{headerMenu}</button>
                            ))}
                        </div>
                    </div> */}
                    
                    {/* 검색바 */}
                    <div className="search-box">
                        {/* input-container */}
                        <FontAwesomeIcon icon={faSearch} className='search-icon' />
                        <input type="text" placeholder="제품검색" onKeyUp={(e) => search(e)}  />
                    </div>
                    {authenticate ? (
                        <Utill onClick={handleLogout}>
                            <FontAwesomeIcon icon={faUser} />
                            <span className="utill-text" style={{ cursor:"pointer" }}>로그아웃</span>
                        </Utill>
                    ) : (
                        <Utill onClick={() => navigate("/login")}>
                            <FontAwesomeIcon icon={faUser} />
                            <span className="utill-text" style={{ cursor:"pointer" }}>로그인</span>
                        </Utill>
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


const Utill = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 12px;

    .utill-text {
        margin-left: 8px;
        transition: 0.2s;
    }

    &:hover .utill-text{
        color: var(--base-active);
    }
`;