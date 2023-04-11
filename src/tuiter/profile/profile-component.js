import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../tuits/tuits-reducer";

const ProfileComponent = () => {

    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <img src="https://pbs.twimg.com/profile_images/1327760576960595968/0aC5J5f5_400x400.jpg" alt="Profile picture" className="img-fluid rounded-circle" />
                </div>
                <div className="col-9">
                    <h1>John Doe</h1>
                    <p className="text-muted">@johndoe</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <div className="d-flex">
                        <div className="pr-5">
                            <h5>Following</h5>
                            <p>125</p>
                        </div>
                        <div className="pr-5">
                            <h5>Followers</h5>
                            <p>550</p>
                        </div>
                        <div className="pr-5">
                            <h5>Likes</h5>
                            <p>3,280</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="col">
                    <h2>Tweets</h2>
                    <ul className="list-unstyled">
                        <li>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <small className="text-muted">Jan 1, 2023</small>
                        </li>
                        <li>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <small className="text-muted">Dec 31, 2022</small>
                        </li>
                        <li>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <small className="text-muted">Dec 30, 2022</small>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default ProfileComponent;
