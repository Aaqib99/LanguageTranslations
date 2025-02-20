import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import Field from "./components/field";
import Languages from "./components/language";
import "./styles.css";
import Translate from "./components/translate";

function App() {
  const [language, setLanguage]= useState("es");
  const [text, setText]= useState("");
  return (
    <>
      <Field value={text} onChange={setText}/>
      <Languages language={language} onLanguageChange={setLanguage}/>
      <hr />
      <Translate text={text} language={language}/>
    </>
  );
}

export default App;
