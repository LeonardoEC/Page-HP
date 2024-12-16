import HarryPotterAPI from './data.js';

class Gryffindor {

    static houseData = 
    { 
        house: "Gryffindor",
        frace: "Valor, coraje y caballerosidad te esperan aquí.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Blason_Gryffondor.svg",
        founder: "Godric Gryffindor",
        banner: "https://erikstore.com/blog/wp-content/uploads/2024/03/BannerBlog_Gryffindor-980x592.webp" ,
        mascot: "León", 
        headOfHouse: "Minerva McGonagall", 
        ghost: "Sir Nicholas de Mimsy-Porpington (Nearly Headless Nick)", 
        traits: ["Valentía", "Coraje", "Caballerosidad"], 
        notableAlumni: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"], 
        commonRoomLocation: "Torre de Gryffindor", 
        element: "Fuego" 
    }

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
