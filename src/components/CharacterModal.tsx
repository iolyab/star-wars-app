import React from "react";
import { Modal } from "./Modal";

export const CharacterModal = ({ character, onClose }) => {
  if (!character) return null;

  return (
    <Modal isOpen={true} onClose={onClose} title={character.name}>
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
