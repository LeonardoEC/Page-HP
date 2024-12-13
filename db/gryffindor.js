import HarryPotterAPI from '../db/data.js';

class Gryffindor {
    static cachedCharacters = null;

    static async getCharacters() {
        if (Gryffindor.cachedCharacters === null) {
            const data = await HarryPotterAPI.fetchData();
            Gryffindor.cachedCharacters = data.filter(character => character.house === "Gryffindor");
        }
        return Gryffindor.cachedCharacters;
    }

    static async getMaleCharacters() {
        const characters = await Gryffindor.getCharacters();
        return characters.filter(character => character.gender === 'male');
    }

    static async getFemaleCharacters() {
        const characters = await Gryffindor.getCharacters();
        return characters.filter(character => character.gender === 'female');
    }
}

export default Gryffindor;
