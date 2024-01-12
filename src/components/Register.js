import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import loginStyles from "../styles/loginStyles.css";
import Badge from "react-bootstrap/Badge";
const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorOcured, setErrorOcured] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password!==confirmPassword)
        {
            setErrorOcured("Passwords Dont Match")
            return
        }
        if (name === "" || password === "" || email === "" || confirmPassword === "") {
            setName("");
            setPassword("");
            setEmail("");
            setConfirmPassword("");
            setErrorOcured("Empty input");
        } else {
            try {
                const reqOpts = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password})
                };

                // Replace the URL with your registration endpoint
                const response = await fetch('https://at.usermd.net/api/user/create', reqOpts);
                const data = await response.json();

                // Handle the registration success
                console.log("Registration successful:", data);

                setErrorOcured("");

                // Optionally, you can redirect the user to another page after successful registration
                navigate("/signIn");
            } catch (error) {
                console.error("Error registering:", error);
                setName("");
                setPassword("");
                setEmail("");
                setConfirmPassword("");
                setErrorOcured("Registration failed");
            }
        }
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        if (id === "login") {
            setName(value);
        } else if (id === "password") {
            setPassword(value);
        } else if (id === "email") {
            setEmail(value);
        } else if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
    };

    return (
        <div className={"container"}>
            <Badge className={"bg-danger errorBadge"} >{errorOcured === "" ? "" : "error:" + errorOcured}</Badge>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="login">Login</label>
                    {
                        name.length !== 0 ? (
                            <input
                                type="text"
                                className="form-control inputCorrect"
                                id="login"
                                placeholder="login"
                                value={name}
                                onChange={handleChange}
                            />
                        ) : (
                            <input
                                type="text"
                                className="form-control inputError"
                                id="login"
                                placeholder="login"
                                value={name}
                                onChange={handleChange}
                            />
                        )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>

                    {
                        password.length !== 0 ? (
                            <input
                                type="password"
                                className="form-control inputCorrect"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange}
                            />
                        ) : (
                            <input
                                type="password"
                                className="form-control inputError"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange}
                            />
                        )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">confirm password</label>

                    {
                        confirmPassword.length !== 0 ? (
                            <input
                                type="password"
                                className="form-control inputCorrect"
                                id="confirmPassword"
                                placeholder="confirmPassword"
                                value={confirmPassword}
                                onChange={handleChange}
                            />
                        ) : (
                            <input
                                type="password"
                                className="form-control inputError"
                                id="confirmPassword"
                                placeholder="confirm Password"
                                value={confirmPassword}
                                onChange={handleChange}
                            />
                        )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>

                    {
                        email.length !== 0 ? (
                            <input
                                type="email"
                                className="form-control inputCorrect"
                                id="email"
                                placeholder="email@example.com"
                                value={email}
                                onChange={handleChange}
                            />
                        ) : (
                            <input
                                type="email"
                                className="form-control inputError"
                                id="email"
                                placeholder="email@example.com"
                                value={email}
                                onChange={handleChange}
                            />
                        )
                    }
                </div>


                <div className={"ButtonContainer"}>
                    <button type="submit" className={"btn btn-primary Button"}>
                        Create Account
                    </button>
                </div>


            </form>



        </div>
    );
};

export default Register;
