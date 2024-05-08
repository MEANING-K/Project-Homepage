/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Box = styled.div`
  background-color: yellow;
  color: gray;
  font-size: 10pt;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0.5rem;
`;

export function Footer() {
  return (
    <Box>
      <Link
        to="/info"
        style={{ textDecoration: 'none', color: 'gray', fontSize: '11pt' }}
      >
        Info
      </Link>
      <br />
      <span>© 2024. MEANING-K</span>
    </Box>
  );
}
