import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();
        setAuthenticate(true);
        console.log("로그인 되었습니다.");
        navigate('/')
    }
    return (
        <div>
            
        <Container>
            <div>
                상품 상세페이지를 보려면 로그인하세요!
            </div>
            <Form onSubmit={(e)=>loginUser(e)}>
                <Form.Group className="mb-3"  controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
            </Form>
              
            
        </Container>
        </div>
    );
};

export default Login;