// src/components/playlist/Playlist.js
import React, { useEffect, useState } from 'react';
import './Playlist.css';

const Playlist = () => {
    const [playlist, setPlaylist] = useState([]);
    const loggedInUser = localStorage.getItem("loggedInUser");

    useEffect(() => {
        const storedPlaylist = JSON.parse(localStorage.getItem(`playlist_${loggedInUser}`)) || [];
        setPlaylist(storedPlaylist);
    }, [loggedInUser]);

    const removeFromPlaylist = (movieId) => {
        const updatedPlaylist = playlist.filter(movie => movie.id !== movieId);
        setPlaylist(updatedPlaylist);
        localStorage.setItem(`playlist_${loggedInUser}`, JSON.stringify(updatedPlaylist));
    };

    return (
        <div className="playlist">
            <h2>Your Playlist</h2>
            {playlist.length === 0 ? (
                <p>No movies in your playlist.</p>
            ) : (
                <div className="playlist-movies">
                    {playlist.map(movie => (
                        <div key={movie.id} className="playlist-movie">
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title} />
                            <div className="playlist-movie-details">
                                <h3>{movie.original_title}</h3>
                                <p>{movie.overview}</p>
                                <button onClick={() => removeFromPlaylist(movie.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Playlist;
