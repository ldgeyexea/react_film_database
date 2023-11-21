import {Component} from "react";
import React from "react";
import userPageStyles from "../styles/userPageStyles.css"
import big_user_ico from "../res/big_user_ico.png"
import Badge from 'react-bootstrap/Badge';
import MovieCard from "./MovieCard";
import commonStyles from "../styles/commonStyles.css"


class UserPage extends React.Component {

    render() {
        return (

            <div className={"componentContaier"}>
                <div className={"userTab"}>
                    <div className={"imgMugshotContainer"}>
                        <img src={big_user_ico} className="imgMugshot" alt="userICo"/>
                    </div>
                    <div>
                        <h2>
                            <Badge bg={"secondary"}>User</Badge>
                        </h2>
                        <h2>
                            <Badge bg={"secondary"}>Email</Badge>
                        </h2>
                        <h2>
                            <Badge bg={"secondary"}>Total Movies Watched:1000</Badge>
                        </h2>
                        <h2>
                            <Badge bg={"primary"}>Desription:</Badge>

                        </h2>
                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem
                            lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem
                            lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem
                            lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem
                            lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem
                        </p>
                    </div>
                </div>
                <div className={"userContentComteiner"}>
                    <h2 className="heading">Watched Movies</h2>
                    <div className={"userContentName"}>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                    </div>
                    <br/>
                    <h2 className="heading">Plan to watch</h2>
                    <div className={"userContentName"}>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                    </div>

                </div>


            </div>
        );
    }
}

export default UserPage