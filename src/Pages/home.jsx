import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Restaurant from '../components/Restaurant';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import Fedwell from '../assets/Fedwell.png'
import Burgreens from '../assets/Burgreens.png'
import Saladstop from '../assets/Saladstop.png'

export function Home(){
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedRestaurant(null);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Restaurant onRestaurantClick={handleRestaurantClick} />
      <Footer />
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          {selectedRestaurant === 'Fedwell' && (
            <Popup 
              restaurant="Fed Well Restaurant"
              imageRestaurant={Fedwell}
              description="Are you a picky eater that don't like vegetables? Well, Fedwell bisa memberikan kesan yang berbeda dengan berbagai pilihan healthy food-nya yang super lengkap.."
              onClose={closePopup}
            />
          )}
          {selectedRestaurant === 'Burgreens' && (
            <Popup 
              restaurant="Burgreens Restaurant"
              imageRestaurant={Burgreens}
              description="Burgreens is the leading plant-based food chain in Indonesia specializing in delicious Asian & Western cuisines. We believe that what we eat directly impacts our health, farmers' welfare, and environmental sustainability. Burgreens was started very humbly in November 2013 by a young vegan couple – Max & Helga – who are passionate about making a healthy and sustainable lifestyle mainstream in their hometown; while testing a social enterprise model that marries positive social impact and financial sustainability."
              onClose={closePopup}
            />
          )}
          {selectedRestaurant === 'Saladstop' && (
            <Popup 
              restaurant="Saladstop Restaurant"
              imageRestaurant={Saladstop}
              description="SaladStop! is a leader in providing fresh, healthy salads, wraps, super protein bowls, and activated smoothies. With over 80 outlets worldwide, SaladStop! is well-positioned for further and sustained growth fueled by the global lifestyle trend towards healthy eating. The brand believes that eating well should never be a compromise, ensuring customers always have access to delicious and nutritious options."
              onClose={closePopup}
            />
          )}
        </div>
      )}
    </div>
  )
}
