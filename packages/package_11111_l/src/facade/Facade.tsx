import React from "react";

import "./Facade.less";

import Top from "../components/top"
import Main from "../components/main"
import Bottom from "../components/bottom"

export function PlayerFacade() {
    let token = window.location.pathname.split("/").pop();
    return (
        <div className="react_ts">
            <Top />
            <Main />
            <Bottom />
        </div>
    )
}