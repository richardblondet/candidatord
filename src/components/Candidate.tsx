import React from 'react';
import { Card, CardHeader, Row, Col, CardBody } from 'reactstrap';
/**
 * Candidate Presentation Name
 * @param props CandidateProps
 *
 * @todo create interface for props
 * @todo create a fallback for image with initials
 */
export const CandidateProfile = (props:any) => {
  const { name, party, picture } = props;
  return (
    <div className="d-flex align-items-center">
      {picture && <div>
        <img src={picture} className="rounded-circle" width="64" />
      </div>}
      <div className="flex-fill ml-3">
        <div className="h6 text-sm mb-0">
          {name}
        </div>
        <small className="text-muted text-uppercase mt-1">{`@${party}`}</small>
      </div>
    </div>  
  );
};

const ProposalsCategories = (props:any) => {
  return (
    <div>Hello World</div>
  );
};

/**
 * Single Candidate Component
 * @param props Candidate Card View
 */
export const CandidateCard = (props:any) => {
  return (
    <>
      <Card className="shadow">
        <CardHeader className="bg-white">
          <Row className="align-items-center">
            <Col className="ml-md-n2">
              <CandidateProfile 
                name="Mencia"
                party="PLD"
                picture="https://preview.webpixels.io/quick-website-ui-kit/assets/img/theme/light/person-auth.jpg"
              />
            </Col>
            <Col className="col-auto">
              <button type="button" className="btn btn-xs btn-primary btn-icon rounded-pill">
                <span className="btn-inner--text">Guardar</span>
              </button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row>
            <Col className="text-center">
              <span className="h5 mb-0">Alcalde</span>
              <span className="d-block text-sm text-muted">Candidatura</span>
            </Col>
            <Col className="text-center">
              <span className="h5 mb-0">D.N.</span>
              <span className="d-block text-sm text-muted">Distrito/Municipio</span>
            </Col>
          </Row>
        </CardBody>
        <CardBody className="border-top">
          <span className="d-block text-sm text-muted">Extracto:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id iure veniam corporis? Aliquid sequi numquam at fugiat perspiciatis earum dolor vitae soluta, facere, aspernatur enim molestias voluptatum mollitia cumque quaerat!
          </p>
        </CardBody>
      </Card>
      {/* Candidate proposals categories */}
      <div className="card card-fluid shadow mt-3">
        <CardHeader className="bg-white border-light">
          <h2>Propuestas</h2>
        </CardHeader>
        <div className="card-header bg-light border-light">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Categoría 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categoría 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
        {/* Candidate proposals list */}
        <div className="card-body">
          <div className="list-group list-group-flush">
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
  );
};
