import React from 'react';
import {HeaderContainer} from "../styledContainer/headerStyle";
import {Typography} from "@mui/material";

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Typography variant={"h4"} style={{
                    margin: "auto",
                    color: "#9B9B9B"
                }}> GitHub Users
                </Typography>
            </HeaderContainer>

        </>
    );
};

export default Header;
