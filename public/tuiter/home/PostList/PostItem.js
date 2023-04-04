
const PostItem = (
    {
        post = {
            "avatarIcon": "",
            "userName": "SpaceX",
            "time": "2h",
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
                        <img alt="user image" className="rounded-circle" height={48} src={`/images/${post.avatarIcon}`}/>
                        <span className="me-1">
                        <strong>
                        {post.userName}
                        </strong>
                        </span>
                        <i className="fa-solid fa-circle-check"/>
                        <span className="me-1 ms-1">
                            {post.handle}
                        </span>
                        •
                        <span>
                        {post.time}
                        </span>
                    </div>
                    <div>{post.tuit}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
            <div>
                <div className="row">

                    <div className="col" id="replies-col">
                        <i className="fa-solid fa-comment"/> {post.replies}
                    </div>

                    <div className="col" id="retuits-col">
                        <i className="fa-solid fa-retweet"/> {post.retuits}
                    </div>

                    <div className="col" id="likes-col">
                        <i className="fa-solid fa-heart"/> {post.likes}
                    </div>

                    <div className="col" id="share-col">
                        <i className="fa-solid fa-share-nodes"/>
                    </div>

                </div>
            </div>
        </li>
    );
};

export default PostItem;