import React, { Component } from 'react';

class FAQ extends Component {
  state = {}
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="accordion margin-top pt-md-3" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How to register?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatibus. Expedita, fugit quia? Commodi, ullam autem corrupti voluptatum dolore architecto debitis saepe maiores tempore quia quo rerum hic eaque! Cupiditate.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  How to register?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatibus. Expedita, fugit quia? Commodi, ullam autem corrupti voluptatum dolore architecto debitis saepe maiores tempore quia quo rerum hic eaque! Cupiditate.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  How to register?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatibus. Expedita, fugit quia? Commodi, ullam autem corrupti voluptatum dolore architecto debitis saepe maiores tempore quia quo rerum hic eaque! Cupiditate.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    );
  }
}

export default FAQ;