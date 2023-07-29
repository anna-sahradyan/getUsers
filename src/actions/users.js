import {setUsers, setIsFetching, setFetchError,setUser} from "../redux/userReducer";
import axios from "axios";
//followers:>1
export const getUsers = (searchQuery = 'login', currentPage, perPage) => {
    if (searchQuery == '') {
        searchQuery = 'login';
    }
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await axios.get(`
https://api.github.com/search/users?q=${searchQuery}&sort=followers&per_page=${perPage}&page=${currentPage}
`)
            dispatch(setUsers(response.data));
        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false));
            setTimeout(() => {
                dispatch(setFetchError(false))
            }, 2000)
        }


    }
}
//? Get user by id

export const getUserById = (userId) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await axios.get(`https://api.github.com/users/${userId}`);
            dispatch(setUser(response.data));
            console.log(response.data)

        } catch (e) {
        } finally {
            dispatch(setIsFetching(false));
        }
    }
}
