import db from "db"

export default async function getAllPokemons(_ = null) {
  return await db.pokemon.findMany()
}
