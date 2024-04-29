import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import {Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faEnvelope, faHeart, faRuler } from '@fortawesome/free-solid-svg-icons';


const ProductDetail = () => {
    let {id} = useParams();
    const [ product,setProduct] = useState(null)
    const getProductDetail = async() => {
        let url = `https://my-json-server.typicode.com/yunsungjoong/react-hnm-clone/products/${id}`;
        let response = await fetch(url);
        let data= await response.json();        
        console.log(data)
        setProduct(data);
    }
    useEffect(() => {
        getProductDetail()
    }, []);

    
    return (
        <Container fluid="xxl" as="section" className="product-detail" >
            <Row>
                <Col md="6" className="photo-img">
                    <img src={product?.img} alt={product?.title}  />
                </Col>
                <Col md="6" className="info" >
                    <Title>
                        <p>{product?.title}</p>
                        <span className="heartIcon"><FontAwesomeIcon icon={faHeart}/></span>
                    </Title>
                    <Price>
                        ₩ <span>{product?.price}</span>
                    </Price>
                    <p style={{marginBottom:"20px"}}>
                        <Ment>{product?.choice ? "Conscious choice" : ""}</Ment>
                        <Ment>{product?.new ? "신제품" : ""}</Ment>
                    </p>
                    
                    <Form.Select aria-label="Default select example">
                        <option disabled>사이즈 선택</option>
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                    </Form.Select>
                    <LinkBox>
                        <p>
                            <FontAwesomeIcon icon={faRuler} />
                            <span>사이즈 가이드</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>원하는 사이즈가 품절인가요?</span>
                        </p>
                    </LinkBox>
                    
                    <div className="d-grid gap-2">
                        <Button variant="danger">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>바로 구매하기</span>
                        </Button>
                        <Button variant="dark">
                            <FontAwesomeIcon icon={faBagShopping} />
                            <span>장바구니 추가</span>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: clamp(1.2rem, 2vw, 1.7rem)
    font-weight: 700;
    margin-bottom: 20px;

    .heartIcon{
        cursor: pointer;
    }
`;

const Price = styled.p`
    margin-bottom: 18px;
    font-size: clamp(1rem, 2vw, 1.4rem);
    color: #333;
    span {
        font-weight: 600;
    }
`;

const Ment = styled.span`
    margin-right: 10px;
    padding: 4px 10px;
    border-raius: 4px;
    background-color: var(--text-hlight);
    color: #fff;
`;

const LinkBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    margin-bottom: 40px;

    p {
        cursor: pointer;

        span {
            margin-left: 6px;
            padding-bottom: 3px;
            transition: 0.2s;
        }

        &:hover span{
            border-bottom: 1px solid #666;
        }
    }
`;