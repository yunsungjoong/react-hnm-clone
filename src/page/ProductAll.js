import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ProductAll = () => {
    const [ productList, setProductList] = useState([])
    const getProduct = async () => {
        let url = "http://localhost:4000/products"
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data);
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div>
            <Container>
                <Row>
                {productList.map((menu) => (
                    <Col lg={3} sm={12}>
                        <ProductCard item={menu}/>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;