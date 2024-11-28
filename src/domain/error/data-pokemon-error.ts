export class DataPokemonError extends Error {
  constructor(readonly message: string) {
    super(message);
    Object.setPrototypeOf(this, DataPokemonError.prototype);
    this.name = "AddDataPokemonError";
  }
}
