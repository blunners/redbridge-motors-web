import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #e5e5e5;
`

const Footer = () =>
  <StyledFooter className="p-3">
    <div className="container">
    Redbridge Motor Company Ltd.
    </div>
  </StyledFooter>

export { Footer };