import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {like, unlike} from "./tuit-stats-reducer";
import {deleteTodo} from "../../labs/a7/redux-examples/reducers/todos-reducer";


const TuitStats = (
    {
        stats = {
            "replies": "123",
            "retuits" : "432",
            "likes": "2345",
        }
    }
) => {
    const likes = useSelector(state => state.likes);
    const [likesNum, setLikesNum] = useState({"likes": 2345});
    const dispatch = useDispatch();
    const likeTuitHandler = () => {
        dispatch(like());
    }
    const unlikeTuitHandler = () => {
        dispatch(unlike());
    }
    return(

        <div className="row">

            <div className="col" id="replies-col">
                <i className="fa-solid fa-comment"/> {stats.replies}
            </div>

            <div className="col" id="retuits-col">
                <i className="fa-solid fa-retweet"/> {stats.retuits}
            </div>

            <div className="col" id="likes-col">
                <button onClick={likeTuitHandler}>
                    <i className="fa-solid fa-heart"/> {likes}
                </button>
            </div>

            <div className="col" id="share-col">
                <i className="fa-solid fa-share-nodes"/>
            </div>

        </div>
        );
};

export default TuitStats;


