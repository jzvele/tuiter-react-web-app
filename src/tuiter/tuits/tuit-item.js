import React from "react";
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
                    <div>{post.userName} {post.handle} . {post.time}</div>
                    <div>{post.tuit}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;