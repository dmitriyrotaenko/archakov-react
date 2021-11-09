import React from "react";

const URL = "https://618ad89934b4f400177c48e8.mockapi.io/users";

function App() {
  const [users, setUsers] = React.useState([]);

  async function getUsers() {
    if(!navigator.onLine) {
      alert("Проверьте подключение к интернету!")
      return;
    }

    return await fetch(URL)
    .then(response => {
      if(response.status !== 200) {
        throw "Что-то пошло не так. Попробуйте снова";
      }

      return response.json()
    })
    .then(usersData => setUsers(usersData))
    .catch(error => alert(error));
  }

  return (
    <div>
      <button onClick={getUsers}>Загрузить пользователей</button>
      <ul>
        {
          users.map(user => {
            return (
              <li key={user.id}>
                { user.name }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}



export default App;