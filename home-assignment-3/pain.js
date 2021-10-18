class Todo {
  constructor(parent = document.body) {
    this.parent = parent;
    this.tasks = [
      {
        title: "Страдать",
        id: +new Date(),
      },
    ];
    /* можем себе позволить, 
       т.к. инициализируем тудушку после полной загрузки ДОМа.

      Можно было бы перестраховаться и создавать элементы, если их нет
    */
    this.DOM = {
      form: document.querySelector("form"),
      input: document.querySelector("input"),
      button: document.querySelector("button"),
      list: document.querySelector("ul"),
    };

    this.#initListeners();
    this.render();
  }

  render() {
    this.#clearListHTML();
    for (const { title, id } of this.tasks) {
      this.DOM.list.appendChild(this.#createTaskNode(title, id));
    }
  }

  #createTaskNode(text, id) {
    const li = document.createElement("li");
    /* или через innerHTML. Но вот так безопаснее */
    const removeButton = document.createElement("button");
    /* здесь просто описываем аттрибуты и инлайн стили для элемента кнопки */
    Object.assign(removeButton, {
      action: "delete",
      id,
      style: "margin-left: 5px",
      textContent: "Удалить",
    });

    li.textContent = text;
    li.appendChild(removeButton);

    return li;
  }

  #clearListHTML() {
    const list = this.DOM.list;
    while (list.lastChild) {
      list.removeChild(list.lastChild);
    }
  }

  add(title) {
    this.tasks.push({
      title,
      id: +new Date(),
    });

    this.render();
  }

  remove(id) {
    this.tasks = [...this.tasks].filter((task) => task.id !== id);
    this.render();
  }

  get readInputValue() {
    const value = this.DOM.input.value.trim();
    return value;
  }

  clearForm() {
    this.DOM.form.reset();
  }

  #initListeners() {
    /* обработчик формы */
    this.DOM.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const inputValue = this.readInputValue;

      this.add(inputValue);
      this.clearForm();
    });

    /* обработчик листа (удаление) */
    this.DOM.list.addEventListener("click", ({ target }) => {
      const { action, id } = target;
      if (action !== "delete") return;
      this.remove(+id);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new Todo();
});
