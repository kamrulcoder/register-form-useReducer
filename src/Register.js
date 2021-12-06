import React from 'react';
import { Container, Form, Col, Row } from "react-bootstrap"
const Register = () => {
    return (
        <>
            <Container>
                <div className="form-box">
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default Register;