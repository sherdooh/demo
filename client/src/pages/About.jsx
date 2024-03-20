import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CTA from "../pages/CTA";

function AboutUs() {
  return (
    <div className="bg-gray-100">
      <Header />
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Join Us Today!</h2>
          <p className="text-lg mb-3">
            We're passionate about sharing valuable health insights.
            Our team of experts curates articles to empower you on your wellness journey. Explore, learn, and thrive with us!
          </p>

        </div>
      </section>

      {/* Add the About section here */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            <strong>Our Inspirational Journey</strong><br />
            This project was born out of a shared passion for health and a desire to make quality health articles more accessible.
            It all started when we embarked on a mission to create something meaningful.
          </p>
          <p className="mb-4">
            <strong>Why We Do What We Do:</strong><br/>

            Our journey began when ALX presented us with the opportunity to combine our technical skills with our shared vision.
            This project is a labor of love and a testament to our dedication to making a positive impact on the world
          </p>
          <p className="mb-4">
            <strong>Who We Are:</strong><br/>
            Meet the passionate minds behind this project:

            <p className="mb-4">

            </p>
            {/* Team Member 1 */}
            <p className="mb-2">
              <a href="https://www.linkedin.com/in/shadrack-kiplangat-4282b9109/" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a> |{' '}
              <a href="https://github.com/sherdooh" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">GitHub Profile</a> |{' '}
              <a href="https://twitter.com/iamkopolo" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">Twitter Profile</a> - [Shadrack Kiplangat]
            </p>
            {/* Team Member 2 */}
            <p className="mb-2">
              <a href="link-to-linkedin-2" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a> |{' '}
              <a href="link-to-github-2" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">GitHub Profile</a> |{' '}
              <a href="link-to-twitter-2" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">Twitter Profile</a> - [Nneoma Okoye]
            </p>
            {/* Team Member 3 */}
            <p className="mb-2">
              <a href="link-to-linkedin-3" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a> |{' '}
              <a href="link-to-github-3" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">GitHub Profile</a> |{' '}
              <a href="link-to-twitter-3" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">Twitter Profile</a> - [Chukwu Chigozie Stanley]
            </p>


          </p>
          <p>
            <strong>Explore Our Project</strong><br />
            <strong>Front:<br /></strong>
            <a href="https://github.com/sherdooh/clientend" className="text-custom-color hover:underline" target="_blank" rel="noopener noreferrer">Front-end - Github</a><br/>
            <strong>Back:<br /></strong> 
           <a href="https://github.com/NneomaOkoye/Health-Blog-Using-the-MERN-stack-" className="text-custom-color hover:underline" target="_blank" rel="noopener noreferrer">Back-end - Github</a><br/>
          </p>
        </div>
      </section>

      <Link to="/register">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              Get Started
            </button>
          </Link>

      <CTA />
    </div>
  );
}

export default AboutUs;
