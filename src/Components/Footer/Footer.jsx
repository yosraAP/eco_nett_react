import React, { useEffect } from "react";
import './footer.css';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { GiEcology } from 'react-icons/gi';


// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];



const LANGUAGE_COOKIE_KEY = 'i18next';

const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <p>{new Date().getFullYear()} <GiEcology className="iconLogo" /> EcoNett</p>

        {/* Icônes de médias sociaux */}
        <ul className="social-links">
          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter className="icon" /></a></li>
          <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className="icon" /></a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><PiInstagramLogoFill className="icon" /></a></li>
          <li><a href="https://www.whatsapp.com/?lang=fr_FR" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp className="icon" /></a></li>
        </ul>

        {/* Liens du pied de page */}
        <ul className="footer-links">
          <li><a href="/">{t('navbar_Acceuil')}</a></li>
          <li><a href="/contact">{t('nav_drop_item6')}</a></li>
          <li><a href="/confidentialite">{t('a_politiqueconfidentialite')}</a></li>
          <li><a href="/plan-du-site">Plan du site</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
