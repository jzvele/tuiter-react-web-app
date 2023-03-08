import WhoToFollowListItem from "./WhoToFollowListItem.js";
import users from "./users.js"

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            ${
        users.map(user => {
            return (WhoToFollowListItem(user));
        })
    }
        </ul>
    `);
}

export default WhoToFollowList;