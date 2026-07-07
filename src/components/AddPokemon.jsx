import { useState } from "react";
import "./AddPokemon.css";

function AddPokemon({ onAddPokemon }) {
  const [pokemon, setPokemon] = useState({
    name: "",
    type: "",
    hp: "",
    attack: "",
    defense: "",
    specialAttack: "",
    speed: "",
    ability: "",
    weakness: "",
    strongAgainst: "",
    evolution: "",
    level: "",
    region: "",
    height: "",
    weight: "",
    rarity: "Common",
    image: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPokemon((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
  event.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    alert("✅ Pokémon Added Successfully!");

    console.log(data);

    // Refresh the Pokémon list from MongoDB
    if (onAddPokemon) {
      onAddPokemon();
    }

    // Reset the form
    setPokemon({
      name: "",
      type: "",
      hp: "",
      attack: "",
      defense: "",
      specialAttack: "",
      speed: "",
      ability: "",
      weakness: "",
      strongAgainst: "",
      evolution: "",
      level: "",
      region: "",
      height: "",
      weight: "",
      rarity: "Common",
      image: "",
    });

  } catch (error) {
    console.error(error);
    alert("❌ Failed to add Pokémon");
  }
}

  return (
    <section className="add-pokemon">
      <h2>Create Your Pokémon</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Pokémon Name"
          value={pokemon.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="type"
          placeholder="Type (Water / Flying)"
          value={pokemon.type}
          onChange={handleChange}
          required
        /> 

        <input
          type="number"
          name="hp"
          placeholder="HP"
          value={pokemon.hp}
          onChange={handleChange}
        />

        <input
          type="number"
          name="attack"
          placeholder="Attack"
          value={pokemon.attack}
          onChange={handleChange}
        />

        <input
          type="number"
          name="defense"
          placeholder="Defense"
          value={pokemon.defense}
          onChange={handleChange}
        />

        <input
          type="number"
          name="specialAttack"
          placeholder="Special Attack"
          value={pokemon.specialAttack}
          onChange={handleChange}
        />

        <input
          type="number"
          name="speed"
          placeholder="Speed"
          value={pokemon.speed}
          onChange={handleChange}
        />

        <input
          type="text"
          name="ability"
          placeholder="Ability"
          value={pokemon.ability}
          onChange={handleChange}
        />

        <input
          type="text"
          name="weakness"
          placeholder="Weakness"
          value={pokemon.weakness}
          onChange={handleChange}
        />

        <input
          type="text"
          name="strongAgainst"
          placeholder="Strong Against"
          value={pokemon.strongAgainst}
          onChange={handleChange}
        />

        <input
          type="text"
          name="evolution"
          placeholder="Evolution Stage"
          value={pokemon.evolution}
          onChange={handleChange}
        />

        <input
          type="number"
          name="level"
          placeholder="Level"
          value={pokemon.level}
          onChange={handleChange}
        />

        <input
          type="text"
          name="region"
          placeholder="Region"
          value={pokemon.region}
          onChange={handleChange}
        />

        <input
          type="text"
          name="height"
          placeholder="Height (6.5 m)"
          value={pokemon.height}
          onChange={handleChange}
        />

        <input
          type="text"
          name="weight"
          placeholder="Weight (235 kg)"
          value={pokemon.weight}
          onChange={handleChange}
        />

        <select
          name="rarity"
          value={pokemon.rarity}
          onChange={handleChange}
        >
          <option value="Common">Common</option>
          <option value="Rare">Rare</option>
          <option value="Epic">Epic</option>
          <option value="Legendary">Legendary</option>
        </select>

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={pokemon.image}
          onChange={handleChange}
        />

        <button type="submit">
          Add Pokémon
        </button>
      </form>
    </section>
  );
}

export default AddPokemon;