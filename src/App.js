import { useEffect, useState } from "react";
import { useGetUsersQuery } from "./redux/usersApi";

export const App = () => {
  const [number, setNumber] = useState("");

  //   Сюда можно передать аргумент, который попадет в апи
  const { data = [], isLoading } = useGetUsersQuery(number);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  useEffect(() => {
    console.log(number);
  }, [number]);

  if (isLoading) return <h1>LOADING...</h1>;

  return (
    <>
      <select onChange={handleChange}>
        <option value={""}>All</option>
        <option value={"1"}>1</option>
        <option value={"2"}>2</option>
        <option value={"3"}>3</option>
      </select>
      <div>
        {Array.isArray(data) ? (
          data.map(({ id, name, email }) => {
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
          })
        ) : (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span>{data.id}</span>
            <span>{data.name}</span>
            <span>{data.email}</span>
          </div>
        )}
      </div>
    </>
  );
};
