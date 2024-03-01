import React, { useEffect } from 'react';
import './offre.css';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import { MdOutlineGppGood } from 'react-icons/md';
import { TbMoodDollar } from 'react-icons/tb';
import { AiTwotoneLike } from 'react-icons/ai';
import { GiEcology } from 'react-icons/gi';


// Configuration des langues prises en charge
const languages = [
  { code: 'fr', name: 'Français', country_code: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', country_code: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Espanol', country_code: 'es', dir: 'ltr' },
];



const Offre = () => {
  const currentLanguageCode = cookies.get('i18next') || 'fr'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    if (currentLanguage) {
      document.body.dir = currentLanguage.dir;
      document.title = t('app_title');
    }
  }, [currentLanguage, t]);
  
  return (
    <section className="offre">
      <div className="container px-4 py-5">
        <h2 className="fs-1 pb-2 mb-2 title_offre text-capitalize">{t('h2_offre')}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex">
            <div className="custom-column">
              <div className="icon-container">
                <MdOutlineGppGood className="iconEcoNett" />
              </div>
              <div>
                <h3 className="h3_title_offre">{t('h3_offre1')}</h3>
                <p className="fs-6">{t('p_offre1')}</p>
              </div>
              <div></div>
            </div>
          </div>

          <div className="col d-flex">
            <div className="custom-column">
              <div className="icon-container">
                <TbMoodDollar className="iconEcoNett" />
              </div>
              <div>
                <h3 className="h3_title_offre">{t('h3_offre2')}</h3>
                <p className="fs-6">{t('p_offre2')}</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="col d-flex">
            <div className="custom-column">
              <div className="icon-container">
                <AiTwotoneLike className="iconEcoNett" />
              </div>
              <div>
                <h3 className="h3_title_offre">{t('h3_offre3')}</h3>
                <p className="fs-6">{t('p_offre3')}</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="col d-flex">
            <div className="custom-column">
              <div className="icon-container">
                <GiEcology className="iconEcoNett" />
              </div>
              <div>
                <h3 className="h3_title_offre">{t('h3_offre4')}</h3>
                <p className="fs-6">{t('p_offre4')}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offre;
