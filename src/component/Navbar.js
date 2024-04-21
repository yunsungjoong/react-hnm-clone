import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Navbar = ( {setAuthenticate, authenticate} ) => {
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

    
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }

    const goToMain = () => {
        navigate('/')
    }

    const logout = () => { 
        console.log("로그아웃 되었습니다.")
        setAuthenticate(false)
        goToMain();

    }
    return (
        <div>
            <div>
                <div className="login-button" onClick={authenticate ? logout : goToLogin}>
                    { authenticate ? (
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
            </div>
            <div className="nav-logo" onClick={goToMain}>
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