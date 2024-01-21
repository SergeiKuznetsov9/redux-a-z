import { useEffect, useState } from "react";
import { useAddUserMutation, useGetUsersQuery, useDeleteUserMutation } from "./redux/usersApi";

export const App = () => {
  const [number, setNumber] = useState("");
  const [idUser, setIdUser] = useState("");
  const [nameUser, setNameUser] = useState("");

  const { data = [], isLoading } = useGetUsersQuery(number);

  const [addUser, { isError }] = useAddUserMutation();
  const [deleteUser ] = useDeleteUserMutation();

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleAddUser = async () => {
    await addUser({ name: nameUser, id: idUser });
  };

  useEffect(() => {
    console.log(number);
  }, [number]);

  if (isLoading) return <h1>LOADING...</h1>;

  return (
    <>
      <label>
        Введите ID нового пользователя
        <br />
        <input
          type="text"
          onChange={(ev) => setIdUser(ev.target.value)}
          value={idUser}
        />
      </label>
      <br />
      <label>
        Введите имя нового пользователя
        <br />
        <input
          type="text"
          onChange={(ev) => setNameUser(ev.target.value)}
          value={nameUser}
        />
      </label>
      <br />

      <button onClick={handleAddUser}>ADD NEW USER</button>
      <br />
      <select onChange={handleChange}>
        <option value={""}>All</option>
        <option value={"1"}>1</option>
        <option value={"2"}>2</option>
        <option value={"3"}>3</option>
      </select>
      <br />
      <div>
        {Array.isArray(data) ? (
          data.map(({ id, name }) => {
            return (
              <div
                key={id}
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <span>{id}</span>
                <span>{name}</span>
                <span style={{color: 'red', cursor: 'pointer'}} onClick={() => deleteUser(id)}><strong>X</strong></span>
              </div>
            );
          })
        ) : (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span>{data.id}</span>
            <span>{data.name}</span>
          </div>
        )}
      </div>
    </>
  );
};
