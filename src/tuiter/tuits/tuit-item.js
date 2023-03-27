import React from "react";
// import {configureStore} from "@reduxjs/toolkit";
// import {like, unlike} from "./tuit-stats-reducer";
import TuitStats from "./tuit-stats"
// import likesStore from "./likes-counter-store"
// import {Provider} from "react-redux";

// const store = configureStore({
//     reducer: {like, unlike}
// });

const TuitItem = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>
                        <span className="me-1">
                        <strong>
                        {post.userName}
                        </strong>
                        </span>
                        <i className="fa-solid fa-circle-check"/>
                        <span className="me-1 ms-1">
                            {post.handle}
                        </span>
                        • {post.time}
                    </div>
                    <div>{post.tuit}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
            <div>
                <TuitStats post={{post}} />
            </div>
        </li>
    );
};
export default TuitItem;