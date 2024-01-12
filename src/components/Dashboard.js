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
            filteredMovies:[],
            selectedGenre: "",
            token: null,
        };
    }

    handleGenreChange = async(event) => {

        const selectedGenre = event.target.value;

        // Filter movies based on the selected genre
        let filteredMovies =
            selectedGenre === "all"
                ? this.state.allMovies
                : this.state.allMovies.filter((movie) =>
                    movie.genre.toLowerCase().includes( selectedGenre.toLowerCase())
                );

        this.setState({
            selectedGenre,
            filteredMovies,
        }, () => {
            console.log(this.state.filteredMovies);
            console.log(this.state.allMovies);
        });


    };

    AddToBase(data) {
        const updatedMovies = [...data];

        // Sort movies by rate (descending) for topMovies
        const topMovies = updatedMovies
            .slice()
            .sort((a, b) => b.rate - a.rate)
            .slice(0, 5);

        // Sort movies by productionYear (descending) for newMovies
        const newMovies = updatedMovies
            .slice()
            .sort((a, b) => b.productionYear - a.productionYear)
            .slice(0, 5);

        this.setState({
            allMovies: updatedMovies,
            topMovies,
            newMovies,
            filteredMovies:this.state.allMovies,




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
            <div style={{ margin: 10 }}className={"dashboard"}>

                <div className={"sectionContainer"}>
                    <h2 className="heading">Top Movies</h2>
                    <div className={"topMoveiesContainer"}>
                        <div className={"topMovies"}>
                            {this.state.topMovies.map((movie) => (
                                <MovieCard
                                    title={movie.title}
                                    description={(movie.content.split(' ').slice(0, 3).join(' ')+"...")}
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
                                    return(<MovieCard title={movie.title}   description={(movie.content.split(' ').slice(0, 3).join(' ')+"...")} director={movie.director} id={movie.id} imgSrc={movie.image} genre={movie.genre} productionYear={movie.productionYear} rate={movie.rate}/>)
                                }
                            )}
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div style={{width:"10%",marginLeft:"10%"}}></div>
                    <h2 className="heading">All movies</h2>
                    <div style={{float:"right", marginBottom:"10px",width:"10%",marginRight:"10%"}}>
                        <label htmlFor="genreFilter">Select Genre: </label>
                        <select
                            id="genreFilter"
                            value={this.state.selectedGenre}
                            onChange={this.handleGenreChange}
                            className={"form-select"}
                        >
                            <option value="all">All Genres</option>
                            {/* Assume you have a list of unique words from your movies genres */}
                            {Array.from(
                                new Set(
                                    this.state.allMovies
                                        .flatMap((movie) => movie.genre.toLowerCase().split(','))
                                        .map((genre) => genre.trim())
                                )
                            ).map((genre, index) => (
                                <option key={index} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>
                    </div>
                    <div style={{clear:"both"}} className={"allMoveiesContainer"}>
                        {this.state.filteredMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                title={movie.title}
                                description={(movie.content.split(' ').slice(0, 3).join(' ')+"...")}
                                director={movie.director}
                                id={movie.id}
                                imgSrc={movie.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard