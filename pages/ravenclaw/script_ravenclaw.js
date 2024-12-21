import Ravenclaw from "../../db/ravenclaw.js";
import Header from "../../shaders/header/Header.js";
import Render from "../../script/render.js";
import Historia from "../../components/Historia.js";

async function ravenclawHouseRender() 
{
    Render.renderElementById("header", Header.renderHeader(Ravenclaw.houseData))
    Render.renderElementById("history", Historia.renderFundador(Ravenclaw.houseData))
}

ravenclawHouseRender();
