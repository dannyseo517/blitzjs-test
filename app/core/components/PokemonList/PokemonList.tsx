import { useGetAllPokemons } from "app/core/hooks/useGetAllPokemons"

const PokemonList = () => {
  const test = useGetAllPokemons()
  console.log(test)
  return <div>test</div>
}

export default PokemonList
