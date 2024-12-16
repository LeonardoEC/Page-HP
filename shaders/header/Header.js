import NavBar from "../navBar/NavBar.js";

class Header {
    static renderHeader(h) {
    
        return `
            <div class="container-nav">
                ${NavBar.renderNavBar(h)}
                <div class="hero-content">
                    <h1>Bienvenido a la Casa ${h.house}</h1>
                    <p>${h.frace}</p>
                </div>
            </div>
        `;

        
    }
}

export default Header;
