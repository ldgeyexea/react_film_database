import React from "react";
import logo from "../res/logo1.png";
import Searchbar from "./searchbar";
import searchIcon from "../res/icons8-search-50.png";
import movieCard from "./MovieCard";
import MovieCard from "./MovieCard";
import dashboardStyles from "../styles/dashboardStyles.css"
import commonStyles from "../styles/commonStyles.css"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allMovies: [],
            topMovies: [],
            newMovies: [],
            token: null,
        };
    }

    AddToBase(data) {
        const updatedMovies = [...data];
        this.setState({
            allMovies: updatedMovies,
            topMovies: updatedMovies.slice(0, 10),
            newMovies: updatedMovies.slice(10, 20),
        });
    }

    componentDidMount() {



        console.log(localStorage.getItem("token"))
        //localStorage.setItem("token","")//do resetowania


        fetch("https://at.usermd.net/api/movies")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.AddToBase(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    render() {
        return (
            <div style={{ margin: 10 }}>
                <div className={"sectionContainer"}>
                    <h2 className="heading">Top Movies</h2>
                    <div className={"topMoveiesContainer"}>
                        <div className={"topMovies"}>
                            {this.state.topMovies.map((movie) => (
                                <MovieCard
                                    title={movie.title}
                                    description={""}
                                    director={movie.director}
                                    id={movie.id}
                                    imgSrc={movie.image}
                                />
                            ))}
                        </div>
                    </div>
                    <h2 className="heading">New Movies</h2>
                    <div className={"topMoveiesContainer"}>

                        <div className={"topMovies"}>
                            {this.state.newMovies.map(
                                (movie)=>{
                                    return(<MovieCard title={movie.title} description={""} director={movie.director} id={movie.id} imgSrc={movie.image} genre={movie.genre} productionYear={movie.productionYear} rate={movie.rate}/>)
                                }
                            )}
                        </div>
                    </div>
                    <h2 className="heading">All movies</h2>
                    <div className={"allMoveiesContainer"}>


                            {this.state.allMovies.map(
                                (movie)=>{
                                    return(<MovieCard title={movie.title} description={""} director={movie.director} id={movie.id} imgSrc={movie.image}/>)
                                }
                            )}

                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard