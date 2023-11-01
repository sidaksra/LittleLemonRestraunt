import React from 'react';
import SubHeader from './SubHeader.jsx';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <SubHeader />
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>About Little Lemon Restaurant</h1>
            <p>Welcome to Little Lemon Restaurant, a culinary haven where we turn fresh ingredients into delightful dishes that leave your taste buds craving for more. Our commitment to quality and excellence is what sets us apart.</p>

            <p>At Little Lemon, we understand the art of creating memorable dining experiences. Our team of passionate chefs and dedicated staff work tirelessly to ensure your visit is nothing short of extraordinary.</p>

            <p>Explore a diverse menu that celebrates flavors from around the world, made with locally sourced ingredients and a touch of creativity. Whether it's a romantic dinner, a family celebration, or a casual get-together, we have the perfect dining option for every occasion.</p>

            <p>Come and savor the essence of Little Lemon Restaurant, where every dish tells a story, and every visit becomes a cherished memory.</p>

            <Link to="/menu" className="hero-btn red-btn">View Menu</Link>
          </div>
          <div className="about-col">
            <img src={require("../images/dessert.jpg")} alt="Restaurant Image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
