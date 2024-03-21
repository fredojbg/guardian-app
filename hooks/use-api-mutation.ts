import { useState } from "react";
import { useMutation } from "convex/react";
import { FunctionArgs, FunctionReference } from "convex/server";

export const useApiMutation = <T extends FunctionReference<"mutation">>(
  mutationFunction: T
) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: FunctionArgs<T>) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => {
        setPending(false);
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };

  return { mutate, pending };
};
