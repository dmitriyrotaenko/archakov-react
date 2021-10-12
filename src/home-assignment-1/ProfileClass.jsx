import React from "react";

class ProfileClass extends React.Component {
  constructor({ name, registeredAt }) {
    super();
    this.name = name;
    this.registeredAt = registeredAt;
  }

  formatDate(date) {
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

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  render() {
    return (
      <div className="profile">
        <h3 className="profile__greeting">
          Привет, <b>{this.name}!</b>
        </h3>
        <p className="profile__registered-at">
          Дата регистрации: {this.formatDate(this.registeredAt)}
        </p>
      </div>
    );
  }
}

export default ProfileClass;
