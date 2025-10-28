import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {auth} from "./firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
const SignUp=()=>{
      
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const HandleSignup=async(e)=>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            alert("signup successfully");
        }catch(error){
            alert(error.message);
        }
    }
    return(
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    )
}
export default SignUp