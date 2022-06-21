import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBRow,
} from "mdbreact";
import logo from '../../assets/images/logo-full.png'

export const LoginPage = (props: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (success === "true") {
            const tk = props.UserChange(response)
            console.log("success", success)
        } else if (success === "false") {
            const tk = props.UserChange(undefined)
        }
    }, [success]);

    const Login = () => {
        console.log(email)
        console.log(password)
        const requestHeaders = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "username": email, "password": password, "grant_type": "password_grant" })
        };

        fetch('https://oneinclusionhk.centralindia.cloudapp.azure.com:8099/user/token', requestHeaders).then(res => res.json()).then((data) => {
            setResponse(data)
            data.token.length > 10 ? setSuccess("true") : setSuccess("false")
        })
    }
    if (success === "true") {
        return <Redirect to={{
            pathname: '/',
            state: { data: response }
        }} />
    }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol lg="6">
                    <img style={{ maxWidth: "-webkit-fill-available", width: "auto", height: "-webkit-fill-available", objectFit: "cover" }} src={logo} alt="1inclusion" className="" />
                </MDBCol>
                <MDBCol sm="12" lg="6">
                    <MDBContainer style={{ marginTop: "25vh" }}>
                        <MDBRow>
                            <MDBCol md="12">
                                <form>
                                    <p className="h4 text-center mb-4">Login to 1inclusion</p>
                                    <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        Your email
                                      </label>
                                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
                                    <br />
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Your password
                                      </label>
                                    <input type="password" id="defaultFormLoginPasswordEx" value={password} onChange={e => setPassword(e.target.value)} className="form-control" required />
                                    <div className="text-center mt-4">
                                        {(success === 'false') ? <p style={{ color: "red" }} className="text-center mb-4">Invalid credentials!</p> : <p></p>}
                                        <MDBBtn
                                            color="dark"
                                            onClick={() => Login()}
                                        >Login</MDBBtn>
                                        <p style={{ marginTop: "5vh" }} className="text-center mb-4">Don’t have an account ? <a href="/Signup">Sign up</a></p>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
