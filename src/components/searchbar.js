import React, { useEffect, useState } from 'react';
import searchDropdownStyles from '../styles/searchDropdownStyles.css';
import {Link} from "react-router-dom";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [movies, setMovies] = useState([{}]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = () => {
        fetch("https://at.usermd.net/api/movies")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleItemClick = (movie) => {
        setSearchInput('')
        console.log(`Clicked on ${movie.title}`);

    };

    const filteredMovies =
        searchInput.length > 0
            ? movies.filter((movie) =>
                movie.title.toLowerCase().includes(searchInput.toLowerCase())
            )
            : [];

    return (
        <div className="dropdown">
            <input
                className="searchInput"
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}
            />
            {filteredMovies.length > 0 && (
                <ul className="dropdownList">
                    {filteredMovies.map((movie, index) => (
                        <Link to={`../movie/${movie.id}`} className={"movieCardContainer"}>
                        <li
                            key={index}
                            onClick={() => handleItemClick(movie)}
                            className="dropdownItem"
                        >
                            {movie.title}
                        </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;