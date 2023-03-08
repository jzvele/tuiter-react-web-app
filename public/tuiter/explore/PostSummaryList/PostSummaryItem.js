const PostSummaryItem = (post) => {

    return(`
        <div class=row>
            
            <div class="col" id="topic-username-title">
                <div class="topic">${post.topic}</div>
                
                <div class="row" id="username-circle-timestamp">
                        <div class="col-auto pl-2">${post.userName} <i class="fa-solid fa-square-check"></i></div> 
                    <div class="col-auto" id="timestamp">${post.time}</div>
                </div>
                
                <div class="topic-title">${post.title}</div>
            </div>
            <div class="col-1 p-3" id="image-column">
                <img src="${post.image}" class="topic-image" width="50px" height="50px">
            </div>
        </div>
    `);

}

export default PostSummaryItem;