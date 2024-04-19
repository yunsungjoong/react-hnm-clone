import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDetail = () => {
    let {id} = useParams();
    const getProductDetail = async() => {
        let url = `http://localhost:4000/product/${id}`;
        let response = await fetch(url);
        let data= await response.json();
        console.log(data);
    }
    useEffect(() => {
        getProductDetail()
    }, []);
    return (
        
        <Container>
            <Row>
                <Col sm={6}>asd</Col>
                <Col sm={6}>asd</Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;