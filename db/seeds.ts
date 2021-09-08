import db from "./index"
import pokemon from "./pokemon.json"
import pokemonImgs from "./pokemonImgs.json"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  for (let i = 0; i < pokemon.length; i++) {
    const thisPokemon = pokemon[i]
    if (thisPokemon) {
      const { id, name, species, type, height, weight, abilities, stats, evolution } = thisPokemon
      await db.pokemon.create({
        data: {
          id,
          name,
          imageUrl: pokemonImgs[name],
          species: species,
          type: type.toString(),
          height,
          weight,
          abilities: abilities.toString(),
          stats: JSON.stringify(stats),
          evolution: evolution.toString(),
        },
      })
    }
  }
}

export default seed
