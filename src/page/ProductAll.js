import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductAll = () => {
    const [ productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProduct = async () => {
        let searchQuery = query.get('q') || "";
        let url = `https://my-json-server.typicode.com/yunsungjoong/react-hnm-clone/products?q=${searchQuery}`;  // `http://localhost:4000/products?q=${searchQuery}`; 
        
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    useEffect(() => {
        getProduct();
    }, [query]);
    return (
        <ProductPage>
            <Container fluid="true">
                <Row>
                   {productList?.map(menu => 
                    <Col xs={6} md={4} xl={3} key={menu.id}><ProductCard item={menu} /></Col>
                )}
                </Row>
            </Container>
        </ProductPage>
    );
};

export default ProductAll;

const ProductPage = styled.section`
    
    padding-bottom: 100px;
    margin: 0 20px; /* 위아래 0 / 왼쪽오른쪽 마진*/

    .col-6 {
        margin-bottom: 30px;
    }

    @media screen and (min-width: 768px) {
        margin: 0 30px;

        .col-6 {
            margin-bottom: 60px;
        }
    }
    @media screen and (min-width: 1024px) {
        padding-top: 60px;
        padding-bottom: 200px;
    }
    @media screen and (min-width: 1640px) {
        max-width: 1600px;
        margin: 0 auto;

        .col-6 {
            margin-bottom: 60px;
        }
    }
`;