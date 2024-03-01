import React, { useEffect } from 'react';
import Home from '../Home/Home'
import './index.css'
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import imgabout from '../../Assets/imgabout.gif'
import img2about from '../../Assets/imgabout3.png'
import { BiLinkExternal } from 'react-icons/bi'


// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];

const LANGUAGE_COOKIE_KEY = 'i18next';
const About = () => {

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
  

  // Utilisez le hook 'useLocation' pour obtenir l'objet 'location' actuel
  const location = useLocation();

  // Essayez d'obtenir la valeur 'scrollTo' depuis l'état de 'location', sinon, prenez-la depuis le 'localStorage'
  const scrollToId = location.state?.scrollTo || localStorage.getItem('scrollToId');

  // Ce hook est utilisé pour effectuer un défilement vers un élément spécifique une fois que la page est chargée ou mise à jour
  useEffect(() => {
    // Vérifie si 'scrollToId' a une valeur
    if (scrollToId) {
      // Trouve l'élément avec l'ID correspondant
      const element = document.getElementById(scrollToId);
      // Si l'élément est trouvé, défilez jusqu'à cet élément de manière fluide
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Enregistrez l'ID dans le 'localStorage' pour une utilisation ultérieure
        localStorage.setItem('scrollToId', scrollToId);
      }
    }
  }, [scrollToId]); // Le hook dépend de la valeur de 'scrollToId', donc il sera ré-exécuté si cette valeur change

  // Ce hook est utilisé pour nettoyer le 'localStorage' lorsque le composant est démonté
  useEffect(() => {
    return () => {
      // Supprimez 'scrollToId' du 'localStorage' lorsque le composant est démonté
      localStorage.removeItem('scrollToId');
    };
  }, []); // Il n'a pas de dépendances, donc il s'exécutera uniquement au montage et démontage du composant



  return (
    <>
      <Home />
      <section id="aboutPage">
        <div className="about px-4 py-5 mt-5 container">
          <h1 className="text-center p-2 fs-1 text-uppercase mt-5 h1_about">{t('navbar_À-Propos')}</h1>

          <div className="row py-4 px-4">

            <div className="col-lg-6 col-12 col-sm-12 order-2 order-lg-1">
              <div className="imgAbout">
                <div className="rectangle-img" style={{ backgroundPosition: 'left' }}></div>
                <div className="rectangle-img" style={{ backgroundPosition: 'center' }}></div>
                <div className="rectangle-img" style={{ backgroundPosition: 'right' }}></div>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <h1 className="fs-2 text-uppercase title_About mt-2">{t('title_about')}</h1>
              <p className="p_about">{t('p_about1')}</p>
              <p className="p_about">{t('p_about2')}</p>
              <h3 className="fs-4 text-uppercase textColor">{t('avantages')}</h3>
              <ul className="ul_about">
                <li>{t('équipeExpérience')}</li>
                <li>{t('Estimationgratuite')}</li>
                <li>{t('Tarifscompétitifs')}</li>
                <li>{t('Élaborationplantravail')}</li>
                <li>{t('Produitsécologiques')}</li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="hr_about container" />

        <div className="row container py-4 px-2">

          <div className="col-12 col-lg-6 order-1 order-lg-1">
            <br className="mt-3 d-block d-md-none" />
            <h1 className="fs-2 text-uppercase title_About mt-4">{t('h1_about_2')}</h1>
            <p className="p_about">{t('p1_about')}</p>
            <p className="p_about">{t('p2_about')}</p>
            <p className="p_about">{t('p3_about')}</p>
            <p className="p_about">{t('p4_about')}</p>
          </div>

          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="img-container">
              <img src={imgabout} className="img-fluid zoom-effect" alt="" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="row container mb-3">
          <div className="col-sm-6 mb-3 mb-sm-0 order-2 order-lg-2">
            <div className="card border-0">
              <h3 className="fs-4 textColor text-uppercase">{t('aucuneSignature')}</h3>
              <p className="p_about">{t('text_info')}</p>
            </div>
          </div>
          <div className="col-sm-6 order-1 order-lg-1">
            <div className="card border-0">
              <h3 className="fs-4 text-uppercase textColor">{t('specifications')}</h3>
              <ul className="ul_about">
                <li>{t('Regularoccasionalservice')}</li>
                <li>{t('Majorcleaning')}</li>
                <li>{t('Cleaningafterrenovation')}</li>
                <li>{t('Cleaningbeforeoraftermoving')}</li>
                <li>{t('Cleaningofcondominiumcommonareas')}</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="hr_about container mb-3" />


        <div className="row container py-4 px-2">

          <div className="col-12 col-lg-7 order-2 order-lg-1">
            <div className="img-container">
              <img src={img2about} className="img-fluid zoom-effect mt-2" alt="" loading="lazy" />
            </div>
          </div>

          <div className="col-12 col-lg-5 order-1 order-lg-1">

            <h1 className="fs-2 text-uppercase title_About mt-2">{t('h1_about_3')}</h1>
            <p className="p_about">{t('p1_about3')}</p>
            <p className="p_about">{t('p2_about3')}</p>
            <p className="p_about">{t('p3_about3')}</p>
            <p className="p_about">{t('p4_about3')}</p>
          </div>

        </div>

        <div className="row container mb-3">
          <div className="col-12 col-lg-5 order-1 order-lg-2">
            <h3 className="fs-4 text-uppercase textColor">{t('specifications')}</h3>
            <ul className="ul_about">
              <li>{t('Entretienbureaux')}</li>
              <li>{t('menageprintemps')}</li>
              <li>{t('cirageplancher')}</li>
              <li>{t('Polissageplancher')}</li>
              <li>{t('Nettoyagetissue')}</li>
              <li>{t('Sallesbaincuisines')}</li>
              <li>{t('Lavagemursplafonds')}</li>
              <li>{t('Nettoyageceramique')}</li>
            </ul>
          </div>

          <div className="col-12 col-lg-7 order-2 order-lg-1">
            <p className="p_about">{t('controlQualite_p1')}</p>
            <p className="p_about">{t('controlQualite_p2')}</p>
            <p className="p_about">{t('controlQualite_p3')}</p>
            <p className="p_about">{t('controlQualite_p4')}</p>
          </div>
        </div>

        <hr className="hr_about container" />

        <div className="card-group py-5 px-4 container">
          <div className="card border-0">
            <h3 className="fs-4 text-uppercase textColor">{t('notreclientele')}</h3>
            <ul className="ul_about">
              <li>{t('Bureaux')}</li>
              <li>{t('Cliniques')}</li>
              <li>{t('Instituts')}</li>
              <li>{t('Espaces')}</li>
              <li>{t('Concessionnaires')}</li>
              <li>{t('Garderies')}</li>
            </ul>
          </div>
          <div className="card border-0">
            <h3 className="fs-4 text-uppercase textColor">{t('plantravail')}</h3>
            <p className="p_about">{t('p_planTravail')}</p>
            <h3 className="fs-4 text-uppercase">{t('h3_planTravail')}</h3>
            <a className="text-decoration-none linkAbout" href="/contact"> <BiLinkExternal className="me-2" />{t('nav_drop_item6')}</a>
          </div>
        </div>
        <div>
        </div>
      </section>
    </>
  );
};

export default About;