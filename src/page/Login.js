import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = ({setAuthenticate}) => { // 체크
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginUser = (e) => {
        if(id === '' || password === '') {
            alert('Email과 password를 입력해주세요.');
            return;
        };
        e.preventDefault();
        
        setAuthenticate(true);
        console.log("로그인 되었습니다.");
        dispatch(authenticateAction.login(id,password))
        navigate('/')
    };
    return (
        <Container className="login">
            <Form onSubmit={(e)=>loginUser(e)}>
                <Form.Group className="mb-3"  controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="E-mail을 작성해 주세요." 
                        value={id}
                        onChange={(e) => {setId(e.target.valueAsDate)}}
                    />
                    <Form.Text className="text-muted">
                        저희 H&M은 절대 고객의 개인정보를 공개 및 공유하지 않습니다.
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