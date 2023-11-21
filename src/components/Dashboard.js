import React from "react";
import logo from "../res/logo1.png";
import Searchbar from "./searchbar";
import searchIcon from "../res/icons8-search-50.png";
import movieCard from "./MovieCard";
import MovieCard from "./MovieCard";
import dashboardStyles from "../styles/dashboardStyles.css"
import commonStyles from "../styles/commonStyles.css"

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <div className={"sectionContainer"}>
                    <h2 className="heading">Top Movies</h2>
                    <div className={"topMoveiesContainer"}>

                        <div className={"topMovies"}>
                            <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                            <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                            <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                            <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                            <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                            <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                            <MovieCard title={"film1"} description={"opis1"} director={"piotr Dawid"}/>
                        </div>
                    </div>
                    <h2 className="heading">New Movies</h2>
                    <div className={"topMoveiesContainer"}>

                        <div className={"topMovies"}>
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
            </div>
        );
    }
}

export default Dashboard