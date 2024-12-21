import Gryffindor from "../../db/gryffindor.js"
import Render from "../../script/render.js"; 
import Header from "../../shaders/header/Header.js";
import Fundador from "../../components/Historia.js";
import Estudantes from "../../components/Estudantes.js";

async function gryffindorHouseRender() 
{
    Render.renderElementById("header", Header.renderHeader(Gryffindor.houseData))
    Render.renderElementById("history",Fundador.renderFundador(Gryffindor.houseData))
    Render.renderElementById("students",Estudantes.renderEstudantes(Gryffindor.houseData))
}

gryffindorHouseRender();