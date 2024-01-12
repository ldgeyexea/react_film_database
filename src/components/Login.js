import React, {useEffect, useState} from "react";
import {Link, Outlet, useHistory, useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import loginStyles from "../styles/loginStyles.css";
import Badge from "react-bootstrap/Badge";


const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errorOcured, setErrorOcured] = useState("");
    const [fetchData, setFetchData] = useState("");
    const navigation = useNavigate()



    useEffect(() => {
        if (fetchData !== "" && errorOcured === "") {
            localStorage.setItem("token",fetchData)

            navigation("../")
            window.location.reload()
        }
    }, [fetchData]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (login === "" || password === "") {
            setLogin("");
            setPassword("");
            setErrorOcured("Empty input");
        } else {
            try {
                const reqOpts = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ login, password })
                };

                const response = await fetch('https://at.usermd.net/api/user/auth', reqOpts);
                const data = await response.json();

                setFetchData(data.token);
                console.log("datafetched:"+fetchData.token)
                setErrorOcured("");


            } catch (error) {
                console.error("Error fetching data:", error);
                setLogin("");
                setPassword("");
                setErrorOcured("wrong login or password");
            }
        }

    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        if (id === "login") {
            setLogin(value);
        } else if (id === "password") {
            setPassword(value);
        }
    };

    return (

        <div className={"container"}>
            <Badge className={"bg-danger errorBadge"} >{errorOcured === "" ? "" : "error:" + errorOcured}</Badge>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="login">Login</label>
                    {
                        login.length!==0?(           <input
                            type="text"
                            className="form-control inputCorrect"
                            id="login"
                            placeholder="login"
                            value={login}
                            onChange={handleChange}
                        />):(           <input
                            type="text"
                            className="form-control inputError"
                            id="login"
                            placeholder="login"
                            value={login}
                            onChange={handleChange}
                        />)
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>

                    {
                        password.length!==0?(<input
                            type="password"
                            className="form-control inputCorrect"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                        />):(<input
                            type="password"
                            className="form-control inputError"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                        />)
                    }
                </div>
    <div className={"ButtonContainer"}>
                <button type="submit" className={"btn btn-success Button"}>
                    Login
                </button>
                <Link to={"../SignUp"} style={{width:"100%"}}>
                    <button type="button" className={"btn btn-primary Button"}>
                        I don't have an account
                    </button>
                </Link>
    </div>

            </form>

        </div>
    );
};

export default Login;