import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import Home from '../Home/Home';
import Residentiel from '../Residentiel/Residentiel'
import Commercial from '../Commercial/Commercial'
import './index.css';

// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];
const LANGUAGE_COOKIE_KEY = 'i18next';

const WorkPlan = () => {
  // Récupération de la langue actuelle à partir des cookies ou utilisation du français par défaut
  const currentLanguageCode = cookies.get(LANGUAGE_COOKIE_KEY) || 'fr';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const { t } = useTranslation();

  // Configuration de la direction de la langue et mise à jour du titre de la page
  useEffect(() => {
    if (currentLanguage) {
      document.body.dir = currentLanguage.dir;
      document.title = t('app_title');
    }
  }, [currentLanguage, t]);
  
  return (
    <>
      <Home />
      <div className="mt-5 py-5" id="residentiel">
        <h1 className="text-center p-2 fs-1 mt-5 text-uppercase h1_about">{t('dropdown_title')}</h1>
      </div>
      <Residentiel />
      <hr className="hr_about container" />
      <Commercial />
    </>
  );
};

export default WorkPlan;
