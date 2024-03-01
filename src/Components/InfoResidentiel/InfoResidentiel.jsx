import React, { useEffect } from 'react';
import './infoResidentiel.css'
import Aos from 'aos'
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import 'aos/dist/aos.css'

// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];


const LANGUAGE_COOKIE_KEY = 'i18next';

const Info = () => {
  // Récupération de la langue actuelle à partir des cookies ou utilisation du français par défaut
  const currentLanguageCode = cookies.get(LANGUAGE_COOKIE_KEY) || 'fr';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  // Récupération de la fonction de traduction
  const { t } = useTranslation();

  // Configuration de la direction de la langue et mise à jour du titre de la page
  useEffect(() => {
    if (currentLanguage) {
      document.body.dir = currentLanguage.dir;
      document.title = t('app_title');
    }
  }, [currentLanguage, t]);
  

  //scrol animation
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section data-aos="fade-up" className="infoResidentiel">
      <div className="containerStyle">
        <h1 className="fs-1 text-uppercase text-center">{t('h1_infoResidentiel')}</h1>
      </div>
    </section>
  );
};

export default Info;