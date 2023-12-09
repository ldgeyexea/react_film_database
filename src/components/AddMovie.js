import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import placeholder from "../res/logo1.png"
import movieCardStyle from "../styles/movieCardStyles.css"
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import loginStyles from "../styles/loginStyles.css"


class AddMovie extends Component{
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
                        <label htmlFor="exampleInputPassword1">Title</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                               placeholder="title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Director</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                               placeholder="director"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Dessription</label>

                        <textarea className={"form-control"} placeholder={"description"} id="exampleInputDescription"></textarea>
                    </div>


                    <Link to={"../"}> <button type="submit" className={"btn btn-primary"}>add</button></Link>

                </form>
            </div>

        );
    }
}
export default AddMovie;