import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #fa4047;
  opacity: 0.9;
  font-family: 'Raleway';

  a {
    color: inherit;
    text-decoration: underline;
  }
`

const Footer = () =>
  <StyledFooter className="p-3">
    <div className="container">
      <div className="row text-light">
        <div className="col-md-5">
          <div className="d-none d-md-block">Question? Contact us @ <a href="mailto:sales@redbridgemotors.co.uk">sales@redbridgemotors.co.uk</a></div>
        </div>
        <div className="col text-right">
          © Redbridge Motor Company Ltd.
        </div>
      </div>
    </div>
  </StyledFooter>

export { Footer };