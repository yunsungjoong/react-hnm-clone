import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterBox>
            <div className="ft-in">
                <p className="ft">
                    이 사이트의 콘텐츠는 저작권 보호를 받고 있는 H&M Hennes & Mauritz AB의 자산입니다.
                </p>
                <p className="ft-info">
                    법인명 에이치앤엠헤네스앤모리츠 주식회사  | 통신판매업신고번호 : <span>2022-서울강남-01184</span> / 사업자등록번호: <span>220-87-83339</span>  | 아담 칼슨, 선 보라미, 아네타 포쿠친스카 | 서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호 080-822-0220 | info.kr@hm.com 
                </p>
                <h1>
                    <img className='logo-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt='H&M Logo'></img>
                </h1>
            </div>
            
        </FooterBox>
    );
};

export default Footer;

const FooterBox = styled.footer`

    box-sizing: border-box;
    height: 350px;
    padding: 50px 20px 0;
    background: var(--base-background-footer, #E4E4E4);

    .logo-img {
        
    }

    .ft {

        font-size: var(--body-text-meta-default-size-font-size-rem, 0.8rem);
    }
    .ft-in {
        color: #222;
        opacity: 0.8;
        text-align: center;

        p {
            line-height: 1.5;
            letter-spacing: -0.04rem;

            span {
                font-weight: 500;
            }
        }
        .ft-bold {
            font-weight: 600;
            margin-bottom: 10px;
        }
        .ft-info {
            margin-bottom: 60px;
        }

        h1 {
            width: 60px;
            margin: 0 auto;
            img {
                width: 100%;
                height: auto;
            }
        }
    } 

    @media screen and (min-width: 768px) {
        .ft-in {
            width: 700px;
            margin: 0 auto;
            }
        }
    `;