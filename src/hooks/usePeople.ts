import { useCallback, useEffect, useState } from "react";
import { get } from "../api/apiClient";
import type { Character } from "../types";

interface UsePeopleResult {
  people: Character[];
  totalPages: number;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

function usePeople(page: number, pageSize = 12): UsePeopleResult {
  const [allPeople, setAllPeople] = useState<Character[]>([]);
  const [people, setPeople] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPeople = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await get<Character[]>("/characters");
      setAllPeople(response.data);
      setTotalPages(Math.ceil(response.data.length / pageSize));
    } catch (err: unknown) {
      setIsError(true);
      if (err instanceof Error) {
        setError(err.message || "Something went wrong");
      }
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
