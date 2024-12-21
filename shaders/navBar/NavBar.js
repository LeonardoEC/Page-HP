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
                <li><a href="#history">Historia</a></li>
                <li><a href="#students">Estudiantes</a></li>
            </ul>
        </nav>
    `;
    }
}

export default NavBar;
