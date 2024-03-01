import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import commercialImg from '../../Assets/commercial.gif';

// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr' },
  { code: 'en', name: 'English', country_code: 'gb' },
  { code: 'es', name: 'Espanol', country_code: 'es' },
];

const LANGUAGE_COOKIE_KEY = 'i18next';

const Commercial = () => {
  // Récupération de la langue actuelle à partir des cookies ou utilisation du français par défaut
  const currentLanguageCode = cookies.get(LANGUAGE_COOKIE_KEY) || 'fr';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  // Récupération de la fonction de traduction
  const { t } = useTranslation();

  // Configuration de la direction de la langue lors de la première renderisation
  useEffect(() => {
    console.log('Setting page language direction');
    document.body.dir = currentLanguage.dir;
  }, [currentLanguage, t]);

  return (
    <>
      <section id="commercial">
        <div className="row py-5 container py-4 px-2">
          <h2 className="fs-2 text-uppercase title_About">{t('nav_drop_item2')}</h2>

          {/* Image commerciale */}
          <div className="col-12 col-lg-6 order-2 order-lg-2">
            <div className="img-container">
              <img src={commercialImg} className="img-fluid zoom-effect mt-2" alt="" loading="lazy" />
            </div>
          </div>

          {/* Spécifications */}
          <div className="col-12 col-lg-6 order-1 order-lg-1 d-flex flex-column justify-content-center">
            <h2 className="text-uppercase fs-4 textColor">{t('specifications')}</h2>
            <ul className="ul_about">
              <li>{t('li_specifications1')}</li>
              <li>{t('li_specifications2')}</li>
              <li>{t('li_specifications3')}</li>
              <li>{t('li_specifications4')}</li>
              <li>{t('li_specifications5')}</li>
              <li>{t('li_specifications6')}</li>
              <li>{t('li_specifications7')}</li>
              <li>{t('li_specifications8')}</li>
              <li>{t('li_specifications9')}</li>
              <li>{t('li_specifications10')}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commercial;
