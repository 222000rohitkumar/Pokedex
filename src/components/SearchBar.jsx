import "./SearchBar.css";

function SearchBar({searchTerm, onSearchChange}){
    return(
        <section className="search-section">
            <h2 className="search-title">
                🔍 Search Your Favourite Pokémon
            </h2>
            <p className="search-subtitle">
                Search by Pokémon name and instantly explore your collection.
            </p>

            <div className="search-box">
                <span className="search-icon">
                    🔍
                </span>
                <input
                    type="text"
                    placeholder="Search Pokémon..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
        </section>
    );
}

export default SearchBar;