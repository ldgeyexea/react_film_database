import React, {useEffect, useState} from "react";
import {Link, useHistory, useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import loginStyles from "../styles/loginStyles.css";


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
            setErrorOcured("pusty");
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
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="login">Login</label>
                    <input
                        type="text"
                        className="form-control"
                        id="login"
                        placeholder="login"
                        value={login}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className={"btn btn-primary"}>
                    Login
                </button>
                <Link to={"../SignUp"}>
                    <button type="button" className={"btn btn-primary button"}>
                        I don't have an account
                    </button>
                </Link>
            </form>
            <h1 style={{ color: 'red' }}>{errorOcured === "" ? "" : "error:" + errorOcured}</h1>
        </div>
    );
};

export default Login;