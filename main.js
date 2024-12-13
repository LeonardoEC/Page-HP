import Gryffindor from "./db/gryffindor.js";

async function displayGryffindorCharacters() {
    try {
        const allCharacters = await Gryffindor.getCharacters();
        console.log('Todos los personajes de Gryffindor:', allCharacters);

        const maleCharacters = await Gryffindor.getMaleCharacters();
        console.log('Personajes masculinos de Gryffindor:', maleCharacters);

        const femaleCharacters = await Gryffindor.getFemaleCharacters();
        console.log('Personajes femeninos de Gryffindor:', femaleCharacters);
    } catch (error) {
        console.error(error);
    }
}

displayGryffindorCharacters();