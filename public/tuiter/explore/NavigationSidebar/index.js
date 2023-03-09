const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/"> <!-- What does this do? -->
       <i class="fab fa-twitter text-white"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
     <a class="list-group-item" href="/home.html">Home
       <i class="fa-solid fa-house text-white"></i></a> 
     <a class="list-group-item active" href="/">Explore
       <i class="fab fa-hashtag text-white"></i></a>
     <a class="list-group-item" href="/">Notifications
       <i class="fa-solid fa-bell text-white"></i></a>
     <a class="list-group-item" href="/">Messages
       <i class="fa-solid fa-envelope text-white"></i></a>
     <a class="list-group-item" href="/">Bookmarks
       <i class="fa-solid fa-bookmark text-white"></i></a> 
     <a class="list-group-item" href="/">Lists
       <i class="fa-solid fa-list text-white"></i></a>
     <a class="list-group-item" href="/">Profile
       <i class="fa-solid fa-user text-white"></i></a>
     <a class="list-group-item" href="/">More
       <i class="fa-solid fa-circle text-white"></i></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;