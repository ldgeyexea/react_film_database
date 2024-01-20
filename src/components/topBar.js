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
    const [loged,setLoged]=useState(false);
    const [timePassing, setTimePassing] = useState('');


    useEffect(() => {
        const tokenStorage = localStorage.getItem("token");
        setToken(tokenStorage);
        const updateValue = () => {
            setTimePassing((prevValue) => prevValue + 1);
        };

        const intervalId = setInterval(updateValue, 6000); // 60000 milliseconds = 1 minute


        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {

        // Check if token in localStorage has changed
        const newToken = localStorage.getItem("token");
        console.log("Update topbar token to: " + newToken);
        if (newToken !== token) {
            setToken(newToken);
        }
        if(token!=null)
        if(token!=="")
        {
            const currentTimestamp = (Math.floor(Date.now() / 1000));
            if(JSON.parse(atob(token.split('.')[1])).exp>currentTimestamp)
            {
                console.log(currentTimestamp)
                console.log(JSON.parse(atob(token.split('.')[1])).exp)
                console.log(JSON.parse(atob(token.split('.')[1])).exp-currentTimestamp+"seconds left")
                setLoged(true)
            }
            else{
                setLoged(false)
                localStorage.removeItem("token")
            }
        }


    }, [token,timePassing]);

    return (

        <div className="top-bar">
            <div className="boxlogo" >
                <Link to={"/"}>
                    <img className={"image"} src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="boxSearchbar">
                <div className="search">
                    <Searchbar />
                    <img src={searchIcon} alt="Search Icon" />
                </div>
            </div>
            <div className="boxAdd">
                {loged === false ? (
                    ""
                ) : (
                    <Link to={`/add`}>
                        Dodaj film
                    </Link>

                )}

            </div>

                {loged === false ? (
                    <div className="boxLogin">
                    <Link to={"signIn"}>zaloguj</Link>
                    </div>
                ) : (
                    <div className="boxLoginIco" >
                    <Link to={`user/${token}`}>
                        <img src={userIco} alt="User Icon" />
                    </Link>
                    </div>

                )}

        </div>
    );
};

export default TopBar;
