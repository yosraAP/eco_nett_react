import React, { useEffect } from 'react';
import './menageResidentiel.css';
import video from '../../Assets/residentiel.mp4'
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];


const LANGUAGE_COOKIE_KEY = 'i18next';


const MenageCommercial = () => {
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
  

  return (
    <section className="secDiv">
      <div className="mx-auto col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

          <div className="col-lg-6">
            <h1 className="fs-2 text-uppercase title_Res">{t('h1_MenageResidentiel')} </h1>
            <p className="fs-6 mt-2">{t('p1_MenageResidentiel')}</p>
            <p className="fs-6 mt-2">{t('p2_MenageResidentiel')}</p>
            <p className="fs-6 mt-2">{t('p3_MenageResidentiel')}</p>
            <div class="titleRes-box">
              <h2 className="fs-1 text-body-emphasis lh-1 mb-3">{t('h2_MenageResidentiel')}</h2>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-lg-6">
            <div className="videoContainer">
              <video src={video} className="zoom-effect" type="video/mp4" autoPlay muted loop></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenageCommercial;
