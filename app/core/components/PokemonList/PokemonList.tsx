import { useGetAllPokemons } from "app/core/hooks/useGetAllPokemons";
import styles from "./PokemonList.module.css";

const PokemonList = () => {
  const pokemons = useGetAllPokemons();
  return (
    <div>
      {/* TODO ADD HEADERS */}
      {pokemons.map((poke) => (
        <div className={styles.container}>
          <div>
            <img src={poke.imageUrl} />
          </div>
          <div>{poke.id}</div>
          <div>{poke.name}</div>
          {/* TO DO ADD MORE FIELDS */}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
