import { useEffect, useState } from "react";
import { UserCard } from "../userCard/userCard";
import cls from "./usersList.module.css";

export const UsersList = () => {
  const [users, setUsers] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("Can`t load data");
        }

        return res.json();
      })
      .then(setUsers)
      .catch(setError);
  }, []);

  return (
    <>
      <h1 className={cls.header}>Список пользователей</h1>

      {error ? (
        <div className={cls.errorMessage}>При загрузке возникла ошибка</div>
      ) : (
        users && users.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </>
  );
};
