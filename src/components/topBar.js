import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../res/logo1.png";
import Searchbar from "./searchbar";
import searchIcon from "../res/icons8-search-50.png";
import userIco from "../res/userIco.png";
import { useAuth } from "./AuthContext";
import topBarStyles from "../styles/topBarStyles.css";

const TopBar = () => {
    const [token, setToken] = useState("");


    const handleClick = () => {
        if (token === "") {
            // You may want to add your login logic here
            // For example, show a login modal or navigate to the login page
            // login(); // Call the login function from useAuth
            console.log("User is not logged in");
        } else {
            console.log("User is logged in");
        }
    };

    useEffect(() => {
        // Retrieve token from localStorage on component mount
        const tokenStorage = localStorage.getItem("token");
        setToken(tokenStorage);
    }, []);

    useEffect(() => {
        // Check if token in localStorage has changed
        const newToken = localStorage.getItem("token");
        console.log("Update topbar token to: " + newToken);
        if (newToken !== token) {
            setToken(newToken);
        }
    }, [token]);

    return (

        <div className="top-bar">
            <div className="boxlogo" onClick={handleClick}>
                <Link to={"/"}>
                    <img className={"image"} src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="boxSearchbar" onClick={handleClick}>
                <div className="search">
                    <Searchbar />
                    <img src={searchIcon} alt="Search Icon" />
                </div>
            </div>
            <div className="boxAdd">
                {token === "" ? (
                    ""
                ) : (
                    <Link to={`/add`}>
                        Dodaj film
                    </Link>

                )}

            </div>

                {token === "" ? (
                    <div className="boxLogin" onClick={handleClick}>
                    <Link to={"signIn"}>zaloguj</Link>
                    </div>
                ) : (
                    <div className="boxLoginIco" onClick={handleClick}>
                    <Link to={`user/${token}`}>
                        <img src={userIco} alt="User Icon" />
                    </Link>
                    </div>

                )}

        </div>
    );
};

export default TopBar;
