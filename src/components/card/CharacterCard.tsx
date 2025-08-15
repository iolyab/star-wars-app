import React from "react";
import classes from "./characterCard.module.scss";

export interface Character {
  name: string;
  image?: string;
  [key: string]: string | undefined;
}

interface CharacterCardProps {
  people: Character[];
  onSelectCharacter: (character: Character) => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  people,
  onSelectCharacter,
}) => {
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
