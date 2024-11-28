import { DataPokemon } from "@/domain/interface/data-pokemon";
import { DataPokemonError } from "@/domain/error/data-pokemon-error";
import { Pokemon } from "@/domain/modules/pokemon";

export class ModifyDataPokemon {
  constructor(private readonly dataPokemon: DataPokemon) {}

  async run(
    pokemonID: number,
    newProperties: Pokemon,
  ): Promise<Pokemon | null> {
    const getResult = await this.dataPokemon.modify(pokemonID, newProperties);
    if (getResult) return getResult;
    throw new DataPokemonError(`No se puedo ecnontrar el pokemon ${pokemonID}`);
  }
}
