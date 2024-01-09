import React, {useEffect, useState} from "react";
import Badge from 'react-bootstrap/Badge';
import big_user_ico from "../res/big_user_ico.png";
import MovieCard from "./MovieCard";
import userPageStyles from "../styles/userPageStyles.css";
import commonStyles from "../styles/commonStyles.css";
import {useNavigate, useParams} from "react-router-dom";

const UserPage = () => {

    const { token } = useParams()
    const navigation=useNavigate()
    const [user,setUser]=useState({uid:"",name:"",role:"",access:"",created:"",expires:""})
    useEffect(()=>{

            readToken(token)


    },[])

    const readToken=async (jwt)=>{
        console.log("onUserPage"+jwt)
        //console.log(JSON.parse(atob(token.split('.')[1])))
        await setUser(JSON.parse(atob(token.split('.')[1])))
        logToken()
    }
    const logToken=()=>{
        console.log("full user obj")
        console.log(user)
    }
    const logOut=()=>{
        localStorage.setItem("token","");
        navigation("../")
        window.location.reload()

    }
    return (
        <div className={"componentContaier"}>
            <div className={"userTab"}>
                <div className={"imgMugshotContainer"}>
                    <img src={big_user_ico} className="imgMugshot" alt="userICo"/>
                </div>
                <div>
                    <h2>
                        <Badge bg={"secondary"}>{/*user.name*/}nickname</Badge>
                    </h2>
                    <h2>
                        <Badge bg={"secondary"}>{user.name}</Badge>
                    </h2>
                    <h2>
                        <Badge bg={"secondary"}>will work on localstograge, bo ㄟ(≧◇≦)ㄏ</Badge>
                    </h2>
                    <h2>
                        <Badge bg={"primary"}>Desription:</Badge>
                    </h2>
                    <p>
                        will work on localstorage bc, ¯\_(ツ)_/¯+_+(⊙_⊙)？╰(*°▽°*)╯
                    </p>
                </div>
                <button value={"wyloguj"} onClick={logOut}>wyloguj</button>
            </div>
            <div className={"userContentComteiner"}>
                <h2 className="heading">Watched Movies</h2>
                <div className={"userContentName"}>
                    {[...Array(15).keys()].map((index) => (
                        <MovieCard key={index} title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                    ))}
                </div>
                <br/>
                <h2 className="heading">Plan to watch</h2>
                <div className={"userContentName"}>
                    {[...Array(7).keys()].map((index) => (
                        <MovieCard key={index} title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserPage;
