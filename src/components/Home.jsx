import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import Facility from './Facility.jsx'

const Home = () => {
  return (
    <>
    <Header/>
    <Facility/>     
    <section className="testimonials">
        <h1>What Our Customers Say</h1>
        <p>See What Our Satisfied Customers Have to Say About Our Food and Service</p>
        <div className="row">
          <div className="testimonial-col">
            <img src={require("../images/qoutes.png")} alt="Quotation Mark" />
            <div>
              <p>"The food here is absolutely amazing. I couldn't get enough of the delicious dishes. The service was exceptional too."</p>
              <h3>Sarah Johnson</h3>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
          <div className="testimonial-col">
            <img src={require("../images/qoutes.png")} alt="Quotation Mark" />
            <div>
              <p>"I had the best dining experience here. The food was top-notch, and the service was impeccable. I highly recommend this restaurant."</p>
              <h3>John Smith</h3>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </div>
            </div>
          </div>
          <div className="testimonial-col">
            <img src={require("../images/qoutes.png")} alt="Quotation Mark" />
            <div>
              <p>"This restaurant never disappoints. The food is consistently fantastic, and the staff goes above and beyond to make your experience memorable."</p>
              <h3>Linda Brown</h3>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h1>Experience the Flavors You Crave</h1>
        <p>Discover Culinary Excellence and Exceptional Service at Our Restaurant</p>
        <Link to="/book" className="button-27">Reserve your Table</Link>
      </section>
    </>
  )
}

export default Home
