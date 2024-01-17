// Home.jsx
import React from 'react';
import img from '../../assest/algoicon.png';
import './Home.css';

const Home = () => {
  return (
    <section className="icon-show" id="home">
      <div className="icon-container">
        <div className="icon">
          <img
            src={img}
            className="d-inline-block align-top img-fluid animated-image"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="icon-text">
          <h3 className='text-heading'>Sorting Visualization</h3>
          <p className='quote-text'>
            <i className="fa fa-quote-left"></i>&nbsp;Understand the Sorting concept
            by visualizing it&nbsp;better&nbsp;
            <i className="fa fa-quote-right"></i>
          </p>
          <button className="btn" onClick={() => window.location.href = '/sorting'}>
            Get Started&nbsp;&nbsp;<i className="fa fa-chevron-circle-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
