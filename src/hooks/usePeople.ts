import { useCallback, useEffect, useState } from "react";
import { get } from "../api/apiClient";

function usePeople(page, pageSize = 12) {
  const [allPeople, setAllPeople] = useState([]);
  const [people, setPeople] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const fetchPeople = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await get("/characters");
      setAllPeople(response.data);
      setTotalPages(Math.ceil(response.data.length / pageSize));
    } catch (err) {
      setIsError(true);
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [pageSize]);

  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    setPeople(allPeople.slice(start, end));
  }, [page, allPeople, pageSize]);

  return {
    people,
    totalPages,
    isLoading,
    isError,
    error,
    refetch: fetchPeople,
  };
}

export default usePeople;
