import "./NavBar.css";
function NavBar() {
    return (
        <nav className="navbar">
         <div className="logo">
           <span role="img" aria-label="pokeball">
           ◓⃙
           </span>
           <h1>Pokédex Hub</h1>
        </div>
        <ul className="nav-links">
         <li><a href="#home">Home</a></li>
         <li><a href="#collection">Collection</a></li>
         <li><a href="#add">Add Pokémon</a></li>
         <li><a href="#about">About</a></li>
        </ul>
        <button className="theme-btn">Toggle Theme</button>
        </nav>
    );
}

export default NavBar;