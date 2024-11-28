import { DataPokemon } from "@/domain/interface/data-pokemon";
import { Pokemon } from "@/domain/modules/pokemon";
import { InvalidPokemon } from "@/domain/error/invalid-pokemon";
import { DataPokemonError } from "@/domain/error/data-pokemon-error";
import { WriteFile } from "@/infrastructure/write-file/write-file";
import { PATH_JSON_POKEMON } from "@/infrastructure/dependencies";

export class JsonDataPokemon implements DataPokemon {
  async add(pokemon: Pokemon): Promise<boolean> {
    let pokemonList = (await this.getAll()) ?? [];
    const findPokemon = pokemonList.find(
      (pok) => pok.number === pokemon.number,
    );
    if (findPokemon)
      throw new InvalidPokemon(
        JSON.stringify(
          {
            message: "El pokemon ya existe",
            pokemon: findPokemon,
          },
          null,
          2,
        ),
      );
    pokemonList.push(pokemon);
    return WriteFile.writeJson(PATH_JSON_POKEMON, pokemonList);
  }

  async getAll(): Promise<Pokemon[] | null> {
    const pokemonList = await WriteFile.readJson(PATH_JSON_POKEMON);
    if (!pokemonList) return null;
    return pokemonList.map((element: Pokemon) => {
      const pokemon = new Pokemon(
        element.number,
        element.name,
        element.type,
        element.description,
      );
      pokemon.pokemonValidator();
      return pokemon;
    });
  }

  async getOne(pokemonID: number): Promise<Pokemon | null> {
    console.log(pokemonID);
    const pokemonList = await this.getAll();
    if (!pokemonList) return pokemonList;
    const pokemon = pokemonList.find((pokemon) => pokemon.number === pokemonID);
    if (pokemon) return pokemon;
    throw new InvalidPokemon("El number del pokemon no existe");
  }

  async delete(pokemonID: number): Promise<Pokemon | null> {
    const pokemonList = await this.getAll();
    if (!pokemonList)
      throw new DataPokemonError("No hay pokemons que eliminar");
    const pokemonDelete = pokemonList.find((pokemon, index) => {
      if (pokemon.number === pokemonID) {
        pokemonList.splice(index, 1);
        return true;
      }
      return false;
    });
    if (!pokemonDelete)
      throw new DataPokemonError(
        `No existe ningun pokemon con el number: ${pokemonID}`,
      );
    const responseWrite = await WriteFile.writeJson(
      PATH_JSON_POKEMON,
      pokemonList,
    );
    if (responseWrite) return pokemonDelete;
    return null;
  }
  async modify(
    pokemonID: number,
    newProperties: Pokemon,
  ): Promise<Pokemon | null> {
    const pokemonList = await this.getAll();
    if (!pokemonList)
      throw new DataPokemonError("No hay pokemons que modificar");
    const pokemonModify = pokemonList.find((pokemon, index) => {
      if (pokemon.number === pokemonID) {
        Object.keys(pokemon).forEach((key) => {
          if (newProperties[key as keyof typeof newProperties]) {
            (pokemon as any)[key] =
              newProperties[key as keyof typeof newProperties];
          } else {
            (pokemon as any)[key] = pokemon[key as keyof typeof pokemon];
          }
        });
        pokemonList[index] = pokemon;
        return true;
      }
      return false;
    });
    if (!pokemonModify)
      throw new DataPokemonError(
        `No existe ningun pokemon con el number: ${pokemonID}`,
      );

    const responseWrite = await WriteFile.writeJson(
      PATH_JSON_POKEMON,
      pokemonList,
    );
    if (responseWrite) return pokemonModify;
    return null;
  }
}
