import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import UsersList from "./containers/UsersList";
import CardDetails from "./components/CardDetails";


const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/user"} element={<UsersList/>}/>
                <Route path={'/user/:userId'} element={<CardDetails/>}/>
                <Route path="*" element={<Navigate replace to="/"/>} />
            </Routes>
        </>
    );
};

export default App;
