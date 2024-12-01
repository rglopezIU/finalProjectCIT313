import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Marathon Prep</h1>
        <p>Your ultimate guide to preparing for marathon success!</p>
      </div>
      <div className="about-content">
        <section className="about-description">
          <h2>What is Marathon Prep?</h2>
          <p>
            Marathon Prep is designed to help runners of all levels achieve their goals, whether it's completing
            your first marathon or smashing your personal best. Our platform provides training schedules,
            nutrition advice, and expert tips to prepare you for race day.
          </p>
        </section>
        <section className="about-benefits">
          <h2>Why Choose Marathon Prep?</h2>
          <ul>
            <li>Personalized training plans tailored to your pace and goals.</li>
            <li>Expert guidance to prevent injuries and maximize performance.</li>
            <li>Nutrition and hydration strategies for optimal energy.</li>
            <li>Community support to keep you motivated and accountable.</li>
            <li>Event details and registration assistance for upcoming races.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
