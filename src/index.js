import React from "react";
import ReactDOM from "react-dom";
import APP  from "./app/app";
import iconpng from './asssets/messi-logo.png'
let icon = document.createElement("link");
icon.rel = "icon";
icon.type = "image/png";
icon.href = iconpng
document.head.appendChild(icon);
ReactDOM.render(<APP/>, document.getElementById("messi-page"))