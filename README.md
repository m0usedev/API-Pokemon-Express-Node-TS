<h1 align="center" id="title">API-Pokemon-Express-Node-TS</h1>

Proyecto desarrollado en NodeJS para gestionar un json con pokemons y datos sobre estos.

## 📖 Comentarios del desarrollo:

Este proyecto fue una experiencia enriquecedora, no solo por continuar trabajando con Node.js, sino también por introducirme al uso de Express, que facilitó significativamente el desarrollo de la API. Además, utilicé TypeScript, basándome en una plantilla que desarrollé previamente y cuyo repositorio está disponible en Plantilla-Node-TypeScript. Asimismo, este proyecto marcó mi primer acercamiento práctico a la arquitectura hexagonal.

Lo más destacable para mí en este proyecto fue, en primer lugar, el uso de TypeScript como lenguaje. Esto reforzó mi convicción sobre su utilidad y el valor de contar con un sistema de tipado estático para variables, parámetros y funciones, lo que facilita y organiza el desarrollo de forma considerable. Por otro lado, la implementación de la arquitectura hexagonal fue un desafío interesante. Aunque comprendo su propósito de separar la lógica de aplicación de la lógica de negocio, todavía encuentro algunos aspectos de su implementación algo complejos.

Espero seguir trabajando en más proyectos que utilicen esta arquitectura para dominarla completamente. Al mismo tiempo, planeo explorar otras alternativas, ya que considero fundamental adoptar convenciones de código y arquitecturas adecuadas para garantizar que el código sea lo más organizado y comprensible posible.

## 🛠️ Pasos de instalación:

1. Descargar el repositorio de **GitHub**.

2. Instala **Node.js** desde su pagina en la versión **LTS**: **nodejs.org**

3. Abrir el proyecto en **VS Code**.

4. Abrir el terminar y ejecutar:

```
npm install
```

5. Después ejecutar el comando: 

```
npm run dev
```

6. Abre el enlace que se te genera y prueba el proyecto ;)

```
Local:   http://localhost:1234/
```

7. Estas son las distintas operaciones que puedes hacer y sus paths:
   - Get all Pokemon: Recuperar toda la lista de Pokemons.
     - Path: `/pokemon`
   - Get one Pokemon: Recuperar un Pokemon especifico por su `number`.
     - Path: `/pokemon/:number` -> `/pokemon/1`
   - Post one Pokemon: Agregar un pokemon a la lista.
     - Path: `/pokemon/add`
     - Body:
         ```json
         {
           "number": number,
           "name": string,
           "type": string[],
           "description": string
         }
         ```
         Ejemplo:
         ```json
         {
           "number": 11,
           "name": "Pikachu",
           "type": [
           "Eléctrico"
           ],
           "description": "Este inteligente Pokémon tuesta las duras bayas con electricidad para hacerlas más comestibles."
         }
         ```
   - Put one Pokemon:
     - Path: `/pokemon/modify/:number` -> `/pokemon/modify/11`
     - Body:
         ```json
         {
           "number": number,
           "name": string,
           "type": string[],
           "description": string
         }
         ```
         Ejemplo:
         ```json
         {
           "description": "Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose."
         }
         ```
   - Delete one Pokemon:
     - Path: `/pokemon/delete/:number` -> `/pokemon/delete/11`
  
## 💻 Desarrollado con:

- NodeJS
- Express
- TypeScript
- Arquitectura Hexagonal
