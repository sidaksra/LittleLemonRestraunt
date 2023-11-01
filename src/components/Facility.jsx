import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <section className="facility">
        <h1>Little Lemon Restaurant Menu</h1>
        <div className="row">
          <div className="facility-col">
            <img src={require("../images/appetizer.jpg")} alt="Appetizer" />
            <h3><Link to='/appetizers'>Appetizers</Link></h3>
            <p>Start your meal with our delicious appetizers that will tantalize your taste buds. Perfect for sharing or enjoying on your own.</p>
          </div>
          <div className="facility-col">
            <img src={require("../images/main_dishes.jpg")} alt="Main Dishes" />
            <h3><Link to='/main-dishes'>Main Dishes</Link></h3>
            <p>Explore our selection of mouthwatering main dishes. From savory entrees to delectable seafood, we have something for everyone.</p>
          </div>
          <div className="facility-col">
            <img src={require("../images/pasta.jpg")} alt="Pasta" />
            <h3><Link to='/pasta'>Pasta</Link></h3>
            <p>Indulge in our flavorful pasta dishes, prepared with the finest ingredients and a variety of delicious sauces.</p>
          </div>
          <div className="facility-col">
            <img src={require("../images/salad.jpg")} alt="Salad" />
            <h3><Link to='/salads'>Salads</Link></h3>
            <p>Enjoy our fresh and healthy salad options made with locally sourced ingredients and homemade dressings.</p>
          </div>
          <div className="facility-col">
            <img src={require("../images/dessert.jpg")} alt="Desserts" />
            <h3><Link to='/desserts'>Desserts</Link></h3>
            <p>Indulge in our sweet and tempting desserts that will satisfy your sweet tooth. A perfect ending to your meal.</p>
          </div>
          <div className="facility-col">
            <img src={require("../images/drinks.jpg")} alt="Drinks" />
            <h3><Link to='/drinks'>Drinks</Link></h3>
            <p>Quench your thirst with our wide range of beverages. From refreshing cocktails to non-alcoholic options, we have it all.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
