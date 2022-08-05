import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Validation from "./Validation";
import Products from "./Products";
export default function Login() {
    const initialValues = {
        email:"",
        password:"",
    }
    const [formValue, setFormValue] =  useState(initialValues);
    const [formEroor, setFormError] = useState({});
    const [login , setLogin]  = useState(true)
    const handleChange = (e)=>{
        const {name, value}  = e.target
        // console.log(value);
        setFormValue({...formValue, [name] : value});
        
        
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      setFormError(Validation(formValue));
      if(formEroor.flag){
        setLogin(false)
      }
      
    }
  return (
    <>
    
     {login  ? 
      <Container className="mt-3">
        <h1 className="text-center">Login Please</h1>
      <Form >
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" value={formValue.email} name="email" onChange={handleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <p>{formEroor.email}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password"  placeholder="Password" value={formValue.password}  name="password" onChange={handleChange}/>
          <p>{formEroor.password}</p>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit" onClick={handleSubmit} >
          Submit
        </Button>
      </Form> 
      </Container>
      
       :
      <div>
        <Button className="float-end" variant="warning" onClick={()=>setLogin(true)}>Log out</Button>
        <Products/>
        </div>
        } 
       
    </>
  );
}
