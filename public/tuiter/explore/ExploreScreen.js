import PostSummaryList from "./PostSummaryList/index.js"

const ExploreComponent= () => {
    return(`
    <div class="container">
    <div class="row mb-3">
        <div class="col">
              <form class="d-flex">
                 <input type="search" id="search-bar" placeholder="Search Tuiter"/>
              </form>
              <div id="gear">
                   <a href="settings.html"><img src="gear.jpg" width="20px"></a>
              </div>
        </div>
    </div>
               <ul class="nav mb-2 nav-tabs">
                  <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#" aria-selected="true" role="tab">For You</a>
                  </li>
                  <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#profile" aria-selected="false" tabindex="-1" role="tab">Trending</a>
                   </li>
               </ul>
               <div class="row">
                <div class="col">
                <img src="spacexship.jpg" class="img-fluid">
                </div>
               </div>
               <div class="row">
                   <div class="col">
                        ${PostSummaryList()}
                   </div>
               </div>
    </div>
    `);
}

export default ExploreComponent;