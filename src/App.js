// Importation des bibliothèques, styles et composants nécessaires
import React from 'react'
import 'flag-icon-css/css/flag-icon.min.css'; // Styles pour les icônes de drapeaux
import './App.css'; // Styles principaux pour l'application
import About from './Components/pages/About'; // Page "À propos"
import Airbnb from './Components/pages/Airbnb'; // Page pour Airbnb
import WorkPlan from './Components/pages/WorkPlan'; // Page "Plan de travail"
import ContactUs from './Components/pages/ContactUs'; // Page "Contactez-nous"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Bibliothèque de routage pour React
import HomePage from './Components/pages/HomePage'; // Page d'accueil
import 'bootstrap/dist/js/bootstrap.js'; // JavaScript pour Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Styles CSS pour Bootstrap
import Navbar from './Components/Navbar/Navbar'; // Composant de la barre de navigation
import Footer from './Components/Footer/Footer'; // Composant du pied de page
import BureaulPage from './Components/pages/Bureau'; // Page "Bureau"
import CommercialPage from './Components/pages/Commercial'; // Page "Commercial"
import ResidentielPage from './Components/pages/Residentiel'; // Page "Résidentiel"
import PostRenovation from './Components/pages/PostRenovation'; // Page "Après rénovation"
import PostConstruction from './Components/pages/PostConstruction'; // Page "Après construction"

// Composant principal de l'application

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/workPlan" element={<WorkPlan />} />
          <Route path="/residentiel" element={<ResidentielPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/bureau" element={<BureaulPage />} />
          <Route path="/apresConstruction" element={<PostConstruction />} />
          <Route path="/apresRenovation" element={<PostRenovation />} />
          <Route path="/airbnb" element={<Airbnb />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App