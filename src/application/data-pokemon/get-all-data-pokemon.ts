import { DataPokemonError } from "@/domain/error/data-pokemon-error";
import { DataPokemon } from "@/domain/interface/data-pokemon";
import { Pokemon } from "@/domain/modules/pokemon";

export class GetAllDataPokemon {
  constructor(private readonly dataPokemon: DataPokemon) {}

  async run(): Promise<Pokemon[]> {
    const pokemonList = await this.dataPokemon.getAll();
    if (pokemonList) return pokemonList;
    throw new DataPokemonError("No se pudieron recoger los datos");
  }
}
