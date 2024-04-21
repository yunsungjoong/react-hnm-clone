import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import {Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const ProductDetail = () => {
    let {id} = useParams();
    const [ product,setProduct] = useState(null)
    const getProductDetail = async() => {
        let url = `http://localhost:4000/products/${id}`;
        let response = await fetch(url);
        let data= await response.json();        
        console.log(data)
        setProduct(data);
    }
    useEffect(() => {
        getProductDetail()
    }, []);
    return (
        <Container>
            <Row>
                <Col className="product-img"  sm={6}>
                    <img src={product?.img} alt=''  />
                </Col>
                <Col sm={6}>
                    <div>{product?.title}</div>
                    <div>₩ {product?.price}원</div>
                    <div>{product?.color}</div>
                    
                    <div className="mb=10">
                    <Form.Select size="sm">
                        <option>사이즈</option>
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                    </Form.Select>
                    </div>

                    <div className="d-grid gap-2">
                        <Button variant="danger" size="lg">
                            Block level button
                        </Button>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;