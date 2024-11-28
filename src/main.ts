import express from "express";
import { pokemonRouter } from "@/infrastructure/pokemon-router";

const APP = express();
/**
 * Desabiitar en las respuestas el campo x-powered-by, que dice con que tecnologia funcionamos, en este cas Express.
 * Esto debido a que el que una persona externa conozca tu tecnologia y o su version puede dar a fallas de seguridad.
 */
APP.disable("x-powered-by");
const PORT = process.env.POST ?? 1234;

APP.use(express.json());
APP.use("/pokemon", pokemonRouter);

APP.use((_req, res) => {
  res.status(404).send("error, no existe la url");
});

APP.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});
