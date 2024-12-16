import Hufflepuff from "../../db/hufflepuff.js";
import Header from "../../shaders/header/Header.js";
import Render from "../../script/render.js";


async function hufflepuffHouseRender() 
{
    Render.renderElementById("header", Header.renderHeader(Hufflepuff.houseData))
}

hufflepuffHouseRender();