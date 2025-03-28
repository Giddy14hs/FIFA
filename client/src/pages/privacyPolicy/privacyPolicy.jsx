import React from 'react';
import './privacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      
      <section className="policy-section">
        <h2>1. Introduction</h2>
        <p>
          At Brighter World Ltd, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
        </p>
      </section>

      <section className="policy-section">
        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul>
          <li>Register for an account</li>
          <li>Apply for a loan</li>
          <li>Contact us for support</li>
          <li>Subscribe to our newsletters</li>
        </ul>
        <p>This information may include:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Financial information</li>
          <li>Government-issued identification</li>
        </ul>

        <h3>2.2 Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Usage patterns</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process your loan applications</li>
          <li>Communicate with you about our services</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
          <li>Protect against fraud and unauthorized transactions</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>4. Information Sharing</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Service providers and business partners</li>
          <li>Regulatory authorities</li>
          <li>Law enforcement when required by law</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>5. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="policy-section">
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
          <li>File a complaint with regulatory authorities</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: brighterworld22@gmail.com
          <br />
          Phone: 0720328587 or 0103228576
          <br />
          Address: BRIGHTER WORLD LTD, P.O BOX 6332-00300, NAIROBI/KENYA
        </p>
      </section>

      <section className="policy-section">
        <h2>8. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
      </section>

      <div className="last-updated">
        Last Updated: March 22, 2024
      </div>
    </div>
  );
};

export default PrivacyPolicy; 