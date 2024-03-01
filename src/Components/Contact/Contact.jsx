import React, { useEffect } from 'react';
import './contact.css';
import video2 from '../../Assets/video (2).mp4';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import Forms from '../FormContact/Formcontact';

// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];


const LANGUAGE_COOKIE_KEY = 'i18next';

const Contact = () => {
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
    <section className="contact">
      {/* Arrière-plan vidéo */}
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent col-xxl-8">
        <div className="container row flex-lg-row-reverse align-items-center g-5 py-5">
          {/* Contenu du texte */}
          <div className="col-12 col-sm-12 col-lg-7 order-md-2">
            <h1 className="display-6 text-start">{t('h1_contact1')}</h1>
            <h1 className="display-6 text-start">{t('h1_contact2')}</h1>
            <h1 className="display-6 text-start">{t('h1_contact3')}</h1>
            <p className="fs-4 text-start">
              {t('p_contact1')}
              {t('p_contact2')}
              {t('p_contact3')}
            </p>
          </div>

          {/* Formulaire de contact */}
          <div className="col-lg-5 col-sm-10 mx-sm-auto order-md-1">
            <div className="contactContainer">
              <Forms />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
