import React from 'react'

function Languages({ language, onLanguageChange }) {
    const languageOptions = [
        { label: "Afrikaans", value: "af" },
        { label: "Arabic", value: "ar" },
        { label: "French", value: "fr" },
        { label: "Hindi", value: "hi" },
        { label: "Japanese", value: "ja" },
        { label: "Portuguese", value: "pt" },
        { label: "Russian", value: "ru" },
        { label: "Simplified Chinese", value: "zh-CN" },
        { label: "Spanish", value: "es" },
        { label: "Swahili", value: "sw" },
        { label: "Thai", value: "th" }
    ]
    return (
        <div>
            <label className="label">Select Language</label>
            <div className="opts">
                {languageOptions.map(({ label, value }) => {
                    return (
                        <div
                            key={label}
                            className={`opt ${language === value ? "selected" : ""}`}
                            onClick={() => onLanguageChange(value)}
                        >
                            {label}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Languages;