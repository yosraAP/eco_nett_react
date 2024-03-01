import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';
import img1 from '../../Assets/img (1).jpg';
import img2 from '../../Assets/img (2).png';
import img3 from '../../Assets/img (3).jpg';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import { MdUnfoldMore } from 'react-icons/md';
import Aos from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

// Configuration des langues prises en charge
const languages = [
    { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
    { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
    { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
  ];
  

const LANGUAGE_COOKIE_KEY = 'i18next';

const Main = () => {
    const navigate = useNavigate();

    // Fonction pour naviguer vers une page spécifique et éventuellement rafraîchir la page
    const goToPage = (path, divId) => {
        if (window.location.pathname === path) {
            window.location.reload();
        } else {
            navigate(path, { state: { scrollTo: divId } });
        }
    };

    // Fonctions de raccourci pour naviguer vers des pages spécifiques
    const goToResidentialPage = () => goToPage('/residentiel', 'residentielPage');
    const goToCommercialPage = () => goToPage('/commercial', 'commercialPage');
    const goToBureauPage = () => goToPage('/bureau', 'bureauPage');

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
      

    // Configuration des informations des services à afficher
    const Data = [
        { id: 1, imgSrc: img1, titleService: t('nav_drop_item3'), onClick: goToBureauPage },
        { id: 2, imgSrc: img2, titleService: t('nav_drop_item1'), onClick: goToResidentialPage },
        { id: 3, imgSrc: img3, titleService: t('nav_drop_item2'), onClick: goToCommercialPage },
    ];

    // Initialisation des animations AOS
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="main container section">
            <h1 className="display-5 text-center mt-lg-3 fw-bold mb-3">{t('titre_main')}</h1>
            <div className="secContent grid">
                {Data.map(({ id, imgSrc, titleService, onClick }) => (
                    <div key={id} className="singleService d-flex flex-column align-items-center">
                        <div className="imgDiv">
                            <img src={imgSrc} alt={titleService} className="img-fluid" />
                        </div>

                        <div className="cardInfo text-center text-md-left">
                            <h4 className="titleService">{titleService}</h4>
                            <button className="btnMain flex mx-auto mx-md-0" onClick={onClick}>
                                {t('a_main')}<MdUnfoldMore className="iconMain" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div data-aos="fade-up" className="text-center">
                <h1 className="fs-1 mt-4 p-3 text-uppercase fs-md-2">{t('h1_main')}</h1>
                <p className="fs-4 w-75 mx-auto text-center fs-md-4">{t('p_main')}</p>
            </div>
        </section>
    );
};

export default Main;
