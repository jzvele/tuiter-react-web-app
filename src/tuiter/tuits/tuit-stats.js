import React, {useState} from "react";

const TuitStats = (
    {
        post =
        {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {

    const initialLikes = post.likes;
    const [likes, setLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(false);

    const likeTuit = () => {
        setLikes(likes + 1);
        setLiked(true);
    };
    const unlikeTuit = () => {
        setLikes(likes - 1);
        setLiked(false);
    };

    if(liked) {
        return(
            <div className="row">

                <div className="col" id="replies-col">
                    <i className="fa-solid fa-comment"/> {post.replies}
                </div>

                <div className="col" id="retuits-col">
                    <i className="fa-solid fa-retweet"/> {post.retuits}
                </div>

                <div className="col text-danger" id="likes-col">
                    <i  onClick={unlikeTuit} className="fa-solid fa-heart"/> {likes}
                </div>

                <div className="col" id="share-col">
                    <i className="fa-solid fa-share-nodes"/>
                </div>

            </div>
        );
    } else {
    return(

        <div className="row">

            <div className="col" id="replies-col">
                <i className="fa-solid fa-comment"/> {post.replies}
            </div>

            <div className="col" id="retuits-col">
                <i className="fa-solid fa-retweet"/> {post.retuits}
            </div>

            <div className="col" id="likes-col">
                    <i onClick={likeTuit} className="fa-solid fa-heart"/> {likes}
            </div>

            <div className="col" id="share-col">
                <i className="fa-solid fa-share-nodes"/>
            </div>

        </div>
        );
    }
};

export default TuitStats;


