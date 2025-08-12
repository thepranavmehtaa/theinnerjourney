import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="coming-soon-container">
        <div className="content">
          <div className="logo">
            <h1 className="company-name">The Inner Journey</h1>
            <div className="logo-divider"></div>
          </div>

          <div className="main-content">
            <h2 className="coming-soon-title">Coming Soon</h2>
            <p className="tagline">
              Embark on a transformative journey of healing and self-discovery
            </p>

            {/* <div className="therapist-info">
              <h3 className="therapist-name">Arushi Suri</h3>
              <p className="therapist-title">Therapist & Wellness Guide</p>
            </div> */}

            <div className="services-preview">
              <h4>Our Services Will Include:</h4>
              <ul className="services-list">
                <li>Individual Therapy Sessions</li>
                <li>Mindfulness & Meditation</li>
                <li>Trauma-Informed Care</li>
                <li>Anxiety & Depression Support</li>
                <li>Personal Growth & Development</li>
                <li>Holistic Wellness Approaches</li>
              </ul>
            </div>

            <div className="contact-info">
              <p>For inquiries and appointments, please contact:</p>
              <p className="email">arushisuri@theinnerjourney.in</p>
            </div>

            {/* <div className="newsletter-signup">
              <h4>Stay Updated</h4>
              <p>Be the first to know when we launch</p>
              <div className="signup-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="email-input"
                />
                <button className="signup-button">Notify Me</button>
              </div>
            </div> */}
          </div>

          <footer className="footer">
            <p>&copy; 2025 The Inner Journey. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
