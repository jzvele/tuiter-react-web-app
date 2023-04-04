import PostSummaryList from "../explore/PostSummaryList/index.js"
import NavigationSidebar from "../explore/NavigationSidebar";
import PostList from "PostList/index"

const HomeComponent= () => {
    return(`
    <div class="container">
           <div class="row">
               <div class="col-3">
                   ${NavigationSidebar()}
               </div>
               <div class="col-6">
                    ${PostList()}
               </div>
               <div class="col-3">
                    ${PostSummaryList()}
               </div>
           </div>
    </div>
    `);
}

export default HomeComponent;