import TopBar from "./components/topBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {StrictMode} from "react";
import Searchbar from "./components/searchbar";
import Dashboard from "./components/Dashboard";
import UserPage from "./components/UserPage";
import FilmPage from "./components/FilmPage";
import Login from "./components/Login";
import Register from "./components/Register";
import AddMovie from "./components/AddMovie";

function App() {
    return (
        <StrictMode>
            <TopBar/>
            <Routes>
                <Route path="/"         element=    {<Dashboard/>}>     </Route>
                <Route path="/user"     element=    {<UserPage/>}>      </Route>
                <Route path="/movie"    element=    {<FilmPage/>}>      </Route>
                <Route path="/add"      element=    {<AddMovie/>}>      </Route>
                <Route path="/signIn"   element=    {<Login/>}>      </Route>
                <Route path="/SignUp"   element=    {<Register/>}>      </Route>

            </Routes>
        </StrictMode>

    );
}

export default App;
