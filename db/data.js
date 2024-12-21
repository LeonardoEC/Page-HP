class HarryPotterAPI {
    static cachedData = null;

    static async fetchData() {
        if (HarryPotterAPI.cachedData === null) {
            const response = await fetch("https://hp-api.herokuapp.com/api/characters");
            HarryPotterAPI.cachedData = await response.json();
        }
        return HarryPotterAPI.cachedData;
    }

    static async getCharacters(house)
    {
        const data = await HarryPotterAPI.fetchData();
        return HarryPotterAPI.cachedCharacters = data.filter(character => character.house === house)
    }

    static async getMaleCharacters(house) {
        const characters = await HarryPotterAPI.getCharacters(house);
        return characters.filter(character => character.gender === 'male');
    }

    static async getFemaleCharacters(house) {
        const characters = await HarryPotterAPI.getCharacters(house);
        return characters.filter(character => character.gender === 'female');
    }

}

export default HarryPotterAPI;