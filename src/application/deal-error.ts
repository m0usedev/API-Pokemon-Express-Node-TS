import { DataPokemonError } from "@/domain/error/data-pokemon-error";
import { FileError } from "@/domain/error/file-error";
import { InvalidPokemon } from "@/domain/error/invalid-pokemon";

export class DealError {
  run(error: Error): number {
    if (error instanceof DataPokemonError || error instanceof InvalidPokemon)
      return 404;
    if (error instanceof FileError) return 500;
    return 500;
  }
}
