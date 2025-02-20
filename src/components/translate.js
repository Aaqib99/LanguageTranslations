
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY; // Replace with your API Key

function Translate({ text, language }) {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) return;

    const fetchTranslation = async () => {
      try {
        const response = await axios.post(
          `https://translation.googleapis.com/language/translate/v2`,
          {},
          {
            params: {
              q: text,
              target: language,
              key: API_KEY,
            },
          }
        );
        setTranslated(response.data.data.translations[0].translatedText);
      } catch (error) {
        console.error("Translation Error:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchTranslation();
    }, 500); // Debounce to prevent excessive API calls

    return () => clearTimeout(timeoutId);
  }, [text, language]);

  return (
    <div className="translation">
      <h3>Translation</h3>
      <p>{translated || "Translation will appear here..."}</p>
    </div>
  );
}

export default Translate;
