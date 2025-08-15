import React, { useState } from "react";
import usePeople from "../hooks/usePeople";
import classes from "./peopleList.module.scss";
import { PageFlip } from "./PageFlip";
import { CharacterModal } from "./CharacterModal";
import { CharacterCard } from "./CharacterCard";

export default function PeopleList() {
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const pageSize = 12;

  const { people, totalPages, isLoading, isError, error, refetch } = usePeople(
    page,
    pageSize
  );

  const handleClose = () => {
    setIsOpen(false);
    setSelectedCharacter(null);
  };

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
    setIsOpen(true);
  };

  return (
    <div className={classes.listLayout}>
      {isLoading && <p>Loading...</p>}
      {isError && (
        <div>
          <p>Error: {error}</p>
          <button onClick={refetch}>Retry</button>
        </div>
      )}

      <CharacterCard
        people={people}
        onSelectCharacter={handleSelectCharacter}
      />

      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={handleClose} />
      )}
      <PageFlip page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}
