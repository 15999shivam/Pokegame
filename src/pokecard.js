import React, { Component } from "react";
import "./pokecard.css";

const padTothree = number => (number < 999 ? `00${number}`.slice(-3) : number);
export default class Pokecard extends Component {
  static defaultProps = {
    id: 4,
    name: "Charmander",
    type: "fire",
    base_experience: 62
  };

  render() {
    const { id, name, type, baseExperiance } = this.props;
    return (
      <div className="pokecard">
        <h1 className="pokecard-title">{name}</h1>
        <div className="pokecard-image">
          {" "}
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padTothree(
              id
            )}.png`}
            alt="pokemon"
          />
        </div>
        <div className="pokecard-data">Type: {type}</div>
        <div className="pokecard-data">Exp: {baseExperiance}</div>
      </div>
    );
  }
}
