import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavDropdown } from 'react-bootstrap'; // NavDropdown import 추가
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setAuthenticate, authenticate }) => {
    const [isMobile, setIsMobile] = useState(false);
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

    const navigate = useNavigate();

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addListener(handleResize);
        return () => {
            mediaQuery.removeListener(handleResize);
        };
    }, []);

    const goToLogin = () => {
        navigate('/login');
    };

    const goToMain = () => {
        navigate('/');
    };

    const logout = () => {
        console.log("로그아웃 되었습니다.");
        setAuthenticate(false);
        goToMain();
    };

    const search = (e) => {
        if (e.key === "Enter") {
            let keyword = e.target.value;
            navigate(`/?q=${keyword}`);
        }
    };

    return (
        <div>
            <div className="login-button" onClick={authenticate ? logout : goToLogin}>
                {authenticate ? (
                    <>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </>
                )}
            </div>
            <div>
                <div className="nav-logo" onClick={goToMain}>
                    <img width={130} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt="HNM Logo" />
                </div>
                <div className="menu-style">
                    {isMobile ? (
                        <NavDropdown title={<FontAwesomeIcon icon={faBars} />} id="basic-nav-dropdown"> {/* 햄버거 아이콘으로 드롭다운 메뉴 표시 */}
                            {menuList.map((menu, index) => (
                                <NavDropdown.Item key={index}>{menu}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    ) : (
                        <ul className="menu-list">
                            {menuList.map((menu, index) => (
                                <li className="menu-item" key={index}>{menu}</li>
                            ))}
                        </ul>
                    )}
                    <div className="menu-search">
                        <div className="input-container">
                            <FontAwesomeIcon icon={faSearch} className='search-icon' />
                            <input type="text" onKeyUp={(e) => search(e)} placeholder="Search" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;