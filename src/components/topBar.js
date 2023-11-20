import React from "react";
import topBarStyles from "../styles/topBarStyles.css"
import logo from "../res/logo1.png"
import searchbar from "./searchbar";
import Searchbar from "./searchbar";



class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "zaloguj",
        };
    }

    handleClick() {
        if (this.state.value === "zaloguj") {
            this.setState({value: "wyloguj"});
        } else {
            this.setState({value: "zaloguj"});
        }
    }

    render() {
        return (
            <div className="top-bar">

                <div className="boxlogo" onClick={() => this.handleClick()}>
                    <img className={"image"} src={logo}/>
                </div>
                <div className="boxSearchbar" onClick={() => this.handleClick()}>
                    <div className="search">
                        <Searchbar></Searchbar>
                    </div>
                </div>
                <div className="boxLogin" onClick={() => this.handleClick()}>{this.state.value}</div>
            </div>
        );
    }
}


export default TopBar;
