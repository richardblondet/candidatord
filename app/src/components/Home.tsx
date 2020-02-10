import React, { Fragment, useContext, useEffect, useState } from 'react';
import { State } from '../store';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { setSearchTerm, setSearchBoxState } from '../actions';

import { FiX } from 'react-icons/fi';
import { Input, InputGroup, InputGroupAddon, InputGroupText, Container, Row, Col, Button } from 'reactstrap';

interface IQueryParams {
  q?:string
}

/**
 * SearchBox Component
 * 
 * Independent functional component seen in the Home page that handles user Input and sends signal to app via context
 */
const SearchBox: React.FC = () => {
  const { state: { searchBox }, dispatch } = useContext(State);
  const location = useLocation();
  const history = useHistory();
  
  // console.log("location", location);
  console.log("SearchBox", searchBox);
  
  /**
   * Keep the search state updated upon mounting
   */
  useEffect(() => {
    const query:IQueryParams = queryString.parse(location.search);

    if (query.q && searchBox.term !== query.q ){
      dispatch(setSearchTerm(query.q));
    }
  });

  /**
   * Dispatch and set the term in query
   * @param term String
   */
  const sendSearchTerm = (term:string) => {
    dispatch(setSearchTerm(term));
    history.push(`${location.pathname}?${queryString.stringify({ q: term })}`);
  }

  /**
   * Handle the onChange event for SearchBox
   * @param e Event
   */
  const onChangeHandler = (e:any) => {
    e.preventDefault();
    sendSearchTerm(e.target.value);
  };
  
  /**
   * Handle the onFocus event for SearchBox
   * @param e Event
   */
  const onFocusHandler = (e:any) => {
    e.preventDefault();
    dispatch(setSearchBoxState('focus'));
  };

  /**
   * Handle the onBlur event for SearchBox
   * @param e Event
   */
  const onBlurHandler = (e:any) => {
    e.preventDefault();
    dispatch(setSearchBoxState('idle'));
  };

  /**
   * Handle the onBlur event for SearchBox
   * @param e Event
   */
  const onClearHandler = (e:any) => {
    e.preventDefault();
    sendSearchTerm('');
  };
  

  return (
    <>
      <InputGroup>
        <Input 
          type="text" 
          name="candidate" 
          className={`shadow ${searchBox.state  === 'focus' ? "" : "border-white"}`}
          onChange={onChangeHandler} 
          placeholder="Buscar . . ."
          value={searchBox.term || ''}  // '' avoids uncontrolled warning
          onFocus={onFocusHandler} 
          onBlur={onBlurHandler}
        />
        {searchBox.term ? <InputGroupAddon addonType="append" className="border-white shadow">
          <Button color="white" className="border-0 pl-3 pr-3" onClick={onClearHandler}>
            <FiX />
          </Button>
        </InputGroupAddon> : '' }
      </InputGroup>
    </>
  );
};

const SearchWrapper = ({ children }:{ children:React.ReactNode }) => {
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

const Results : React.FC = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (results.length < 1){
      fetch('/api/candidates')
        .then(response => response.json())
        .then(json => setResults(json));
    }
  });

  console.log("%c results", "font-size:2em;", results);
  // <code>{JSON.stringify(results)}</code>
  return (
    <div>Results here</div>
  )
}

/**
 * Home page Component
 * @param props 
 */
const Home : React.FC = (props:any) => {
  // console.log("%c props", "font-size:2em;", props);
  

  return (
    <Fragment>
      <header>
        <div id="search">
          <SearchWrapper>
            <SearchBox />
          </SearchWrapper>
        </div>
      </header>
      <div id="results-wrapper">
        <Results />
      </div>
    </Fragment>
  );
};

export default Home;