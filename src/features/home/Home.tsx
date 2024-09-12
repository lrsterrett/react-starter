import { useCurrentUserQuery } from "../../api/auth/useCurrentUser";

export default function Home() {
  const { data: currentUser, isPending, isError } = useCurrentUserQuery();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error loading current user</span>;
  }

  return <h1>Welcome, {currentUser.name}</h1>;
}
