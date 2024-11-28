export class InvalidPokemon extends Error {
  constructor(readonly message: string) {
    super(message);
    Object.setPrototypeOf(this, InvalidPokemon.prototype);
    this.name = "InvalidPokemonError";
  }
}
