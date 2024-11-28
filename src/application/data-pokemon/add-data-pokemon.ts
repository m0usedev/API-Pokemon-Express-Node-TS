import { DataPokemon } from "@/domain/interface/data-pokemon";
import { DataPokemonError } from "@/domain/error/data-pokemon-error";
import { Pokemon } from "@/domain/modules/pokemon";

export class AddDataPokemon {
  constructor(private readonly dataPokemon: DataPokemon) {}

  async run(pokemon: Pokemon): Promise<boolean> {
    const addResult = await this.dataPokemon.add(pokemon);
    if (addResult) return addResult;
    throw new DataPokemonError("No se puedo añadir el pokemon");
  }
}
