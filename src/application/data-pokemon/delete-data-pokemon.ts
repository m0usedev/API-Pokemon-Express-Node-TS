import { DataPokemon } from "@/domain/interface/data-pokemon";
import { DataPokemonError } from "@/domain/error/data-pokemon-error";
import { Pokemon } from "@/domain/modules/pokemon";

export class DeleteDataPokemon {
  constructor(private readonly dataPokemon: DataPokemon) {}

  async run(pokemonID: number): Promise<Pokemon | null> {
    const addResult = await this.dataPokemon.delete(pokemonID);
    if (addResult) return addResult;
    throw new DataPokemonError(`No existe el pokemon: ${pokemonID}`);
  }
}
