const Profile = ({ name = "Вася Пупкин", registeredAt }) => {


  const dateOptions = {year: "numeric", month: "long", day: "numeric"};
  const date = registeredAt.toLocaleDateString("ru-RU", dateOptions);

  return (
    <div className="profile">
      <h3 className="profile__greeting">
        Привет, <b>{name}!</b>
      </h3>
      <p className="profile__registered-at">
        Дата регистрации: {date.slice(0, -2)}
      </p>
    </div>
  );
};

export default Profile;
