import React from "react";
import { useTranslation } from "react-i18next";

const I18nTest = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      <h1>{t("dogs", { count: 21, ordinal: true })}</h1>
      <h2>{t("included", { count: 10, context: "random" })}</h2>
      <p>{t("thereAreSomeCats", { count: 2 })}</p>
      <button onClick={() => i18n.changeLanguage(i18n.language === "en" ? "it" : "en")}>
        Change to {i18n.language === "en" ? "Italian" : "English"}
      </button>
      <p>{t("test.languageTest")}</p>
    </React.Fragment>
  );
};

export default I18nTest;
