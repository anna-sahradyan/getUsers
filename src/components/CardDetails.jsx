import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserById} from "../actions/users";
import {useParams} from "react-router-dom";
import Loading from "./Loading";
import {Container, Content, ContentCard, Img,} from "../styledContainer/homeStyle";


const CardDetails = () => {
    const dispatch = useDispatch();
    const {userId} = useParams();
    const isFetching = useSelector((state) => state.users.isFetching);
    const user = useSelector((state) => state.users.user);

    useEffect(() => {
        dispatch(getUserById(userId));
    }, [dispatch, userId]);

    if (isFetching) {
        return <Loading/>;
    }

    if (!user) {
        return <div>User not found.</div>;
    }

    return (
        <>
            <Container>
                <Content>
                    <ContentCard>
                        <Img src={user.avatar_url} alt={user.name}></Img>
                        <p>{user.name}</p>
                        <p>Followers: {user.followers}</p>
                        <p>{user.login}</p>
                        <p>{user.location
                        }</p>
                        <p>Public Repos:{user.public_repos
                        }</p>
                        <p>{user.type}</p>
                    </ContentCard>
                </Content>
            </Container>
        </>
    );
};

export default CardDetails;
