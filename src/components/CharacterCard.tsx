import React from "react";
import classes from "./peopleList.module.scss";

export const CharacterCard = ({ people, onSelectCharacter }) => {
  return (
    <div className={classes.characterList}>
      {people.map((character) => (
        <div
          key={character.name}
          onClick={() => {
            onSelectCharacter(character);
          }}
          className={classes.characterCard}
        >
          <img
            src={
              character.image ||
              "https://freesvg.org/img/abstract-user-flat-4.png"
            }
            alt={character.name}
            className={classes.characterImg}
          />
          {character.name}
        </div>
      ))}
    </div>
  );
};
