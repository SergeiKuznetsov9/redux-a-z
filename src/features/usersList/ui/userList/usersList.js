import { UserCard } from "../userCard/userCard";
import cls from "./usersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getErrorUsers, getUsers } from "../../slice/selectors";
import {
  getUsersThunk,
  selectUserById,
  selectUserIds,
  selectUserEntities,
  selectAllUsers,
  selectTotalUsers,
} from "../../slice/usersSlice";
import { useEffect } from "react";

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const error = useSelector(getErrorUsers);

  const selectedById = useSelector(selectUserById);
  const selectedIds = useSelector(selectUserIds);
  const selectedEntities = useSelector(selectUserEntities);
  const selectedAll = useSelector(selectAllUsers);
  const selectedTotal = useSelector(selectTotalUsers);

  console.log({
    selectedById,
    selectedIds,
    selectedEntities,
    selectedAll,
    selectedTotal,
  });

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

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
