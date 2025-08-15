import React from "react";
import { Modal } from "./Modal";
import type { Character } from "../../types";
import classes from "./modal.module.scss";

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
}) => {
  if (!character) return null;

  const modalClass: string =
    character.house === "Gryffindor"
      ? classes.redModal
      : character.house === "Ravenclaw"
      ? classes.blueModal
      : character.house === "Hufflepuff"
      ? classes.yellowModal
      : character.house === "Slytherin"
      ? classes.greenModal
      : classes.modal;

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title={character.name}
      className={modalClass}
    >
      <ul>
        <li>
          <strong>Alternate names: </strong>
          {character.alternate_names?.length
            ? character.alternate_names.join(", ")
            : "N/A"}
        </li>
        <li>
          <strong>House: </strong>
          {character.house ? character.house : "N/A"}
        </li>
        <li>
          <strong>Date of Birth: </strong>
          {character.dateOfBirth ? character.dateOfBirth : "N/A"}
        </li>
        <li>
          <strong>Ancestry: </strong>
          {character.ancestry ? character.ancestry : "N/A"}
        </li>
        <li>
          <strong>Eye Color: </strong>
          {character.eyeColour ? character.eyeColour : "N/A"}
        </li>
        <li>
          <strong>Hair Color: </strong>
          {character.hairColour ? character.hairColour : "N/A"}
        </li>
        <li>
          <strong>Wand: </strong>{" "}
          {character.wand
            ? `${character.wand.wood || "Unknown"} wood, ${
                character.wand.core || "Unknown core"
              }, ${character.wand.length || "Unknown length"}`
            : "N/A"}
        </li>
        <li>
          <strong>Patronus: </strong>
          {character.patronus ? character.patronus : "N/A"}
        </li>
        <li>
          <strong>Actor: </strong>
          {character.actor ? character.actor : "N/A"}
        </li>
      </ul>
    </Modal>
  );
};
