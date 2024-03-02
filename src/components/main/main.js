import { UsersList } from "../usersList/usersList";
import cls from "./main.module.css";

export const Main = () => (
  <div className={cls.Main}>
    <UsersList />{" "}
  </div>
);
