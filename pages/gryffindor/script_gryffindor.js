import Gryffindor from "../../db/gryffindor.js"
import Render from "../../script/render.js"; 
import Header from "../../shaders/header/Header.js";

async function gryffindorHouseRender() 
{
    Render.renderElementById("header", Header.renderHeader(Gryffindor.houseData))
    Render.renderElementById("main", "HOla mundo")
}

gryffindorHouseRender();