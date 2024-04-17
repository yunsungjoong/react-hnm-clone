import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
const Login = () => {
    const loginUser = (e) => {
        e.preventDefault()
        console.log("login user function issue")
    }
    return (
        <div>
        <Container>
            
                
                        <Form onSubmit={(e)=>loginUser(e)}>
                            <Form.Group className="mb-3"  controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
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
                                Submit
                            </Button>
                        </Form>
              
            
        </Container>
        </div>
    );
};

export default Login;