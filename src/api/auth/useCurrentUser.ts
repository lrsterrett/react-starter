import { useQuery } from "@tanstack/react-query";
import { api } from "..";
import { z } from "zod";

const User = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
});

type User = z.infer<typeof User>;

async function getCurrentUser() {
  const request = await api.get("/users/me");
  return User.parse(request.data);
}

function useCurrentUserQuery() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });
}

export { useCurrentUserQuery, type User };
