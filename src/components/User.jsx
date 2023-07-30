import React from 'react';
import { useNavigate} from "react-router-dom";
import {FcApproval} from "react-icons/fc";


const User = ({user}) => {
    const navigate = useNavigate();

    const handleUserClick = () => {
       navigate (`/user/${user.login}`);
    };

    return (
        <>

            <div className={"item"} onClick={handleUserClick}>
                <div>
                    <div className="image"><img src={user.avatar_url} className="rounded" width="155" alt={user.name}/></div>
                    <div className="">
                        <h4 className="">{user.login} <FcApproval/></h4>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column">
                                <span className="articles"></span> {user.type}</div>
                            <div className="d-flex flex-column">
                                <span className="followers">Followers</span> <span className="number2">980</span></div>
                            <div className="d-flex flex-column">
                                <span className="rating">Rating</span> <span className="number3">8.9</span></div>

                        </div>

                    </div>
                </div>

            </div>

        </>
    );
};

export default User;
