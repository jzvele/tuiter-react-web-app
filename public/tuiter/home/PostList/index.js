import PostItem from "./PostItem";
import posts from "./posts.js"

const PostList = () => {
    return(`
        <div class="container">
            <ul class="list-group">
                ${posts.map(post =>
    {return (PostItem(post));})
    }
            </ul>
        </div>
    `);
}

export default PostList;
