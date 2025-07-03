import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/Api/axiosInstance";

const fetchUserById = async (userId) => {
  if (!userId) return null;
  const { data } = await axiosInstance.get(`/users/${userId}`);
  return data;
};

export function useUser() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id;
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUserById(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000,
  });

  return { user, isLoading, isError };
}
