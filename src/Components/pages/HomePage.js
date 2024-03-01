import React from 'react'
import Home from '../Home/Home'
import Main from '../Main/Main'
import InfoCommercial from '../InfoCommercial/InfoCommercial'
import MenageCommercial from '../MenageCommercial/MenageCommercial'
import InfoResidentiel from '../InfoResidentiel/InfoResidentiel'
import MenageResidentiel from '../MenageResidentiel/MenageResidentiel'
import Contact from '../Contact/Contact'
import Offre from '../OffreEcoNett/Offre'


const HomePage = () => {
  return (
    <>
     <Home/>
     <Main/>
     <InfoCommercial/>
     <MenageCommercial/>
     <InfoResidentiel/>
     <MenageResidentiel/>
     <Offre/>
     <Contact/>
    </>
  );
};

export default HomePage;