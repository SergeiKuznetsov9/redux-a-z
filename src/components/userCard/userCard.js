import cls from "./userCard.module.css";

export const UserCard = ({ user }) => {
  const {
    name,
    email,
    address: { street, suite, city },
    phone,
    website,
  } = user;

  return (
    <div className={cls.UserCard}>
      <div className={cls.header}>{name}</div>
      <div className={cls.block}>
        <div className={cls.blockTitle}>Address</div>
        <div className={cls.blockContent}>
          {street}, {suite}, {city}
        </div>
      </div>
      <div className={cls.block}>
        <div className={cls.blockTitle}>E-MAIL</div>
        <div className={cls.blockContent}>{email}</div>
      </div>
      <div className={cls.block}>
        <div className={cls.blockTitle}>Phone</div>
        <div className={cls.blockContent}>{phone}</div>
      </div>
      <div className={cls.block}>
        <div className={cls.blockTitle}>Website</div>
        <div className={cls.blockContent}>{website}</div>
      </div>
    </div>
  );
};
