import express from "express";
import { pokemonControler } from "@/infrastructure/dependencies";

const pokemonRouter = express.Router();

pokemonRouter.get("/", pokemonControler.getAll.bind(pokemonControler));
pokemonRouter.get("/:id", pokemonControler.getOne.bind(pokemonControler));
pokemonRouter.post("/add", pokemonControler.postPokemon.bind(pokemonControler));
pokemonRouter.delete(
  "/delete/:id",
  pokemonControler.deletePokemon.bind(pokemonControler),
);
pokemonRouter.put(
  "/modify/:id",
  pokemonControler.putPokemon.bind(pokemonControler),
);

export { pokemonRouter };
