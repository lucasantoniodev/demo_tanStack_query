import { useQuery } from "@tanstack/react-query";
import React from "react";

export interface PostInterface {
  _id: string;
  name: string;
  scientificName?: string;
  sighting: string;
  sightingDate: Date;
  observation: string;
  img: string;
  createdAt: Date;
}

type queryTypes = {
  data: PostInterface[];
  isLoading: boolean;
  error: Error;
};

export const usePostsQuery = (key: string) => {
  const { data, isLoading, error } = useQuery(
    [key],
    async () => {
      const response = await fetch("http://localhost:3000/posts/", {});
      return response.json() as Promise<PostInterface[]>;
    },
    {
      refetchOnWindowFocus: true,
      //   Stale while revalidate = Significa a revalidação de um cache, apagando o antigo e substituindo por um novo.
      staleTime: 1000 * 60, // 1 minuto
      // Select = é um atributo que de modo implícito atribui o tipo da data, sem se preocupar com undefined.
      select: React.useCallback((data: PostInterface[]) => data, []),
    }
  );

  return { data, isLoading, error };
};
