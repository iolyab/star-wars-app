import React, { useState } from "react";
import usePeople from "../../hooks/usePeople";
import classes from "./peopleList.module.scss";
import { PageFlip } from "../pageflip/PageFlip";

import { CharacterCard } from "../card/CharacterCard";
import type { Character } from "../../types";
import { CharacterModal } from "../modal/CharacterModal";

export default function PeopleList() {
  const [page, setPage] = useState<number>(1);

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const pageSize = 12;

  const { people, totalPages, isLoading, isError, error, refetch } = usePeople(
    page,
    pageSize
  );

  const handleClose = () => {
    setSelectedCharacter(null);
  };

  const handleSelectCharacter = (character: Character) => {
    setSelectedCharacter(character);
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
