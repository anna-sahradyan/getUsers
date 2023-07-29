import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions/users";
import {Container, ContainerHeader, Left, Right, UserContainer, UserContent} from "./userStyle";
import Search from "../components/Search";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {Alert, Stack} from "@mui/material";
import Loading from "../components/Loading";
import User from "../components/User";
import {setCurrentPage} from "../redux/userReducer";
import {createPages} from "../components/pageUtilis";

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.items);
    const isFetching = useSelector(state => state.users.isFetching);
    const isFetchError = useSelector(state => state.users.isFetchError);
    const currentPage = useSelector(state => state.users.currentPage);
    const perPage = useSelector(state => state.users.perPage);
    const totalCount = useSelector(state => state.users.totalCount);
    const pagesCount = Math.ceil(totalCount / perPage);
    const pages = [];
    createPages(pages, pagesCount, currentPage)
    const [inputValue, setInputValue] = useState('');
    const [sorted, setSorted] = useState({sorted: "id", reversed: false});
    const [sortUsers, setSortUsers] = useState([])
    const sortById = () => {
        const usersCopy = [...users];
        usersCopy.sort((userA, userB) => {
            if (sorted.reversed) {
                return userA.id - userB.id
            }
            return userB.id - userA.id
        });
        setSortUsers(usersCopy)
        setSorted({ sorted: "id", reversed: !sorted.reversed });
    }
    const usersToDisplay = sorted.reversed ? sortUsers : users;
console.log(sortUsers)
    useEffect(() => {
        dispatch(getUsers(inputValue, currentPage, perPage))

    }, [dispatch, currentPage]);

    return (
        <>

            <Container>
                <ContainerHeader>
                    <Right><Search inputValue={inputValue} setInputValue={setInputValue}
                                   currentPage={currentPage}/></Right>
                    <Left> <span onClick={sortById}>
               {sorted ? <KeyboardDoubleArrowUpIcon/> : <KeyboardDoubleArrowDownIcon/>}
                                    </span>
                    </Left>
                </ContainerHeader>
                <UserContainer>
                    {isFetchError &&
                        <Stack sx={{width: '100%'}} spacing={2}><Alert severity="error">Server Error!!!</Alert>
                        </Stack>}
                    <UserContent>
                        {isFetching === false ? (usersToDisplay?.map(user => <User key={user.id} user={user}/>)) : (
                            <div className='loading'><Loading/></div>)}
                    </UserContent>
                </UserContainer>

            </Container>
            <div className={'pagination'}>
                {pages.map((item, index) => <span key={`${item}_${index}`}
                                                  className={currentPage === item ? "current-page" : "page"}
                                                  onClick={() => dispatch(setCurrentPage(item))}>{item}</span>)}
            </div>
        </>
    );
};

export default UsersList;

