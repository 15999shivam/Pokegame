import React, { Component } from "react";
import Pokecard from "./pokecard";
import "./pokedex.css";

export default class Pokedex extends Component {
  static defaultProps = {
    cards: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };
  render() {
    const { cards } = this.props;
    const isWinner = this.props.winner;
    return (
      <div className="pokedex">
        <h1 className={isWinner ? "pokedex-winner" : "pokedex-looser"}>
          {isWinner ? "Winner" : "Looser"}
        </h1>
        <h4>Total experiance{this.props.exp} </h4>

        <div className="pokedex-cards">
          {cards.map(card => (
            <Pokecard
              id={card.id}
              name={card.name}
              type={card.type}
              baseExperiance={card.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
