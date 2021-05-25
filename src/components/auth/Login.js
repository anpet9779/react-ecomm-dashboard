import React, { useState } from 'react';
import Header from '../common/Header';
import {useHistory} from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Login.css'
import ClipLoader from "react-spinners/ClipLoader";


export default function Login() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");

    async function submitForm() {
        setLoading(true);
        console.log(email,password)
        let data = {
            "email" : email,
            "password" : password,
        }

        let response = await fetch("http://localhost:8000/api/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify(data)
        }); 
         response = await response.json();
         localStorage.setItem("et", JSON.stringify(response.access_token));
         setLoading(false);
         history.push('./add')
    }
    return (
        <div>
            <Header />
            <div className="login-box">
                <img src="bawarchi.png" className="avatar" />
                <h3>Ten Tables Tandoor</h3>
                <h5>Login Here</h5>
                <Form>
                    {/* Email Field */}
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label className="label" column sm={2}>Email</Form.Label>
                        <Col sm={12}>
                            <Form.Control type="email" placeholder="Ex: example@example.com" onChange={(e)=>setEmail(e.target.value)} />
                        </Col>
                    </Form.Group>

                    
                    {/* Password Field */}
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label className="label" column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row}>
                        <Col sm={{ span: 8, offset: 2 }}>
                            <Button onClick={submitForm} type="button">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
                </div>
                <ClipLoader color={color} loading={loading} className="spinner" size={200} />
        </div>

    )
}