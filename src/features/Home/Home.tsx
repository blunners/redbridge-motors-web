import React from 'react';
import styled from 'styled-components';
import us from '../../assets/rod-and-elaine.jpg';

const Family = styled.img`
`;

export default () => (
  <>
    <h1>Welcome</h1>
    <div className="row">
      <div className="col-md-9">
        <p className="lead">We're Redbridge. Your local, family run business offering quality used cars for over 20 years.</p>
        <p>Redbridge Motor Company is one of the longest established motor businesses in the Peterborough/Cambridgeshire area.
          The business is run by Rod & Elaine Blundell.
        </p>
        <p>To remain competitive and reduce overheads we now operate from our own home and primarily source cars on request. 
          We have a wealth of trade knowledge and experience to source both the car of your dreams, and the daily run around.
        </p>
        <h2>We Source</h2>
        <h2>We Part Exchange</h2>
        <h2>We Offer Flexible Finance Packages</h2>
      </div>
      <div className="col">
        <Family src={us} className="img-fluid" />
      </div>
    </div>
  </>
);