import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchEmployees = async (searchQuery) => {
  const { data } = await axios.get(
    `https://dummyjson.com/users/search?q=${searchQuery}`
  );
  return data;
};

export const useGetEmployees = (searchQuery: string) => {
  return useQuery({
    queryKey: [`search-users-${searchQuery}`], // Unique key for caching
    queryFn: () => fetchEmployees(searchQuery),
    enabled: !!searchQuery, // The function that fetches data
  });
  //   return { users: data.users };
};
