import path from "node:path";

import { PokemonControler } from "@/infrastructure/controller/pokemon-controller";
import { JsonDataPokemon } from "@/infrastructure/database/json-data-pokemon";
import { AddDataPokemon } from "@/application/data-pokemon/add-data-pokemon";
import { GetAllDataPokemon } from "@/application/data-pokemon/get-all-data-pokemon";
import { GetOnePokemonData } from "@/application/data-pokemon/get-one-data-pokemon";
import { DealError } from "@/application/deal-error";
import { DeleteDataPokemon } from "@/application/data-pokemon/delete-data-pokemon";
import { ModifyDataPokemon } from "@/application/data-pokemon/modify-data-pokemon";

export const pokemonControler = new PokemonControler();
export const jsonDataPokemon = new JsonDataPokemon();
export const addDataPokemon = new AddDataPokemon(jsonDataPokemon);
export const getAllDataPokemon = new GetAllDataPokemon(jsonDataPokemon);
export const getOneDataPokemon = new GetOnePokemonData(jsonDataPokemon);
export const deleteDataPokemon = new DeleteDataPokemon(jsonDataPokemon);
export const modifyDataPokemon = new ModifyDataPokemon(jsonDataPokemon);
export const dealError = new DealError();
export const PATH_JSON_POKEMON = path.join(
  __dirname,
  "..",
  "..",
  "data",
  "pokemon.json",
);
