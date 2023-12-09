import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import placeholder from "../res/logo1.png"
import movieCardStyle from "../styles/movieCardStyles.css"
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import loginStyles from "../styles/loginStyles.css"


class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: "zaloguj",
        };
    }
    goToRegister()
    {

    }

    render() {
        return(
            <div className={"container"}>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Login</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                               placeholder="login"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password"/>
                    </div>


                    <Link to={"../"}> <button type="submit" className={"btn btn-primary"}>Login</button></Link>
                    <Link to={"../SignUp"}> <button type="submit" className={"btn btn-primary button"}>I dont have account</button></Link>
                </form>
            </div>

        );
    }
}
export default Login;