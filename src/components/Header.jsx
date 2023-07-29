import React from 'react';
import {HeaderContainer} from "../styledContainer/headerStyle";
import {Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <HeaderContainer>
             <Typography variant={"h4"} style={{
                   margin: "auto",
                   color: "#9B9B9B"
               }}>  <NavLink to={"/"}> GitHub Users
             </NavLink></Typography>
            </HeaderContainer>

        </>
    );
};

export default Header;
