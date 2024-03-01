import React, { useState, useRef, useEffect } from "react";
import './formContact.css'
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import { Modal, Button, Form } from 'react-bootstrap';



// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];



const LANGUAGE_COOKIE_KEY = 'i18next';

function Forms() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const form = useRef();

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
  


  const [state, setState] = useState({
    demande: "",
    details: "",
    nomComplet: "",
    telephone: "",
    email: "",
    termsAndConditions: false
  });

  const [showReCaptcha, setShowReCaptcha] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const timerRef = useRef(null);

  // Gérer l'affichage du ReCaptch
  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setShowReCaptcha(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setShowReCaptcha(false), 2300);
  };

  const handleRecaptchaChange = value => setRecaptchaValue(value);
  const [errors, setErrors] = useState({});

  // Gérer les changements dans les champs du formulaire
  const handleChange = (event) => {
    const { id, value, checked, type } = event.target;

    setState(prevState => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value
    }));
  }

  // Valider et soumettre le formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifier la validité des champs du formulaire
    const newErrors = {};
    if (!state.demande) newErrors.demande = "Champ obligatoire";
    if (!state.details) newErrors.details = "Champ obligatoire";
    if (!state.nomComplet) newErrors.nomComplet = "Champ obligatoire";
    if (!state.telephone) newErrors.telephone = "Champ obligatoire";
    if (!state.email) newErrors.email = "Champ obligatoire";
    if (!state.termsAndConditions) newErrors.termsAndConditions = "Champ obligatoire";
    if (!recaptchaValue) newErrors.recaptcha = 'Please verify that you are not a robot.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Lien vers le service EmailJs pour envoyer des e-mails : https://www.emailjs.com/
      emailjs.sendForm('service_m5h3bys', 'template_5fxt25n', form.current, 'yof0rvS1FzToCYeNJ')
        .then((result) => {
          console.log(result.text);
          setModalMessage(t('msg_success')); // Message de succès
          setShowModal(true);
        }, (error) => {
          console.log(error.text);
          setModalMessage(t('msg_error')); // Message d'erreur
          setShowModal(true);
        });
      event.target.reset()
      setState({
        demande: "",
        details: "",
        nomComplet: "",
        telephone: "",
        email: "",
        termsAndConditions: false
      });
    }
  }

  return (
    <>
      <Form
        ref={form}
        onSubmit={handleSubmit}
        className="mb-3 p-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <Form.Group controlId="demande">
          <h1 className="fs-4 text-start mb-3">{t('h1_formContact')}</h1>
          <Form.Control className="mb-3 form-select" name="demande" as="select" value={state.demande} onChange={handleChange} isInvalid={!!errors.demande}>
            <option>{t('option_select')}</option>
            <option>{t('option1_select')}</option>
            <option>{t('option2_select')}</option>
          </Form.Control>
          <Form.Control.Feedback type='invalid'>
            {errors.demande}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="details">
          <Form.Control
            name="details"
            className="mb-3"
            as="textarea"
            rows={3}
            placeholder={t('text_demande')}
            value={state.details}
            onChange={handleChange}
            isInvalid={!!errors.details}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.details}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="nomComplet">
          <Form.Control
            name="nomComplet"
            className="mb-3"
            type="text"
            placeholder={t('text_nomComplet')}
            value={state.nomComplet}
            onChange={handleChange}
            isInvalid={!!errors.nomComplet}

          />
          <Form.Control.Feedback type='invalid'>
            {errors.nomComplet}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="telephone">
          <Form.Control
            name="telephone"
            className="mb-3"
            type="text"
            placeholder={t('text_telephone')}
            value={state.telephone}
            onChange={handleChange}
            isInvalid={!!errors.telephone}

          />
          <Form.Control.Feedback type='invalid'>
            {errors.telephone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control
            name="email"
            className="mb-3"
            type="email"
            placeholder={t('text_email')}
            value={state.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="termsAndConditions" className="mt-2">
          <Form.Check
            className="label_c"
            type="checkbox"
            label={t('text_termsAndConditions')}
            checked={state.termsAndConditions}
            onChange={handleChange}
            isInvalid={!!errors.termsAndConditions}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.termsAndConditions}
          </Form.Control.Feedback>
        </Form.Group>

        {showReCaptcha && (
          <Form.Group controlId="recaptcha" className="mt-2 ms-4">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleRecaptchaChange}
              />
            {errors.recaptcha && <div className="invalid-feedback d-block">{errors.recaptcha}</div>}
          </Form.Group>
        )}

        <Button className="btn mt-3 mb-3" variant="primary" type="submit">
          {t('text_button')}
        </Button>
        {showReCaptcha && (
          <p className="p_form mt-2">
            {t('p_politiqueConfidentialite')}
            {t('a_politiqueconfidentialite')}
          </p>
        )}
      </Form>

      <Modal className="centered-modal" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalMessage.includes('erreur') ? t('title_model_erreur') : t('title_model_success')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            {t('btn_Modal_close')}
          </Button>
        </Modal.Footer>
      </Modal>

    </>

  );
}

export default Forms;
