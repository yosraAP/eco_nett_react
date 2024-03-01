import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from '../Home/Home'
import Forms from '../FormContact/Formcontact';
import imgContact from '../../Assets/imgContactUs.gif'
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];
const LANGUAGE_COOKIE_KEY = 'i18next';

const ContactPage = () => {
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

  const location = useLocation();
  const scrollToId = location.state?.scrollTo || localStorage.getItem('scrollToId');

  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        localStorage.setItem('scrollToId', scrollToId);
      }
    }
  }, [scrollToId]);

  useEffect(() => {
    return () => {
      localStorage.removeItem('scrollToId');
    };
  }, []);


  return (
    <>
      <Home />
      <section className="px-4 py-5" id="contactPage">
        <div className="px-4 py-5 container" >
          <h1 className="text-center p-2 mb-2 fs-1 text-uppercase mt-4 h1_about">{t('NousContacter')}</h1>
          <p className="p_about text-center">{t('demandeContact')}</p>

          <div className="row py-4 px-2">

            <div className="col-10 col-sm-8 col-lg-5 p-3 mt-3 mb-5 col-md-6 mx-auto border rounded-4 order-2 order-lg-1 form-container" >
              <Forms />
            </div>

            <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <div className="img-container">
                <img src={imgContact} className="img-fluid zoom-effect" alt="" loading="lazy" />
              </div>
            </div>

          </div>
        </div>
        <div className="container-fluid">
          <iframe className="full-width-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2796.6850233266287!2d-73.7041259!3d45.4962872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9175ffdde8f01%3A0x7969c8c9b823dc2a!2sM%C3%A9nage%20Eco%20Plus!5e0!3m2!1sen!2sca!4v1691776653331!5m2!1sen!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Menage EcoNett"></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
