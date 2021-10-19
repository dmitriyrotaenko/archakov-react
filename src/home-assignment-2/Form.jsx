import { form, input, button } from "./Form.module.css";

const Form = () => {
  let email = "";
  let password = "";

  function readInput({ target }) {
    const { type, value } = target;

    if (type === "text") {
      email = value.trim();
    } else {
      password = value.trim();
    }
  }

  function checkInputs(...args) {
    return args.every((value) => value !== "");
  }

  
  function resetForm(form) {
    form.reset();
    email = password = "";
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!checkInputs(email, password)) {
      alert("Необходимо заполнить оба поля!");
      return;
    }

    console.log({ email, password });
    resetForm(event.target);
  }

  return (
    <form action="#" onSubmit={handleSubmit} className={form}>
      <input
        type="text"
        placeholder="E-mail"
        className={input}
        onChange={readInput}
      />
      <input
        type="password"
        placeholder="Пароль"
        className={input}
        onChange={readInput}
      />
      <button type="submit" className={button}>
        Вход
      </button>
    </form>
  );
};

export default Form;
