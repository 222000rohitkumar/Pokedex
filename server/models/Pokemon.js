import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    hp: Number,
    attack: Number,
    defense: Number,
    specialAttack: Number,
    speed: Number,
    ability: String,
    weakness: String,
    strongAgainst: String,
    evolution: String,
    level: Number,
    region: String,
    height: String,
    weight: String,
    rarity: {
      type: String,
      default: "Common",
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

export default Pokemon;