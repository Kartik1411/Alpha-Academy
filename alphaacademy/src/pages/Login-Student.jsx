import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import '../styles/login.css';


function LoginStudent (){
    return(
        <>
            <h1 className="head">
                Login as Student
            </h1>
            
            <div className="Login">
                <Form >
                    <Form.Group size="lg" controlId="ID">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            // value={email}
                        />
                    </Form.Group>

                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            // value={password}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" >
                        Login
                    </Button>
                </Form>
            </div>

        </>
    )
}
export default LoginStudent; 