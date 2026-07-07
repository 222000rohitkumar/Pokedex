import { useState, useEffect } from "react";

import cards from "./data/cards";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import CardGrid from "./components/CardGrid";
import AddPokemon from "./components/AddPokemon";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  // Fetch all pokemon from MongoDB
  async function fetchPokemon() {
    try {
      const response = await fetch("http://localhost:5000/api/pokemon");
      const data = await response.json();

      if (data.success) {
        // Merge local cards with database cards
        setPokemonList([...cards, ...data.data]);
      }
    } catch (error) {
      console.log(error);

      // If backend fails, show local cards
      setPokemonList(cards);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  function handleAddPokemon(newPokemon) {
    setPokemonList((prev) => [...prev, newPokemon]);
  }

  const filteredCards = pokemonList.filter((card) => {
  const matchesType =
    selectedType === "All" ||
    card.type
      .trim()
      .toLowerCase()
      .includes(selectedType.toLowerCase());

  const matchesSearch = card.name
    .trim()
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  return matchesType && matchesSearch;
});

  return (
    <>
      <NavBar />

      <Hero />

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <Filter
        selectedType={selectedType}
        onFilterChange={setSelectedType}
      />

      <section id="collection" className="collection-section">
        <h2 className="section-title">
          Pokémon Collection
        </h2>

        <p className="collection-count">
          Showing {filteredCards.length} Pokémon
        </p>

        {filteredCards.length > 0 ? (
          <CardGrid cards={filteredCards} />
        ) : (
          <div className="no-results">
            <h2>No Pokémon Found 😢</h2>
            <p>Try changing the search keyword or filter.</p>
          </div>
        )}
      </section>

      <section id="add">
        <AddPokemon
          onAddPokemon={handleAddPokemon}
        />
      </section>

      <Footer />
    </>
  );
}

export default App;