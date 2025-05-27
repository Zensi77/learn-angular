const TOTAL_POKEMONS = 10;
const TOTAL_PAGES = 10;

(async () => {
  const fs = require("fs");

  const pokemonIds = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1);

  let fileContent = pokemonIds.map((id) => `/pokemon/${id}`).join("\n");

  for (let i = 1; i <= TOTAL_PAGES; i++) {
    fileContent += `\n/pokemon/page/${i}`;
  }

  const pokeNames = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`
  ).then((res) => res.json());

  fileContent +=
    "\n" + pokeNames.results.map((poke) => `/pokemon/${poke.name}`).join("\n");

  fs.writeFileSync("routes.txt", fileContent);

  console.log(
    `[ SUCCESS ] Prerender routes generated successfully! \n ${pokemonIds.length} Pokémon and ${TOTAL_PAGES} pages listed.`
  );
})();
