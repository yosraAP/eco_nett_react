import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import Home from '../Home/Home'
import Forms from '../FormContact/Formcontact';
import imgCommercial from '../../Assets/img (1).jpg'
import imgCommercial2 from '../../Assets/img2Commercial.jpg'
import imgEntreeVitree from '../../Assets/imgEntreeVitree.webp'
import imgBureau from '../../Assets/imgBuraux.jpg'
import imgPasserAspirateur from '../../Assets/passerAspirateur.jpg'
import imgSallesEau from '../../Assets/img (3).jpg'
import imgCouloirs from '../../Assets/imgCouloirs.png'

// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];
const LANGUAGE_COOKIE_KEY = 'i18next';

const CommercialPage = () => {

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
              <h1 className="text-center fs-1 text-uppercase mt-5 mb-0 h1_about">{t('h1_commercialPage')} </h1>
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

      <div className="secDiv" id="commercialPage">
        <div class="px-4 py-5 text-center bg-body-tertiary">
          <div class="col-lg-5 mx-auto">
            <h3 class="p_residentiel mb-4">{t('h3_commercialPage')}</h3>
          </div>
        </div>



        <div className="mx-auto col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center">

            <div className="col-12 col-sm-12 col-lg-6 order-2 order-lg-2">
              <div className="img-container">
                <img src={imgCommercial} className="zoom-effect mt-3" alt="" />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <h2 className="fs-4 fw-normal text-uppercase title_Res">{t('h2_commercialPage')}</h2>
              <p className="p_about mt-4">{t('p1_commercialPage')}</p>
              <p className="p_about mt-2">{t('p2_commercialPage')}</p>
              <div class="titleRes-box">
                <h3 className="fw-normal fs-4">{t('h3_commercialPage2')}</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="Style_sec mt-3 mb-3">
        <div className="bg-sec-title">
          <div class="px-4 py-5 text-center">
            <div class="col-lg-12 text-uppercase mx-auto">
              <h1 class="fs-2">{t('PourNousConfier')}</h1>
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
              <img src={imgCommercial2} className="zoom-effect mt-3" alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-1">
            <h2 className="fs-4 fw-normal text-uppercase title_Res">{t('solideExperience')} </h2>
            <p className="p_about mt-4">{t('dispositionEquipe')}</p>
            <ul className="ul_about">
              <li>{t('li_dispositionEquipe1')}</li>
              <li>{t('li_dispositionEquipe2')}</li>
              <li>{t('li_dispositionEquipe3')}</li>
              <li>{t('li_dispositionEquipe4')}</li>
              <li>{t('li_dispositionEquipe5')}</li>
              <li>{t('li_dispositionEquipe6')}</li>
            </ul>
            <p className="p_about mt-4" >{t('lieuTravailImpeccable')}</p>
            <div class="titleRes-box">
              <h3 className="fw-normal fs-4">{t('deplaçonsToutEntretien')} </h3>
            </div>
          </div>

        </div>
      </div>

      <hr className="hr_about container" />

      <div className="px-4 py-5 mt-5 container">
        <div className="row py-4 px-2">

          <div className="col-12 col-lg-7 order-2 order-lg-2">
            <div className="img-container">
              <img src={imgEntreeVitree} className="img-fluid zoom-effect mt-2" alt="" loading="lazy" />
            </div>
          </div>
          <div className="col-12 col-lg-5 order-1 order-lg-1 d-flex flex-column justify-content-center">
            <h2 className="text-uppercase fs-4 mt-3 textColor">{t('EntreeVitree')}</h2>
            <ul className="ul_about">
              <li>{t('li_EntreeVitree1')}</li>
              <li>{t('li_EntreeVitree2')}</li>
              <li>{t('li_EntreeVitree3')}</li>
            </ul>
          </div>

        </div>
      </div>


      <hr className="hr_about container" />

      <div className="px-4 py-5 mt-5 container">
        <div className="row py-4 px-2">

          <div className="col-12 col-lg-7 order-2 order-lg-2">
            <div className="img-container">
              <img src={imgBureau} className="img-fluid zoom-effect mt-2" alt="" loading="lazy" />
            </div>
          </div>
          <div className="col-12 col-lg-5 order-1 order-lg-1 d-flex flex-column justify-content-center">
            <h2 className="text-uppercase fs-4 mt-3 textColor">{t('lesbureaux')}</h2>
            <ul className="ul_about">
              <li>{t('li_lesbureaux1')}</li>
              <li>{t('li_lesbureaux2')}</li>
              <li>{t('li_lesbureaux3')}</li>
              <li>{t('li_lesbureaux4')}</li>
              <li>{t('li_lesbureaux5')}</li>
              <li>{t('li_lesbureaux6')}</li>
              <li>{t('li_lesbureaux7')}</li>
              <li>{t('li_lesbureaux8')}</li>
              <li>{t('li_lesbureaux9')}</li>
              <li>{t('li_lesbureaux10')}</li>
            </ul>
          </div>

        </div>
      </div>


      <hr className="hr_about container" />

      <div className="px-4 py-5 mt-5 container">
        <div className="row py-4 px-2">

          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <div className="img-container">
              <img src={imgPasserAspirateur} className="img-fluid zoom-effect mt-2" alt="" loading="lazy" />
            </div>
          </div>
          <div className="col-12 col-lg-7 order-1 order-lg-2 d-flex flex-column justify-content-center">
            <h2 className="text-uppercase fs-4 mt-3 textColor">{t('menage_salleReunion')}</h2>
            <ul className="ul_about">
              <li>{t('li_menage_salleReunion1')}</li>
              <li>{t('li_menage_salleReunion2')}</li>
              <li>{t('li_menage_salleReunion3')}</li>
              <li>{t('li_menage_salleReunion4')}</li>
              <li>{t('li_menage_salleReunion5')}</li>
              <li>{t('li_menage_salleReunion6')}</li>
              <li>{t('li_menage_salleReunion7')}</li>
              <li>{t('li_menage_salleReunion8')}</li>
              <li>{t('li_menage_salleReunion9')}</li>
              <li>{t('li_menage_salleReunion10')}</li>
            </ul>
          </div>

        </div>
      </div>

      <hr className="hr_about container" />

      <div className="container row">

        <div className="col-lg-6 col-12 col-sm-12 order-2 order-lg-1">
          <div className="imgAbout">
            <div className="img-cafeteria" style={{ backgroundPosition: 'left' }}></div>
            <div className="img-cafeteria" style={{ backgroundPosition: 'center' }}></div>
            <div className="img-cafeteria" style={{ backgroundPosition: 'right' }}></div>
          </div>
        </div>

        <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex flex-column justify-content-center">
          <h2 className="text-uppercase fs-4 mt-3 textColor">{t('lesCafeterias')}</h2>

          <ul className="ul_about">
            <li>{t('li_lesCafeterias1')}</li>
            <li>{t('li_lesCafeterias2')}</li>
            <li>{t('li_lesCafeterias3')}</li>
            <li>{t('li_lesCafeterias4')}</li>
            <li>{t('li_lesCafeterias5')}</li>
            <li>{t('li_lesCafeterias6')}</li>
            <li>{t('li_lesCafeterias7')}</li>
            <li>{t('li_lesCafeterias8')}</li>
            <li>{t('li_lesCafeterias9')}</li>
            <li>{t('li_lesCafeterias10')}</li>
          </ul>
        </div>

      </div>

      <hr className="hr_about container" />

      <div className="px-4 py-5 mt-5 container">
        <div className="row py-4 px-2">

          <div className="col-12 col-lg-6 order-2 order-lg-2">
            <div className="img-container">
              <img src={imgSallesEau} className="img-fluid zoom-effect mt-2" alt="" loading="lazy" />
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-1 d-flex flex-column justify-content-center">
            <h2 className="text-uppercase fs-4 mt-3 textColor">{t('sallesUrinoirs')}</h2>
            <ul className="ul_about">
              <li>{t('li_sallesUrinoirs1')}</li>
              <li>{t('li_sallesUrinoirs2')}</li>
              <li>{t('li_sallesUrinoirs3')}</li>
              <li>{t('li_sallesUrinoirs4')}</li>
              <li>{t('li_sallesUrinoirs5')}</li>
              <li>{t('li_sallesUrinoirs6')}</li>
            </ul>
          </div>

        </div>
      </div>

      <hr className="hr_about container" />

      <div className="px-4 py-5 mt-5 container">
        <div className="row py-4 px-2">

          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="img-container">
              <img src={imgCouloirs} className="img-fluid zoom-effect mt-2" alt="" loading="lazy" />
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex flex-column justify-content-center">
            <h2 className="text-uppercase fs-4 mt-3 textColor">{t('lesCouloirs')}</h2>
            <ul className="ul_about">
              <li>{t('li_lesCouloirs1')}</li>
              <li>{t('li_lesCouloirs2')}</li>
              <li>{t('li_lesCouloirs3')}</li>
              <li>{t('li_lesCouloirs4')}</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default CommercialPage;
