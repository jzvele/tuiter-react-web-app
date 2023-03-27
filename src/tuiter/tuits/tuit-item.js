import React from "react";
import TuitStats from "./tuit-stats"

const TuitItem = (
    {
        post = {
            "userName": "SpaceX",
            "handle" : "@spacex",
            "time": "2h",
            "tuit" : "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
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
            <TuitStats/>
        </li>
    );
};
export default TuitItem;