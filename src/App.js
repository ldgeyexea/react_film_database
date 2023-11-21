import TopBar from "./components/topBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {StrictMode} from "react";
import Searchbar from "./components/searchbar";
import Dashboard from "./components/Dashboard";
import UserPage from "./components/UserPage";
import FilmPage from "./components/FilmPage";

function App() {
    return (
        <StrictMode>
            <TopBar/>
            <Routes>
                <Route path="/"         element=    {<Dashboard/>}>     </Route>
                <Route path="/user"     element=    {<UserPage/>}>      </Route>
                <Route path="/movie"    element=    {<FilmPage/>}>      </Route>
            </Routes>
        </StrictMode>

    );
}

export default App;
