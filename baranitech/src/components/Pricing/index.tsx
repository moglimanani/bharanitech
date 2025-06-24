import React from 'react';
import { StyledH2, StyledpriceCol, StyledpriceRow } from './styles';
import { Grid } from '@mui/material';

function PricingTable() {
  return (
    <>
    <StyledH2>Choose Your Plan</StyledH2>
    <StyledpriceRow>
      <StyledpriceCol>
        <p>Started</p>
        <h3>19$ <span>/ month</span></h3>
        <ul>
          <li>1 Website</li>
          <li>10 GB Disk Space </li>
          <li>Free Email Address</li>
          <li>Basic Web Builder</li>
          <li>No SSL Certificate</li>
          <li>Limited Support</li>
        </ul>
        <button>Add to Cart</button>
      </StyledpriceCol>
      <StyledpriceCol>
        <p>Advanced</p>
        <h3>19$ <span>/ month</span></h3>
        <ul>
          <li>1 Website</li>
          <li>10 GB Disk Space </li>
          <li>Free Email Address</li>
          <li>Basic Web Builder</li>
          <li>No SSL Certificate</li>
          <li>Limited Support</li>
        </ul>
        <button>Add to Cart</button>
      </StyledpriceCol>
      <StyledpriceCol>
        <p>Premium</p>
        <h3>19$ <span>/ month</span></h3>
        <ul>
          <li>1 Website</li>
          <li>10 GB Disk Space </li>
          <li>Free Email Address</li>
          <li>Basic Web Builder</li>
          <li>No SSL Certificate</li>
          <li>Limited Support</li>
        </ul>
        <button>Add to Cart</button>
      </StyledpriceCol>
    </StyledpriceRow>
  </>
  );
}

export default PricingTable;