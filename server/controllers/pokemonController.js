import Pokemon from "../models/Pokemon.js";

export const createPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.create(req.body);

    res.status(201).json({
      success: true,
      data: pokemon,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.find();

    res.status(200).json({
      success: true,
      data: pokemon,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};