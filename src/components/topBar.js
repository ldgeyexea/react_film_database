import React from "react";
import topBarStyles from "../styles/topBarStyles.css"
import logo from "../res/logo1.png"
import searchbar from "./searchbar";
import Searchbar from "./searchbar";
import searchIcon from "../res/icons8-search-50.png"
import {Link} from "react-router-dom";
import userIco from "../res/userIco.png"
import userPage from "./UserPage";



class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "zaloguj",
        };
    }

    handleClick() {
        if (this.state.value === "zaloguj") {
            this.setState({value: "zalogowano"});
        }
    }

    render() {
        return (
            <div className="top-bar">

                <div className="boxlogo" onClick={() => this.handleClick()}>
                    <Link to={"/"}>
                    <img className={"image"} src={logo}/>
                    </Link>
                </div>
                <div className="boxSearchbar" onClick={() => this.handleClick()}>
                    <div className="search">
                        <Searchbar></Searchbar>
                        <img src={searchIcon}/>
                    </div>
                </div>
                <div className="boxLogin" onClick={() => this.handleClick()}>
                    {this.state.value==="zaloguj"? <Link to={"signIn"}>zaloguj</Link> :<Link to={"user"}><img src={userIco}></img></Link>}
                </div>
            </div>
        );
    }
}


export default TopBar;
