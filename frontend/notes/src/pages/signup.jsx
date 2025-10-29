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
         <Form onSubmit={HandleSignup}className='p-4 shadow-lg rounded bg-white'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" 
        placeholder="Enter email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
         />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
         placeholder="Password"
         value={password}
         onChange={(e)=>setPassword(e.target.password)} />
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