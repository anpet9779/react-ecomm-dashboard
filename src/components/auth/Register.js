import React, { useState } from 'react';
import Header from '../common/Header';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Register.css'
import ClipLoader from "react-spinners/ClipLoader";


export default function Register() {

    const [email, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");

    async function submitForm() {
        setLoading(true);
        let data = {
            "fname" : fname,
            "lname" : lname,
            "email" : email,
            "password" : password,
            "gender" : gender,
        }

        let response = await fetch("http://localhost:8000/api/register",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify(data)
        }); 
         response = await response.json();
         console.log(response)
         setLoading(false);
    }
    return (
        <div>
            <Header />
            <div className="Register-box">
                <img src="bawarchi.png" className="avatar" />
                <h3>Ten Tables Tandoor</h3>
                <h5>Register Here</h5>
                <Form>

                    {/* Name Fields */}
                    <Row>
                        <Col sm={6}>
                            <Form.Label className="label" >First Name</Form.Label>
                            <Form.Control type="text" placeholder="Ex: John" onChange={(e) => setFname(e.target.value)} />
                        </Col>
                        <Col sm={6}>
                            <Form.Label className="label" >Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Snow" onChange={(e) => setLname(e.target.value)} />
                        </Col>
                    </Row>


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

                    {/* Gender Fields */}
                    <fieldset>
                        <Form.Group as={Row} onChange={(e)=>setGender(e.target.value)} >
                            <Col sm={12}>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    id="male"
                                    value="male"
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    id="female"
                                    value ="female"
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Other"
                                    name="gender"
                                    id="other"
                                    value="other"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 8, offset: 2 }}>
                            <Button onClick={submitForm} type="button">Sign Up</Button>
                        </Col>
                    </Form.Group>
                </Form>
                </div>
                <ClipLoader color={color} loading={loading} className="spinner" size={200} />
        </div>

    )
}