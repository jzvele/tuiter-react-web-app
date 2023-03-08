import posts from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js"

const PostSummaryList = () => {
    return(`
        <div class="container">
            <ul class="list-group">
                ${posts.map(post => 
                    {return (PostSummaryItem(post));})
                }
            </ul>
        </div>
    `);
}

export default PostSummaryList;