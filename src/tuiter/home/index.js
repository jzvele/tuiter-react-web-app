import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

function HomeComponent() {
    return (
            <div>
                    <WhatsHappening/>
                    <TuitsList/>
            </div>
    );
}

export default HomeComponent;