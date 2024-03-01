import React, { useEffect } from 'react';
import video from '../../Assets/video.mp4';
import { GoLocation } from 'react-icons/go';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import { Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css';
import './home.css';

// Configuration des langues prises en charge
const languages = [
    { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
    { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
    { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
  ];
  
  

const LANGUAGE_COOKIE_KEY = 'i18next';

const Home = () => {
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
        <section className="home">
            <div className="overlay"></div>
            <video src={video} type="video/mp4" autoPlay muted loop></video>

            <div className="homeContent container d-none d-sm-none d-lg-block">
                {/* Section d'informations de contact */}
                <div className="bgDiv mb-4 p-4 rounded-4">
                    <Row className="d-flex align-items-center justify-content-center">
                        {/* Adresse */}
                        <Col lg={4} md={12} sm={12}>
                            <label><GoLocation className="icon" />1111 Dr Frederik-Philips 6 Eme Etage Saint-Laurent, QCH4M 2X6</label>
                        </Col>

                        {/* Numéro de téléphone */}
                        <Col lg={4} md={12} sm={12} className="text-center">
                            <span><BsFillTelephoneFill className="icon" />514-451-7284</span>
                        </Col>

                        {/* Lien vers la carte Google Maps */}
                        <Col lg={4} md={12} sm={12} className="bg-image">
                            <a href='https://goo.gl/maps/J4Npuurr6zSKZRJB6' target='_blank' rel="noreferrer" className="text-center text-decoration-none">
                                <h2 className="mt-4">{t('h2_home')}</h2>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default Home;
