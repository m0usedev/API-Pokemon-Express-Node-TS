import { InvalidPokemon } from "@/domain/error/invalid-pokemon";

export class Pokemon {
  constructor(
    readonly number: number,
    readonly name: string,
    readonly type: string[],
    readonly description: string,
  ) {}

  public pokemonValidator() {
    if (!this.number || !this.name || !this.type || !this.description) {
      throw new InvalidPokemon("Alguna de las propiedades no tiene valor");
    }
    if (
      typeof this.number !== "number" ||
      typeof this.name !== "string" ||
      !(
        Array.isArray(this.type) &&
        this.type.every((elemento) => typeof elemento === "string")
      ) ||
      typeof this.description !== "string"
    ) {
      throw new InvalidPokemon(
        "Alguno de los valores de las propiedades no es del tipo adecuado",
      );
    }
  }
}
