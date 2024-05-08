/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ContentsContainer } from '../ContentsContainer';

const Box = styled.div`
  background-color: lightblue;
  width: 100%;
  padding: 2rem 1rem;
`;

const Span = styled.span`
  color: black !important;
  font-size: 15pt;
  font-weight: bold;
`;

export function MainBody() {
  return (
    <Box>
      <Link to="/board" style={{ textDecoration: 'none' }}>
        <Span>Board</Span>
      </Link>
      <hr
        style={{
          width: '100%',
          height: '2px',
          border: 'none',
          backgroundColor: 'black',
        }}
      />
      <ContentsContainer />
    </Box>
  );
}
