class HarryPotterAPI {
    static cachedData = null;

    static async fetchData() {
        if (HarryPotterAPI.cachedData === null) {
            const response = await fetch("https://hp-api.herokuapp.com/api/characters");
            HarryPotterAPI.cachedData = await response.json();
        }
        return HarryPotterAPI.cachedData;
    }
}

export default HarryPotterAPI;