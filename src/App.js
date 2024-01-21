import { useGetUsersQuery } from "./redux/usersApi";

export const App = () => {
  const { data = [], isLoading } = useGetUsersQuery();

  if (isLoading) return <h1>LOADING...</h1>;

  return (
    <div>
      {data.map(({ id, name, email }) => {
        return (
          <div
            key={id}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <span>{id}</span>
            <span>{name}</span>
            <span>{email}</span>
          </div>
        );
      })}
    </div>
  );
};
