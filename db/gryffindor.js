import HarryPotterAPI from './data.js';

class Gryffindor {

    static houseData =
        {
            house: "Gryffindor",
            frace: "Valor, coraje y caballerosidad te esperan aquí.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Blason_Gryffondor.svg",
            founder: {
                name: "Godric Gryffindor",
                photo: "https://images3.alphacoders.com/130/thumb-1920-1302533.jpg",
                habilidades: "Maestro espadachín y mago poderoso.",
                history: "Godric Gryffindor valoraba la valentía, el coraje y la osadía, y seleccionaba a los estudiantes que demostraban estas cualidades para su casa. Gryffindor se distinguía por ser un mago poderoso y valiente, conocido por su destreza con la espada y su defensa de la igualdad entre los magos y los no mágicos.",
            },
            history: "La Casa Gryffindor rápidamente ganó la reputación de ser el hogar de algunos de los magos y brujas más valientes. Sus miembros destacan por su disposición a enfrentar el peligro y por su lealtad. A lo largo de los años, muchos de sus miembros han jugado papeles cruciales en la defensa de la justicia en el mundo mágico.",
            banner: "https://erikstore.com/blog/wp-content/uploads/2024/03/BannerBlog_Gryffindor-980x592.webp",
            mascot: "León",
            headOfHouse: "Minerva McGonagall",
            ghost: "Sir Nicholas de Mimsy-Porpington (Nearly Headless Nick)",
            traits: ["Valentía", "Coraje", "Caballerosidad"],
            notableAlumni: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"],
            commonRoomLocation: "Torre de Gryffindor",
            element: "Fuego",
            students: {}
        }

    static async initializeStudents() {
        const houseName = Gryffindor.houseData.house;
        Gryffindor.houseData.students = {
            allStudents: await HarryPotterAPI.getCharacters(houseName),
            maleStudents: await HarryPotterAPI.getMaleCharacters(houseName),
            femaleStudents: await HarryPotterAPI.getFemaleCharacters(houseName)
        };
    }

    
}

Gryffindor.initializeStudents();
export default Gryffindor;
