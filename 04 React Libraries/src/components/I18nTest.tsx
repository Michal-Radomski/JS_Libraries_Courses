import React from "react";
import { useTranslation } from "react-i18next";

const I18nTest = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  // console.log("i18n.languages:", i18n.languages);
  const user = {
    name: "Michal",
    surname: "Radomski",
  };

  return (
    <React.Fragment>
      <h1>{t("helloName", { name: user.name, surname: user.surname })}</h1>
      <h1>{t("dogs", { count: 21, ordinal: true })}</h1>
      <h2>{t("included", { count: 10, context: "random" })}</h2>
      <p>{t("thereAreSomeCats", { count: 2 })}</p>
      <button onClick={() => i18n.changeLanguage(i18n.language === "en" ? "it" : "en")} className="btn btn-secondary">
        Change to {i18n.language === "en" ? "Italian" : "English"}
      </button>
      <p>{t("test.languageTest")}</p>
    </React.Fragment>
  );
};

export default I18nTest;
