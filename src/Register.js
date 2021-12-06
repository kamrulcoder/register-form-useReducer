import React, { useReducer } from 'react';
import { Container, Form, Col, Row, Button } from "react-bootstrap"
import "./register.css";

const initializeState = {
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
    termsAccepted: false,
}


const reducer = (state, action) => {
    if (action.name === "termsAccepted") {
        return { ...state, termsAccepted: action.checked }
    } else {
        return { ...state, [action.name]: action.value }
    }

}


const Register = () => {

    const [state, dispatch] = useReducer(reducer, initializeState);



    const handleSubmit = (e) => {
        e.preventDefault();
        alert("you are success submit ");
        console.log(state)
    }

    const handleChanged = (e) => {

        const { name, value, checked } = e.target;

        const action = { name, value, checked }
        dispatch(action)

    }

    const validate = (state) => {

        return state.password === state.passwordRepeat && state.termsAccepted;




    }

    return (
        <>
            <Container>
                <div className="form-box">
                    <h2>Register Form </h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name </Form.Label>
                            <Form.Control name="name" type="text" onChange={handleChanged} placeholder="Enter Name " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleChanged} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleChanged} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={handleChanged} name="passwordRepeat" type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check name="termsAccepted" onChange={handleChanged} type="checkbox" label="Check me out" />
                        </Form.Group>

                        <p className={!validate(state) ? 'errorMessage' : 'invisible'}>
                            The first password dosen't match the second password so please check
                            that!
                        </p>

                        <Button variant="primary" type="submit" className={!validate(state) ? 'disabled' : ''}

                            disabled={!validate(state)}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default Register;