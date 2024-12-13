import HarryPotterAPI from '../db/data.js';

async function getGryffindorCharacters() {
    const data = await HarryPotterAPI.fetchData();
    const gryffindor = data.filter(character => character.house === "Gryffindor");
    return gryffindor;
}

// Ejemplo de uso
getGryffindorCharacters()
    .then(data => console.log(data))
    .catch(error => console.error(error));
