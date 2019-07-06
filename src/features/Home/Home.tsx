import React from 'react';
import Img from '../../assets/rod-and-elaine.jpg';
import { Column, FlexGrid } from '../../shared/FlexGrid';

export default () => (
  <FlexGrid>
    <Column>Hey</Column>
    <Column><img src={Img} /></Column>
  </FlexGrid>
);
