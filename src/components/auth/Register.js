import React, { useState } from 'react';
import { Form, Row, Col, Button, Card, Container } from 'react-bootstrap';
import './Register.css'
export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");

    function submitForm() {
        console.log("Email", email)
        console.log("Password", password)
        console.log("Gender", gender)
    }
    return (
        <div>
            <div className="login-box">
                <img src="bawarchi.png" className="avatar" />
                <h3>Ten Tables Tandoor</h3>
                <h5>Login Here</h5>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={12}>
                            Email
    </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={12}>
                            Password
    </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    {/* <fieldset>
                        <Form.Group as={Row}>
                            <Col sm={12}>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Breakfast"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Lunch"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                 <Form.Check
                                    inline
                                    type="radio"
                                    label="Dinner"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset> */}
                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col sm={{ span: 8, offset: 2 }}>
                            <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 8, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form></div>
        </div>
    )
}