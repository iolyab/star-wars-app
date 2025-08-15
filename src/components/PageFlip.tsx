import React, { useState } from "react";
import usePeople from "../hooks/usePeople";
import classes from "./pageFlip.module.scss";

export const PageFlip = ({ page, totalPages, setPage }) => {
  const handlePageFlip = (type: string) => {
    if (type === "previous") {
      if (page > 1) {
        setPage(page - 1);
      }
    } else if (type === "next") {
      if (page < totalPages) {
        setPage(page + 1);
      }
    }
  };

  return (
    <div className={classes.pageFlip}>
      <p>Current page: {page}</p>
      <button
        onClick={() => handlePageFlip("previous")}
        disabled={page === 1}
        className={classes.pageFlipBtn}
      >
        Previous
      </button>
      <button
        onClick={() => handlePageFlip("next")}
        disabled={page === totalPages}
        className={classes.pageFlipBtn}
      >
        Next
      </button>
      <p>Total pages: {totalPages}</p>
    </div>
  );
};
