import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    // 체크
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginUser = (e) => {
        if(email === '' || password === '') {
            alert('Email과 password를 입력해주세요.');
            return;
        };
        e.preventDefault();
        setAuthenticate(true);
        console.log("로그인 되었습니다.");
        navigate('/')
    }

    return (
        
            
        <Container className="login">
            <div>
                <span>상품 상세페이지를 보려면 로그인하세요!</span>
            </div>
            
                <Form onSubmit={(e)=>loginUser(e)}>
                    <Form.Group className="mb-3"  controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="E-mail을 작성해 주세요." 
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="비밀번호를 작성해 주세요." 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                            
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="로그인 유지" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        로그인
                    </Button>
                </Form>
            
        </Container>
        
    );
};

export default Login;