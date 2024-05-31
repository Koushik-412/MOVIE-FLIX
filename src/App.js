import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import Movielist from "./components/movielist/Movielist";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Movie from "./pages/movieDetail/Movie";
import Registration from "./pages/registration/Registeration";
import Protect from "./components/protect/Protect";
import Search from "./pages/demopage/Search";
import Playlist from "./pages/playlist/Playlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Protect Component={Movie} />} />
          <Route path="movies/:type" element={<Protect Component={Movielist} />} />
          <Route path="/*" element={<h1>404 error page</h1>} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/playlist" component={Playlist} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}
export default App;
