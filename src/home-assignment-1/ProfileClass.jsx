import React from "react";

class ProfileClass extends React.Component {
  constructor({ name = "Вася Пупкин", registeredAt }) {
    super();
    this.name = name;
    this.registeredAt = registeredAt;
  }

  render() {

    const dateOptions = {year: "numeric", month: "long", day: "numeric"};
    const date = this.registeredAt.toLocaleDateString("ru-RU", dateOptions);

    return (
      <div className="profile">
        <h3 className="profile__greeting">
          Привет, <b>{this.name}!</b>
        </h3>
        <p className="profile__registered-at">
          Дата регистрации: {date.slice(0, -2)}
        </p>
      </div>
    );
  }
}

export default ProfileClass;
