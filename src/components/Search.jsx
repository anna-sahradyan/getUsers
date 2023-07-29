import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../redux/userReducer";
import {getUsers} from "../actions/users";
import {Box, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';




const Search = ({setInputValue, inputValue}) => {
    const dispatch = useDispatch();
    const handlerSearch = () => {
        dispatch(setCurrentPage(1));
        if (inputValue) {
            dispatch(getUsers(inputValue));

        }
        setInputValue('');

    }
    useEffect(() => {
        dispatch(getUsers(inputValue))
    }, [dispatch]);
    return (
        <>
            <Box
                component="form"

                style={{width:"100%"}}>
                <TextField onChange={(e) => setInputValue(e.target.value)}
                           autoFocus
                           value={inputValue}
                           style={{ width: '100%'}}/>

                <SearchIcon style={{position:"absolute", marginLeft:"-30px",marginTop:15,cursor:"pointer"}} onClick={(e) => handlerSearch(e.preventDefault())}/>


            </Box>
        </>
    );
};

export default Search;
