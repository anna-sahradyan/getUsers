import React  from 'react';
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../redux/userReducer";
import {getUsers} from "../actions/users";
import {Box, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';




const Search = ({setInputValue, inputValue}) => {
    const dispatch = useDispatch();
    const handlerSearch = () => {
        setInputValue('');
        if (inputValue) {
            dispatch(setCurrentPage(1));
            dispatch(getUsers(inputValue))
        }
        setInputValue('');

    }

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
