import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import XHR from "i18next-http-backend"
import HttpApi from 'i18next-http-backend';
import translationEN from './locales/en/translation.json';
import translationDE from './locales/fr/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationDE
  }
};

i18n
.use(HttpApi)
.use(LanguageDetector)
.use(initReactI18next)
  .init({
    supportedLngs:['en','ar','fr'],
    resources,
    debug:true,
    fallbackLng: "en",

    detection: {
      
      order: ["cookie","htmlTag",  "localStorage", "path", "subdomain"],
      caches:["cookie"]
    },
    
   
    //  react : { useSuspense : false },
     

  
  });


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
