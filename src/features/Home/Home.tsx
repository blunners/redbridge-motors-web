import React from 'react';
import styled from 'styled-components';
import us from '../../assets/rod-and-elaine.jpg';
import { Link } from 'react-router-dom';
import Routes from '../../shared/Routes';

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
        <p>We have a wealth of experience in finding what our customers really want. We can't stock everything, but give us a brief and we'll find exactly what you're looking for, in a timely manner.
          We have multiple tools and contacts at our fingertips, to help us source what you require.
          Click <Link to={Routes.findMyCar}>here</Link> to send us your requirements and we'll get back to you ASAP.</p>
        <h2>We Part Exchange</h2>
        <p>Have an old vehicle that you'd like to use to help towards the cost of your new wheels? We are happy to give you a competitive price for
          you current vehicle to help you cover the cost of your shiny new one. For a no onbligation quote, give us a call on&nbsp;
          <a href="tel:01733321923">01733 321923</a> or contact us via <a href="mailto:sales@redbridgemotors.co.uk">sales@redbridgemotors.co.uk</a>.
        </p>
        <h2>We Offer Flexible Finance Packages</h2>
        <p>Why wait for your dream car? We work closely with finance providers to get you a competitive rate towards your new purchase.</p>
      </div>
      <div className="col">
        <Family src={us} className="img-fluid" />
      </div>
    </div>
  </>
);
