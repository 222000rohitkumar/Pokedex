import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">

                <span className="hero-badge">
                    ⚡ Welcome Trainer!
                </span>
                <h1>
                    Catch,Explore and Create
                    <br/>
                    Your Own Pokémon Collection
                </h1>
                <p>
                     Discover powerful Pokémon, explore their stats,
                     compare abilities, and even create your own custom
                     Pokémon cards with an interactive Pokédex built
                     using React. 
                </p>
                <div className="hero-buttons">
                    <button className="explore-button">
                        Explore Pokémon
                    </button>
                    <button className="create-button">
                        Create Pokémon
                    </button>
                </div>
            </div>
             <div className="hero-image">

        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
          alt="Pikachu"
        />

      </div>
        </section>
    );
}

export default Hero;