import React from "react";
import TuitItem from "./tuit-item"
import tuitArray from "./tuits.json"

const TuitsList = () => {
    return(
        <ul className="list-group">
            {
                tuitArray.map(post =>
                    <TuitItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default TuitsList;