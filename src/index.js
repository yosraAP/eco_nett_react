import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import App from './App.js'
import 'flag-icon-css/css/flag-icon.min.css';

// Initialisation de i18next avec des plugins pour la détection de la langue et le chargement des traductions via HTTP
i18next
  .use(HttpApi) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    supportedLngs: ['fr', 'en', 'es'], // Langues prises en charge
    fallbackLng: 'fr', // Langue par défaut si la langue détectée n'est pas prise en charge
    debug: false,
    detection: {
      order: ['path', 'cookie', 'htmlTag'], // Ordre de détection de la langue
      caches: ['cookie'], // Mettre en cache la langue dans un cookie
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Chemin pour charger les fichiers de traduction
    },
  })

// Marquage pour le rendu pendant le chargement
const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Chargement...</h3>
  </div>
)

// Rendu de l'application React
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
)
