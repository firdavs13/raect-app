import "./App.css";
import { useState, useRef } from "react";
import data from "./localization/content";

function App() {
  const inputValue = useRef();
  const [theme, settheme] = useState("light");

  function onChangeFunction() {
    if (inputValue.current.checked) {
      settheme("dark");
    } else {
      settheme("light");
    }
  }

  const [lang, setLang] = useState("eng");

  const [openModal, setOpenModal] = useState(false);

  return (
    <div data-theme={theme} className="App">
      <section className="box__wrapper">
        <button
          onClick={() => setOpenModal(!openModal)}
          className="box__btn modal__btn"
        >
          {" "}
          Modal{" "}
        </button>
        {openModal && (
          <div class="container">
            <h1 className="box__heading">{data[lang].heading}</h1>
            <p className="box__desc">{data[lang].desc}</p>
            <button onClick={() => setOpenModal(false)} className="box__btn">
              {data[lang].button}
            </button>
          </div>
        )}

        <select
          className="box__select"
          defaultValue={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="ru">Ru</option>
          <option value="uz"> Uz</option>
          <option value="eng">Eng</option>
        </select>
      </section>

      <div className="theme-switcher">
        <input
          className="input"
          ref={inputValue}
          onChange={() => onChangeFunction()}
          type="checkbox"
          id="switcher"
        />
        <label className="label" for="switcher">
          Switch
        </label>
      </div>
    </div>
  );
}

export default App;
