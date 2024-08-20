import React, { useEffect, useState } from 'react';
import './branches.css'; // Your custom CSS for additional styling

const Branches = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate content loading
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="content" className="p-5">
      {contentLoaded ? (
        // Loaded content
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Head Office</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Kitengela Office</h6>
                <p className="card-text">
                  <ol>
                    <li>PENA TOWERS Building along Kajiado road</li>
                    <li>Tel:0720328587 OR 0103228576</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Kisumu Branch</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">ALMIRAN PLAZA</h6>
                <p className="card-text">
                  <ol>
                    <li>Nyamasaria, along Kisumu Nairobi Highway</li>
                    <li>Tel:0726937367</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Kariobangi Office</h5>
                <p className="card-text">
                  <ol type="square">
                    <li>Cooperative Bank Building, 1st Floor</li>
                    <li>Tel:0753666303 OR 0771850408</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Placeholder content
        <>
          <div className="placeholder-glow">
            <span className="placeholder col-6"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-8"></span>
          </div>
          <div className="placeholder-glow">
            <span className="placeholder col-6"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-8"></span>
          </div>
        </>
      )}
    </div>
  );
};

export default Branches;
