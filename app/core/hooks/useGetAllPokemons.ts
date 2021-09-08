import { useQuery } from "blitz"
import getAllPokemons from "app/pokemon/queries/getAllPokemons"

export const useGetAllPokemons = () => {
  return useQuery(getAllPokemons, null)[0]
}
