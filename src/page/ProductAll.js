import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
    const [ productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProduct = async () => {
        let searchQuery = query.get('q') || ""; // q라고 되어 있는 아이템을 가져와 넣는다.
        console.log("쿼리값은" , searchQuery)
        let url = `http://localhost:4000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    useEffect(() => {
        getProduct();
    }, [query]);
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