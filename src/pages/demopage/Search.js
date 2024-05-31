import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Search.css";

const Search = () => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        if (e.target.value.length > 2) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${e.target.value}`)
                .then((response) => {
                    setSearchResults(response.data.results);
                })
                .catch((err) => {
                    alert("Search failed");
                });
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="form-control"
                placeholder="Search for a movie..."
                value={query}
                onChange={handleSearch}
            />
            <div className="search-results">
                {searchResults.map(movie => (
                    <Link
                        key={movie.id}
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/movie/${movie.id}`}
                    >
                        <div className="search-result-item">
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                            <div className="search-result-info">
                                <h3>{movie.original_title}</h3>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Search;
