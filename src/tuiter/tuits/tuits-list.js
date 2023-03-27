import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item"
import tuitArray from "./tuits.json"

const TuitsList = () => {
    // const tuitArray = useSelector(state => state.tuits)
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