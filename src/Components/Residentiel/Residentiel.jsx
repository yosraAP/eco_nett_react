import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import imgResidentielWork from '../../Assets/residentielPlanTravail.jpg'
import imgSalledeBain from '../../Assets/imgSalledeBain.jpg'
import imgResidentiel3 from '../../Assets/imgResidentiel3.gif'
import imgResidentiel4 from '../../Assets/imgresidentiel4.webp'

// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];

const LANGUAGE_COOKIE_KEY = 'i18next';

const Residentiel = () => {
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
      <section>
        <div className="about container">
          <div className="row py-4">
            <div className="col-12 col-lg-5 order-1 order-lg-1">
              <h2 className="fs-2 text-uppercase title_About">{t('nav_drop_item1')}</h2>
              <h3 className="fs-6 mb-4 text-uppercase"><a className="text-decoration-none textColor" href="/about">{t('titre_residentiel_work')}</a></h3>
              <h2 className="text-uppercase fs-4 textColor">{t('cuisine')}</h2>
              <ul className="ul_about">
                <li>{t('li_cuisine1')}</li>
                <li>{t('li_cuisine2')}</li>
                <li>{t('li_cuisine3')}</li>
                <li>{t('li_cuisine4')}</li>
                <li>{t('li_cuisine5')}</li>
                <li>{t('li_cuisine6')}</li>
              </ul>

              <h2 className="text-uppercase fs-4 mt-3 textColor">{t('h2_sallemanger')}</h2>
              <ul className="ul_about">
                <li>{t('li_sallemanger1')}</li>
                <li>{t('li_sallemanger2')}</li>
                <li>{t('li_cuisine6')}</li>
              </ul>

            </div>

            <div className="col-12 col-lg-7 p-5 order-2 order-lg-1">
              <div className="img-container">
                <img src={imgResidentielWork} className="img-fluid zoom-effect" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <hr className="hr_about container" />

        <div className="px-4 py-5 mt-5 container">
          <div className="row py-4 px-2">

            <div className="col-12 col-lg-7 order-2 order-lg-1">
              <div className="img-container">
                <img src={imgSalledeBain} className="img-fluid zoom-effect mt-2" alt="" loading="lazy" />
              </div>
            </div>
            <div className="col-12 col-lg-5 order-1 order-lg-1 d-flex flex-column justify-content-center">
              <h2 className="text-uppercase fs-4 mt-3 textColor">{t('h2_salledeBain')}</h2>
              <ul className="ul_about">
                <li>{t('li_saleDeBain1')}</li>
                <li>{t('li_saleDeBain2')}</li>
                <li>{t('li_saleDeBain3')}</li>
                <li>{t('li_saleDeBain4')}</li>
                <li>{t('li_saleDeBain5')}</li>
                <li>{t('li_saleDeBain6')}</li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="hr_about container" />

        <div className="row container py-4 px-2">

          <div className="col-12 col-lg-7 order-2 order-lg-2">
            <div className="img-container">
              <img src={imgResidentiel3} className="img-fluid zoom-effect mt-2" alt="" loading="lazy" />
            </div>
          </div>

          <div className="col-12 col-lg-5 order-1 order-lg-1 d-flex flex-column justify-content-center">
            <h2 className="text-uppercase fs-4 mt-3 textColor">{t('h2_escalierVestibule')}</h2>
            <ul className="ul_about">
              <li>{t('li_escalierVestibule1')}</li>
              <li>{t('li_escalierVestibule2')}</li>
              <li>{t('li_escalierVestibule3')}</li>
              <li>{t('li_escalierVestibule4')}</li>
              <li>{t('li_escalierVestibule5')}</li>
            </ul>
          </div>

        </div>



        <hr className="hr_about container" />

        <div className="row container py-4 px-2">

          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <div className="img-container">
              <img src={imgResidentiel4} className="img-fluid zoom-effect mt-2" alt="" loading="lazy" />
            </div>
          </div>

          <div className="col-12 col-lg-7 order-1 order-lg-2 d-flex flex-column justify-content-center">
            <h2 className="text-uppercase fs-4 mt-3 textColor">{t('h2_salle')}</h2>
            <ul className="ul_about">
              <li>{t('li_salle1')}</li>
              <li>{t('li_salle2')}</li>
              <li>{t('li_salle3')}</li>
              <li>{t('li_salle4')}</li>
              <li>{t('li_salle5')}</li>
              <li>{t('li_salle6')}</li>
            </ul>
          </div>

        </div>
      </section>'
    </>
  );
};

export default Residentiel;
