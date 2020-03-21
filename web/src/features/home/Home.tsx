import React from 'react';
import styled from 'styled-components';
import us from '../../assets/rod-and-elaine.jpg';
import { Email, Phone } from '../../shared/Constants';

const Family = styled.img`
  padding: 1rem;
`;

export default () => (
  <>
    <h1>Welcome</h1>
    <div className="row">
      <div className="col-md-9">
        <p className="lead">Hi, thank you for visiting our website</p>
        <p>We specialise in the procurement of vans and cars of all makes &amp; ilks, be it low budget or high budget, sports or prestige etc.</p>
        <p>Redbridge Motor Company is one of the longest established motor businesses in the Peterborough/Cambridgeshire area. The business is run by husband-wife team, Rod &amp; Elaine Blundell.</p>
        <h2>We Procure/Stock</h2>
        <p>We now operate from our home office &amp; procure as well as stock cars &amp; vans.</p>
        <p>We have a wealth of trade knowledge and experience to hand to supply your new vehicle; prestige, sports, van, or the daily run around.</p>
        <h2>We Purchase &amp; Part Exchange</h2>
        <p>Have an old vehicle that you'd like to use to help towards the cost of your new wheels? We are happy to give you a competitive price for
          you current vehicle to help you cover the cost of your shiny new one. For a no obligation quote, give us a call on&nbsp;
          <a href={`tel:${Phone}`}>07976 843677</a> or contact us via <a href={`mailto:${Email}`}>sales@redbridgemotors.co.uk</a>.
        </p>
        <h2>We Offer Flexible Finance Packages</h2>
        <p>Why wait for your dream car? We are FCA approved, which allows us to work closely with finance providers to get you a competitive rate towards your new purchase.</p>
      </div>
      <div className="col">
        <Family src={us} className="img-fluid" />
      </div>
    </div>
  </>
);
