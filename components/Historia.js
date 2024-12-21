class Historia {
    static renderFundador(house) {
        return `
        <div class="cont-fundadores">
            <h2 class="title-fundador"> Historia </h2>
            <div class="cont-top-fundador">
                <div class="top-izq-fundador">
                    <div> 
                        <p>
                            ${house.history}
                        </p>
                    </div>
                    <div> 
                        <a href="">#Fanpage</a>
                        <a href="">#MagicWiky</a>
                    </div>
                </div>
                <div class="top-der-fundador">
                    <div>
                        <h3 class="f-name">
                            ${house.founder.name}
                        </h3>
                    </div>
                    <figure>
                        <img class="img-fundador" src="${house.founder.photo}" alt="">
                    </figure>
                    <div>
                        <p>
                            ${house.founder.habilidades}
                        </p>
                    </div>
                    <div>
                        <p>
                            ${house.founder.history}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

}

export default Historia;