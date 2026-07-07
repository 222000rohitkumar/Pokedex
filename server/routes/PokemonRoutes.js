import express from "express";
import {
  createPokemon,
  getAllPokemon,
} from "../controllers/pokemonController.js";

const router = express.Router();

router.get("/", getAllPokemon);

router.post("/", createPokemon);

export default router;