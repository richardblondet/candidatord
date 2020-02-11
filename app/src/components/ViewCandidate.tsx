import React from 'react';
import { CandidateProfile, CandidateCard } from './Candidate';
import { Container, Row, Col } from 'reactstrap';


/**
 * Simple wrapper component
 * @param param
 * @todo this component is repeated (DRY)
 */
const ViewCandidateWrapper = ({ children } : { children:React.ReactNode }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs="12" sm={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>{children}</Col>
        </Row>
      </Container>
    </>
  );
};
/**
 * View candidate page Component
 * 
 * Requires candidate ID 
 * @param props 
 */
const ViewCandidate : React.FC = () => {
  return (
    <>
      <ViewCandidateWrapper>
        <CandidateCard />
      </ViewCandidateWrapper>
    </>
  )
};

export default ViewCandidate;