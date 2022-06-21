import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBRow,
} from "mdbreact";
import logo from '../../assets/images/logo-full.png';

export const SignupPage = (props: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');

    const [response, setResponse] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (success === "true") {
            const response1 = { username: email, accountType: type }
            const tk = props.UserChange(response1)
            console.log("success", success)
        } else if (success === "false") {
            const tk = props.UserChange(undefined)
        }
    }, [success]);

    const Signup = () => {
        console.log(email)
        console.log(password)
        console.log(type)
        if (email.indexOf('@') < 1) {
            setSuccess("false")
        } else {
            const requestHeaders = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "username": email, "password": password, "account_type": type, "grant_type": "password_grant" })
            };
            fetch('https://oneinclusionhk.centralindia.cloudapp.azure.com:8099/user/signup', requestHeaders).then(res => res.json()).then((data) => {
                data.msg.length > 0 ? setSuccess("true") : setSuccess("false")
                setResponse(data.msg)
            })
        }
    }
    if (success === "true") {
        return <Redirect to={{
            pathname: '/candidate-profile-basic-edit',
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
                                    <p className="h4 text-center mb-4">Sign up for 1inclusion</p>
                                    <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        Email
                                      </label>
                                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
                                    <br />
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Create password
                                      </label>
                                    <input type="password" id="defaultFormLoginPasswordEx" value={password} onChange={e => setPassword(e.target.value)} className="form-control" required />
                                    <br />
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Account type
                                      </label>
                                    <select className="form-control" id="exampleFormControlSelect1" value={type} onChange={e => setType(e.target.value)} required>
                                        <option>Job seeker</option>
                                        <option>Corporate</option>
                                        <option>Mentor</option>
                  s                     <option>Service Provider</option>
                                        <option>Others</option>
                                    </select>

                                    <div className="text-center mt-4">
                                        <p className="text-center mb-4">By clicking Agree & Sign up, You Agree to  Terms & Conditions  of 1inclusion platform</p>
                                        {(success === 'false') ? <p style={{ color: "red" }} className="text-center mb-4">Invalid credentials!</p> : <p></p>}
                                        <MDBBtn
                                            color="dark"
                                            onClick={() => Signup()}
                                        >Agree & Signup</MDBBtn>
                                        <p style={{ marginTop: "5vh" }} className="text-center mb-4">Have an account ? <a href="/Login">Login</a></p>
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
