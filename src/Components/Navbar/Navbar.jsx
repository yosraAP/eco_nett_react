import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import { TbInfoSquareFilled } from 'react-icons/tb';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import logoEcoNett from '../../Assets/logoEcoNett.png';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';
import { GiEcology } from 'react-icons/gi'
import { MdContactSupport } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import 'flag-icon-css/css/flag-icon.min.css';


// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];


const LANGUAGE_COOKIE_KEY = 'i18next';

// Composant pour l'icône du globe
const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)

// Composant principal pour la barre de navigation
function Navigation() {

  // Utilisation du hook pour la navigation
  const navigate = useNavigate();
  // Fonction utilitaire pour naviguer vers différentes pages.
  // Si la page actuelle correspond à la page cible, elle recharge la page.
  // Sinon, elle navigue vers le chemin spécifié et, éventuellement, défile jusqu'à un divId donné.
  const goToPage = (path, divId) => {
    if (window.location.pathname === path) {
      window.location.reload();
    } else {
      navigate(path, { state: { scrollTo: divId } });
    }
  };

  // Fonction pour naviguer vers la page À Propos
  const goToAboutPage = () => goToPage('/about', 'aboutPage');

  // Fonction pour naviguer vers la page Résidentiel
  const goToResidentialPage = () => goToPage('/residentiel', 'residentielPage');

  // Fonction pour naviguer vers la page Commercial
  const goToCommercialPage = () => goToPage('/commercial', 'commercialPage');

  // Fonction pour naviguer vers la page Bureau
  const goToBureauPage = () => goToPage('/bureau', 'bureauPage');

  // Fonction pour naviguer vers la page Post-Construction
  const goToPostConstructionPage = () => goToPage('/apresConstruction', 'PostConstructionId');

  // Fonction pour naviguer vers la page Post-Rénovation
  const goToPostRenovationPage = () => goToPage('/apresRenovation', 'apresRenovation');

  // Fonction pour naviguer vers la page Airbnb
  const goToAirbnbPage = () => goToPage('/airbnb', 'airbnbPage');

  // Fonction pour naviguer vers la page Contact
  const goToContactPage = () => goToPage('/contact', 'contactPage');

  // Variables d'état pour contrôler la visibilité des panneaux gauche et droit (ou modaux)
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Fonction pour afficher le panneau gauche et masquer le panneau droit
  const handleShowLeft = () => {
    setShowLeft(true);
    setShowRight(false);
  };

  // Fonction pour afficher le panneau droit et masquer le panneau gauche
  const handleShowRight = () => {
    setShowRight(true);
    setShowLeft(false);
  };

  // Fonction pour masquer le panneau gauche
  const handleCloseLeft = () => setShowLeft(false);

  // Fonction pour masquer le panneau droit
  const handleCloseRight = () => setShowRight(false);


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
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar" fixed="top">
        <Container>
          <div className="d-flex justify-content-between w-100">
            <a href="/" className="d-none d-lg-block">
              <img src={logoEcoNett} className="logo" alt="" />
            </a>
            <div className="menuNavbar">
              <Navbar.Collapse id="basic-navbar-nav" className="navContent d-none d-md-block">
                <Nav className="me-auto">
                  <Nav.Link href="/">{t('navbar_Acceuil')}</Nav.Link>
                  <Nav.Link onClick={goToAboutPage}>{t('navbar_À-Propos')}</Nav.Link>
                  <NavDropdown title={<Link to="/workPlan" className="text-decoration-none">{t('dropdown_title')}</Link>} id="basic-nav-dropdown">
                    <NavDropdown.Item className="p-3" href="#residentiel">{t('nav_drop_item1')}</NavDropdown.Item>
                    <NavDropdown.Item className="p-3" href="#commercial">{t('nav_drop_item2')}</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={goToResidentialPage}>{t('nav_drop_item1')}</Nav.Link>
                  <NavDropdown title={t('dropdown_title1')} id="basic-nav-dropdown">
                    <NavDropdown.Item className="p-3" onClick={goToCommercialPage}>{t('nav_drop_item2')}</NavDropdown.Item>
                    <NavDropdown.Item className="p-3" onClick={goToBureauPage}>{t('nav_drop_item3')}</NavDropdown.Item>
                    <NavDropdown.Item className="p-3" onClick={goToPostConstructionPage}>{t('nav_drop_item4')}</NavDropdown.Item>
                    <NavDropdown.Item className="p-3" onClick={goToPostRenovationPage}>{t('nav_drop_item5')}</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={goToAirbnbPage}>Airbnb</Nav.Link>
                  <Nav.Link onClick={goToContactPage}>{t('nav_drop_item6')}</Nav.Link>
                </Nav>
                <div className="d-flex justify-content-end align-items-center language-select-root">
                  <div className="dropdown">
                    <button
                      className="btnLang ms-4 dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <GlobeIcon />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li className="pb-0">
                        <span className="dropdown-item-text">{t('language')}</span>
                      </li>
                      {languages.map(({ code, name, country_code }) => (
                        <li key={country_code}>
                          <button
                            className={classNames('dropdown-item', {
                              disabled: currentLanguageCode === code,
                            })}
                            onClick={() => {
                              i18next.changeLanguage(code);
                            }}
                          >
                            <span
                              className={`flag-icon flag-icon-${country_code} mx-2`}
                              style={{
                                opacity: currentLanguageCode === code ? 0.5 : 1,
                              }}
                            ></span>
                            {name}
                          </button>
                        </li>

                      ))}
                    </ul>
                  </div>
                </div>
              </Navbar.Collapse>
            </div>
            <div>
              <CgMenuGridO onClick={handleShowLeft} aria-controls="offcanvasNavbarLeft" className="icon-large position-absolute start-0" />
              <Offcanvas show={showLeft} onHide={handleCloseLeft} placement="start">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabelLeft">
                    <GiEcology className="icon me-2" />{t('Offcanvas_Title')}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="navContent justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" onClick={handleCloseLeft}>{t('navbar_Acceuil')}</Nav.Link>
                    <Nav.Link onClick={() => {goToAboutPage();handleCloseLeft();}}>{t('navbar_À-Propos')}</Nav.Link>
                    <NavDropdown title={<Link to="/workPlan" className="text-decoration-none">{t('dropdown_title')}</Link>} id="basic-nav-dropdown">
                    <NavDropdown.Item className="p-3" href="#residentiel" onClick={handleCloseLeft}>{t('nav_drop_item1')}</NavDropdown.Item>
                    <NavDropdown.Item className="p-3" href="#commercial" onClick={handleCloseLeft}>{t('nav_drop_item2')}</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={() => {goToResidentialPage();handleCloseLeft();}}>{t('nav_drop_item1')}</Nav.Link>
                    <NavDropdown title={t('dropdown_title1')} id="basic-nav-dropdown">
                      <NavDropdown.Item className="p-3" onClick={() => {goToCommercialPage();handleCloseLeft();}}>{t('nav_drop_item2')}</NavDropdown.Item>
                      <NavDropdown.Item className="p-3" onClick={() => {goToBureauPage();handleCloseLeft();}}>{t('nav_drop_item3')}</NavDropdown.Item>
                      <NavDropdown.Item className="p-3" onClick={() => {goToPostConstructionPage();handleCloseLeft();}}>{t('nav_drop_item4')}</NavDropdown.Item>
                      <NavDropdown.Item className="p-3" onClick={() => {goToPostRenovationPage();handleCloseLeft();}}>{t('nav_drop_item5')}</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={() => {goToAirbnbPage();handleCloseLeft();}}>Airbnb</Nav.Link>
                    <Nav.Link onClick={() => {goToContactPage();handleCloseLeft();}}>{t('nav_drop_item6')}</Nav.Link>
                  </Nav>

                </Offcanvas.Body>
              </Offcanvas>
            </div>
            <div className="d-flex justify-content-end align-items-center d-lg-none position-absolute end-0">
              <div className="dropdown">
                <button
                  className="btnLang me-4 dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <GlobeIcon />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {languages.map(({ code, country_code }) => (
                    <li key={country_code}>
                      <button
                        className={classNames('dropdown-item', {
                          disabled: currentLanguageCode === code,
                        })}
                        onClick={() => {
                          i18next.changeLanguage(code);
                        }}
                        aria-label={`Change language to ${code}`}
                        disabled={currentLanguageCode === code}
                      >
                        <span
                          className={`flag-icon flag-icon-${country_code} mx-2`}
                          style={{
                            opacity: currentLanguageCode === code ? 0.5 : 1,
                          }}
                        ></span>
                        {code}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <TbInfoSquareFilled onClick={handleShowRight} aria-controls="offcanvasNavbarRight" className="icon-large d-lg-none" />
              <Offcanvas show={showRight} onHide={handleCloseRight} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabelRight">
                    <MdContactSupport className="icon me-2" />{t('Offcanvas_Title1')}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/contact"><BsTelephoneFill />514-451-7284</Nav.Link>
                    <Nav.Link href="/contact"><FaMapMarkerAlt />1111 Dr Frederik-Philips 6 Eme Etage Saint-Laurent, QCH4M 2X6</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </Container>
      </Navbar>
      <div className="d-block d-lg-none text-center p-2 divLogo" >
        <a href="/">
          <img src={logoEcoNett} className="logo mt-5 mb-2" alt="" />
        </a>
      </div>

    </>
  )
}

export default Navigation;
