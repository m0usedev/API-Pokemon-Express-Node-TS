import express from "express";

import { Pokemon } from "@/domain/modules/pokemon";
import {
  getAllDataPokemon,
  addDataPokemon,
  getOneDataPokemon,
  dealError,
  deleteDataPokemon,
  modifyDataPokemon,
} from "@/infrastructure/dependencies";
import { DataPokemonError } from "@/domain/error/data-pokemon-error";

export class PokemonControler {
  async getOne(req: express.Request, res: express.Response): Promise<void> {
    const pokemonId = parseInt(req.params.id);
    if (!pokemonId) res.status(404).send("La url no existe");
    getOneDataPokemon
      .run(pokemonId)
      .then((pokemon) => {
        res.status(200).json(pokemon).end();
      })
      .catch((error: Error) => {
        res.status(dealError.run(error)).end(error.message);
      });
  }

  async getAll(_req: express.Request, res: express.Response): Promise<void> {
    const pokemonList = await getAllDataPokemon.run();
    res.status(200).json(pokemonList).end();
  }

  async postPokemon(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    try {
      const pokemon = new Pokemon(
        req.body.number,
        req.body.name,
        req.body.type,
        req.body.description,
      );
      pokemon.pokemonValidator();
      addDataPokemon
        .run(pokemon)
        .then((saveResponse) => {
          if (saveResponse) res.status(200).json(pokemon).end();
        })
        .catch((error: Error) => {
          res.status(dealError.run(error)).end(error.message);
        });
    } catch (error) {
      if (error instanceof Error)
        res.status(dealError.run(error)).end(error.message);
    }
  }
  async deletePokemon(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    const pokemonId = parseInt(req.params.id);
    if (!pokemonId) res.status(404).send("La url no existe");
    deleteDataPokemon
      .run(pokemonId)
      .then((pokemon) => {
        if (pokemon) res.status(200).json(pokemon).end();
      })
      .catch((error: Error) => {
        res.status(dealError.run(error)).end(error.message);
      });
  }

  async putPokemon(req: express.Request, res: express.Response): Promise<void> {
    const pokemonId = parseInt(req.params.id);
    if (!pokemonId) res.status(404).send("La url no existe");
    try {
      const newProperties = await createPokemon(req.body);
      modifyDataPokemon
        .run(pokemonId, newProperties)
        .then((saveResponse) => {
          if (saveResponse) res.status(200).json(saveResponse).end();
        })
        .catch((error: Error) => {
          res.status(dealError.run(error)).end(error.message);
        });
    } catch (error) {
      if (error instanceof Error)
        res.status(dealError.run(error)).end(error.message);
    }
  }
}

async function createPokemon(properties: any): Promise<Pokemon> {
  if (
    !properties.number &&
    !properties.name &&
    !properties.type &&
    !properties.description
  )
    throw new DataPokemonError(
      `No has mandado ninguna propiedad pokemon. Lo que has mandado ${JSON.stringify(properties)}`,
    );
  if (properties.number && typeof properties.number !== "number")
    throw new DataPokemonError(
      `La propiedad "number" debe ser de tipo "number".`,
    );
  if (properties.name && typeof properties.name !== "string")
    throw new DataPokemonError(
      `La propiedad "name" debe ser de tipo "string".`,
    );
  if (
    properties.type &&
    !(
      Array.isArray(properties.type) &&
      properties.type.every((elemento: any) => typeof elemento === "string")
    )
  )
    throw new DataPokemonError(
      `La propiedad "type" debe ser de tipo "string[]".`,
    );
  if (properties.description && typeof properties.description !== "string")
    throw new DataPokemonError(
      `La propiedad "description" debe ser de tipo "string".`,
    );
  return new Pokemon(
    properties.number,
    properties.name,
    properties.type,
    properties.description,
  );
}
