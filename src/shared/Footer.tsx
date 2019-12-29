import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #fa4047;
  opacity: 0.9;
`

const Footer = () =>
  <StyledFooter className="p-3">
    <div className="container text-light">
    Redbridge Motor Company Ltd.
    </div>
  </StyledFooter>

export { Footer };