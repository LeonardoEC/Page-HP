class NavBar {

    static renderNavBar(house) {
        return `
        <nav class="navbar">
            <div class="logo">
                <a href="../../index.html">
                    <img src="${house.logo}" alt="${house.house} Logo">
                </a>
            </div>
            <ul class="nav-links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Historia</a></li>
                <li><a href="#projects">Estudiantes</a></li>
                <li><a href="#contact">Asañas</a></li>
            </ul>
        </nav>
    `;
    }
}

export default NavBar;
