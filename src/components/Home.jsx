import React from 'react';
import {Container} from "../styledContainer/homeStyle";
import UsersList from "../containers/UsersList";


const Home = () => {
    return (
        <>
            <Container>
                <UsersList/>

            </Container>
        </>
    );
};

export default Home;
