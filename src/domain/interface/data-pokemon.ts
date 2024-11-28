import { Pokemon } from "@/domain/modules/pokemon";

export interface DataPokemon {
  add(pokemon: Pokemon): Promise<boolean>;
  getOne(pokemonID: number): Promise<Pokemon | null>;
  getAll(): Promise<Pokemon[] | null>;
  delete(pokemonID: number): Promise<Pokemon | null>;
  modify(pokemonID: number, newProperties: Pokemon): Promise<Pokemon | null>;
}
