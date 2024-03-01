import React, { useEffect }from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import Home from '../Home/Home'
import Forms from '../FormContact/Formcontact';
import imgPostConstruction1 from '../../Assets/entretienApresConstruction1.jpg'
import imgPostConstruction2 from '../../Assets/entretienApresConstruction2.jpg'

// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];
const LANGUAGE_COOKIE_KEY = 'i18next';



const PostConstruction = () => {
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
      <section>
        <div className="divStyle">
          <div className="container-fluid residentiel-content">
            <div className="container col-xxl-8 col-md-10 mx-auto px-2 py-4 ">
              <h1 className="text-center fs-1 text-uppercase mt-5 mb-0 h1_about">{t('h1_postConstruction')}</h1>
              <h2 className="title_h2 fs-3">{t('h2_airbnb')}</h2>
              <div className="row flex-lg-row-reverse align-items-center">
                <div className="col-lg-4 col-md-6 mx-auto order-1 order-lg-2 p-3">
                  <h2 className="fw-bold fs-2 text-start"><span>{t('Nos_Services')}</span></h2>
                  <ul className="ul_about fs-5">
                    <li>{t('li_service1')}</li>
                    <li>{t('li_service2')}</li>
                    <li>{t('li_service3')}</li>
                    <li>{t('li_service4')}</li>
                  </ul>

                  <h2 className="fw-bold fs-2 text-start"><span>{t('Nosgaranties')}</span></h2>
                  <ul className="ul_about fs-5">
                    <li>{t('li_garantie1')}</li>
                    <li>{t('li_garantie2')}</li>
                    <li>{t('li_garantie3')}</li>
                    <li>{t('li_garantie4')}</li>
                    <li>{t('li_garantie5')}</li>
                  </ul>


                  <h2 className="fw-bold fs-2 text-start"><span>{t('zoneServices')}</span></h2>
                  <ul className="ul_about fs-5">
                    <li>{t('li_zone1')}</li>
                    <li>{t('li_zone2')}</li>
                    <li>{t('li_zone3')}</li>
                  </ul>

                </div>

                <div className="col-10 col-sm-8 col-lg-5 p-3 mb-5 col-md-6 mx-auto border rounded-3 bg-body-tertiary order-2 order-lg-1 form-container">
                  <Forms />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="secDiv" id="PostConstructionId">
        <div class="px-4 py-5 text-center bg-body-tertiary">
          <div class="col-lg-5 mx-auto">
            <h3 class="p_residentiel mb-4">{t('h3_ConfiezNous')}</h3>
          </div>
        </div>



        <div className="mx-auto col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center">

            <div className="col-12 col-sm-12 col-lg-6 order-2 order-lg-2">
              <div className="img-container">
                <img src={imgPostConstruction1} className="zoom-effect mt-3" alt="" />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <h2 className="fs-4 fw-normal text-uppercase title_Res p-2">{t('h2_postConstruction')}</h2>
              <p className="p_about mt-4">{t('P1_construction')}</p>
              <p className="p_about mt-2">{t('P2_construction')}</p>
              <div class="titleRes-box">
                <h3 className="fw-normal fs-4 p-2">{t('agentsOrganises')}</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="Style_sec mt-3 mb-3">
        <div className="bg-sec-title">
          <div class="px-4 py-5 text-center">
            <div class="col-lg-12 text-uppercase mx-auto">
              <h1 class="fs-2">{t('h1_service_podtConstruntion')}</h1>
            </div>
            <div class="col-lg-5 mx-auto">
              <h1> <kbd className="bg-kdb">514-451-7284</kbd></h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center">

          <div className="col-12 col-sm-12 col-lg-6 order-2 order-lg-2">
            <div className="img-content">
              <img src={imgPostConstruction2} className="zoom-effect mt-3" alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-1">
            <h2 className="fs-4 fw-normal text-uppercase title_Res">{t('experimenteePostConstruction')}</h2>
            <p className="p_about mt-2 p-2">{t('P_garantissons')}</p>
            <ul className="ul_about">
              <li>{t('li_garantissons1')}</li>
              <li>{t('li_garantissons2')}</li>
              <li>{t('li_garantissons3')}</li>
              <li>{t('li_garantissons4')}</li>
            </ul>
            <p className="p_about mt-2 p-2" >{t('p_Sollicitez_service')}</p>
            <div class="titleRes-box">
              <h3 className="fw-normal fs-4 p-2">{t('h3_travailMinutieux')}</h3>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PostConstruction;
