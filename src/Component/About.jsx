import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

export const About = () => {
  return (
    <div className='container my-2'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About this Lab
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This website is designed to assist users in transforming</strong> their text into uppercase letters, as well as providing insights into word and character counts. Additionally, it aims to estimate the time required to read the text. Future enhancements may include additional functionalities to further enhance user experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
