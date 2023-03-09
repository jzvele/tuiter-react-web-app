
const WhoToFollowListItem = (user) => {
    return (`
        <div class="row">
            <div class="col-lg-1">
                <!-- I don't know why the images aren't circles --->
                <img src=${user.avatarIcon} alt="User profile" class="user_image" width="50" height="50">
            </div>
            <div class="col">
<!--          Couldn't figure out how to add a space before the verified mark. Padding/margin classes don't work.-->
                 <div class="row"><div class="col-2"><div class="username">${user.userName}</div><div class="ml-3"><i class="fa-solid fa-circle"></i></div></div>
                 <div class="col"><a href="follow.html" class="btn btn-primary btn-block rounded-pill"> Follow</a></div></div>
                 <div class="mt-2 username">@${user.handle}</div>
            </div>  
        </div>
    `);
}
export default WhoToFollowListItem;