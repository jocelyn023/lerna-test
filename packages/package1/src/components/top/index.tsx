import React from "react";

import "./index.less";


export default function App() {
    let token = window.location.pathname.split("/").pop();
    return (
        <div className="top">react+ts</div>
    )
}