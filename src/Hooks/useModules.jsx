import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/api/axiosInstance";
import toast from "react-hot-toast";

const fetchModules = async () => {
  const { data } = await axiosInstance.get("/modules");
  return data;
};

const updateModuleStatus = async ({ moduleId, newStatus }) => {
  const { data } = await axiosInstance.patch(`/modules/${moduleId}`, {
    status: newStatus,
  });
  return data;
};

export function useModules() {
  const queryClient = useQueryClient();
  const queryKey = ["modules"];

  const {
    data: modules = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: queryKey,
    queryFn: fetchModules,
  });

  const { mutate: markModuleAsComplete, isLoading: isUpdating } = useMutation({
    mutationFn: (moduleId) =>
      updateModuleStatus({ moduleId, newStatus: "Selesai" }),
    onMutate: async (moduleId) => {
      await queryClient.cancelQueries({ queryKey: queryKey });

      const previousModules = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, (oldData) =>
        oldData.map((module) =>
          module.id === moduleId ? { ...module, status: "Selesai" } : module
        )
      );
      return { previousModules };
    },

    onError: (err, variables, context) => {
      if (context?.previousModules) {
        queryClient.setQueryData(queryKey, context.previousModules);
      }
      toast.error("Gagal memperbarui status. Perubahan dibatalkan.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });

  return { modules, isLoading, isError, markModuleAsComplete, isUpdating };
}
