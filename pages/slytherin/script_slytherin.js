import Slytherin from "../../db/slytherin.js";
import Header from "../../shaders/header/Header.js";
import Render from "../../script/render.js";
import Historia from "../../components/Historia.js";

async function ravenclawHouseRender() 
{
    Render.renderElementById("header", Header.renderHeader(Slytherin.houseData))
    Render.renderElementById("history", Historia.renderFundador(Slytherin.houseData))
}

ravenclawHouseRender();
