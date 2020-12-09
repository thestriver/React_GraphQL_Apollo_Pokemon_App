import React from "react";

export function Pokemon({ pokemon }) {
  return (
    <div className="pokemons">
      <div className="pokemon__name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__meta">
        <span>{pokemon.maxHP}</span>
        <span>{pokemon.maxCP}</span>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__attacks">
        <p>{pokemon.attacks.special["name"]}</p>
        <p>{pokemon.attacks.special.damage}</p>
      </div>
      <div></div>
    </div>
  );
}
