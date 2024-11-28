import { DataPokemon } from "@/domain/interface/data-pokemon";
import { DataPokemonError } from "@/domain/error/data-pokemon-error";
import { Pokemon } from "@/domain/modules/pokemon";

export class GetOnePokemonData {
  constructor(private readonly dataPokemon: DataPokemon) {}

  async run(pokemonID: number): Promise<Pokemon> {
    const getResult = await this.dataPokemon.getOne(pokemonID);
    if (getResult) return getResult;
    throw new DataPokemonError(`No se puedo ecnontrar el pokemon ${pokemonID}`);
  }
}
