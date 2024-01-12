import TopBar from "./components/topBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
<div style={{marginTop:"6vh",width:"100%",height:"100%", minHeight:"94vh", backgroundColor:"#022436"}}>
            <Routes >

                <Route path="/" element={<Dashboard />} />
                <Route path="/user/:token"     element=    {<UserPage/>}>      </Route>
                <Route path="/movie/:id"    element=    {<FilmPage/>}>      </Route>
                <Route path="/add"      element=    {<AddMovie/>}>      </Route>
                <Route path="/signIn"   element=    {<Login/>}>      </Route>
                <Route path="/SignUp"   element=    {<Register/>}>      </Route>

            </Routes>
</div>
        </StrictMode>

    );
}

export default App;
