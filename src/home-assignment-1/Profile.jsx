const Profile = ({ name = "Вася Пупкин", registeredAt }) => {
  /* можно запариться и написать логику, 
     которая будет ставить месяца в нужный падеж, 
     но, наверное, не нужно пока
  */
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const date = registeredAt.getDate();
  const month = months[registeredAt.getMonth()];
  const year = registeredAt.getFullYear();

  return (
    <div className="profile">
      <h3 className="profile__greeting">
        Привет, <b>{name}!</b>
      </h3>
      <p className="profile__registered-at">
        Дата регистрации: {`${date} ${month} ${year}`}
      </p>
    </div>
  );
};

export default Profile;
