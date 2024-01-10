import React, { useEffect, useState } from "react";
import Badge from 'react-bootstrap/Badge';
import big_user_ico from "../res/big_user_ico.png";
import MovieCard from "./MovieCard";
import userPageStyles from "../styles/userPageStyles.css";
import commonStyles from "../styles/commonStyles.css";
import { useNavigate, useParams } from "react-router-dom";

const UserPage = () => {
    const { token } = useParams();
    const navigation = useNavigate();
    const [user, setUser] = useState({ uid: "", name: "", role: "", access: "", created: "", expires: "" });
    const [moviesWatched, setMoviesWatched] = useState([]);
    const [moviesToWatch, setMoviesToWatch] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await readToken(token);
        };

        fetchData();
    }, [token]);

    useEffect(() => {
        const arrayIDSWatched = localStorage.getItem("watched" + user.name)?.split(",") || [];
        const arrayIDStoWatch = localStorage.getItem("planed" + user.name)?.split(",") || [];
        getWatched(arrayIDSWatched);
        getPlaned(arrayIDStoWatch);
    }, [user.name]);

    const getWatched = (ids) => {
        ids.forEach((id) => {
            if (id !== "") {
                fetch("https://at.usermd.net/api/movies/" + id)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        setMoviesWatched((prevMovies) => [...prevMovies, data]);
                        console.log("dodano");
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                    });
            }
        });
    };
    const getPlaned = (ids) => {
        ids.forEach((id) => {
            if (id !== "") {
                fetch("https://at.usermd.net/api/movies/" + id)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        setMoviesToWatch((prevMovies) => [...prevMovies, data]);
                        console.log("dodano");
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                    });
            }
        });
    };

    const readToken = async (jwt) => {
        console.log("onUserPage" + jwt);
        await setUser(JSON.parse(atob(token.split('.')[1])));
        logToken();
    };

    const logToken = () => {
        console.log("full user obj");
        console.log(user);
    };

    const logOut = () => {
        localStorage.setItem("token", "");
        navigation("../");
        window.location.reload();
    };

    return (
        <div className={"componentContaier"}>
            <div className={"userTab"}>
                <div className={"imgMugshotContainer"}>
                    <img src={big_user_ico} className="imgMugshot" alt="userICo" />
                </div>
                <div>

                    <h2>
                        <Badge bg={"secondary"}>identifier:{user.name}</Badge>
                    </h2>
                    <h2>
                        <Badge bg={"secondary"}>movies watched:{moviesWatched.length}</Badge>
                    </h2>
                    {/*<h2>*/}
                    {/*    <Badge bg={"primary"}>Desription:</Badge>*/}
                    {/*</h2>*/}
                    {/*<p>*/}
                    {/*    will work on localstorage bc, ¯\_(ツ)_/¯+_+(⊙_⊙)？╰(*°▽°*)╯*/}
                    {/*</p>*/}
                </div>
                <button className={"btn btn-danger"} value={"wyloguj"} onClick={logOut}>
                    wyloguj
                </button>
            </div>
            <div className={"userContentComteiner"}>
                <h2 className="heading">Watched Movies</h2>
                <div className={"userContentName"}>
                    {moviesWatched.map((movie) => (
                        <MovieCard title={movie.title}  imgSrc={movie.image} director={"piotr Dawid"} id={movie.id} />
                    ))}
                </div>
                <br />
                <h2 className="heading">Plan to watch</h2>
                <div className={"userContentName"}>
                    {moviesToWatch.map((movie) => (
                        <MovieCard title={movie.title}  imgSrc={movie.image} director={"piotr Dawid"} id={movie.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserPage;
