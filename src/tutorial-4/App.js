import React from "react";

import "./App.css";

import Phrase from "./components/Phrase";
import EmptyBlock from "./components/EmptyBlock";

import { adjectivesArr, nounsArr } from "./words";

function randomize(limit) {
  return Math.floor(Math.random() * limit);
}

/* возвращает строку с кол-вом заданных уникальных слов */
function generatePhrase(arr, numberOfWords = 1) {
  const words = [];
  let executedTimes = 0;
  function inner() {
    /* 
      если функция подобрала нужное кол-во слов (параметр timesToRun) - возвращаем эти слова

      иначе - вызываем функцию до тех пор, 
      пока она не сгенерирует нужное кол-во слов
    */
    if (executedTimes === numberOfWords) {
      return words.join(" ");
    }
    let word = arr[randomize(arr.length)];
    /* чтобы слова во фразе были уникальными (а не непередаваемый       непередаваемый программист) 
      будем проверять, если ли уже это рандомное слово в массиве words
    */
    while (words.includes(word)) {
      word = arr[randomize(arr.length)];
    }
    /* как только нашли слово, которого в массиве нет - пушим его*/
    words.push(word);
    /* ведём счётчик вызова функции. Нужно для того, чтобы сравнивать с   начальным значением numberOfWords. Например для прилагательных 2 вызова должно быть
     */
    executedTimes++;
    /* рекурсивно вызываем внутреннюю функцию для следующего слова */
    return inner();
  }

  return inner;
}

function App() {
  const [phrases, setPhrases] = React.useState([]);

  const adjectives = generatePhrase(adjectivesArr, 2);
  const noun = generatePhrase(nounsArr);

  function addPhrase() {
    const phrase = `${adjectives()} ${noun()}`;
    setPhrases((prev) => [phrase, ...prev]);
  }

  function clearList() {
    setPhrases([]);
  }

  return (
    <div className="wrapper">
      {phrases.length ? (
        <ul className="list">
          {phrases.map((phrase, id) => (
            <Phrase key={id} text={phrase} />
          ))}
        </ul>
      ) : (
        <EmptyBlock />
      )}

      <button onClick={addPhrase} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={clearList} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
}

export default App;
