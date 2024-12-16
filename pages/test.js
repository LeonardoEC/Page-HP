import Header from "../shaders/header/Header.js";
import Gryffindor from "../db/gryffindor.js";

document.getElementById("header").innerHTML = Header.renderHeader(Gryffindor.houseData)