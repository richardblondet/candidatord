import React from 'react';
import { CandidateProfile } from './Candidate';

/**
 * View candidate page Component
 * 
 * Requires candidate ID 
 * @param props 
 */
const ViewCandidate : React.FC = () => {
  return (
    <>
      
      <div className="card card-fluid shadow">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col ml-md-n2">
              <CandidateProfile 
                name="Mencia"
                party="PLD"
                picture="https://preview.webpixels.io/quick-website-ui-kit/assets/img/theme/light/person-auth.jpg"
              />
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-xs btn-primary btn-icon rounded-pill">
                <span className="btn-inner--text">Guardar</span>
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id iure veniam corporis? Aliquid sequi numquam at fugiat perspiciatis earum dolor vitae soluta, facere, aspernatur enim molestias voluptatum mollitia cumque quaerat!
          </p>
        </div>
      </div>
      <div className="card card-fluid shadow mt-3">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">Categoría 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categoría 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
              </li>
            </ul>
        </div>
        <div className="card-body">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex align-items-center">
                <div className="flex-fill ml-3">
                  {/* <div className="h6 text-sm mb-0">Alex Michael <small className="float-right text-muted">2 hrs ago</small></div> */}
                  <p className="text-sm lh-140 mb-0">Some quick example text to build on the card title.</p></div>
                </div>
              </a>
          </div>
        </div>
      </div>
    </>
  )
};

export default ViewCandidate;