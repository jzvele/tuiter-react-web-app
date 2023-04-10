import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import WhoToFollowList from "../who-to-follow-list";
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/tuits-list";

function HomeComponent() {

    return (
            <div className="row mt-2">
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <WhatsHappening/>
                    <TuitsList/>
                </div>
                <div className="col">
                    <WhoToFollowList/>
                </div>
            </div>
    );
}

export default HomeComponent;