/* eslint-disable prettier/prettier */
import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Header } from 'app/components/Header';
import { Footer } from 'app/components/Footer';

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Info() {
  return (
    <>
      <Helmet>
        <title>Info</title>
        <meta name="description" content="Info" />
      </Helmet>
      <Header />
      <Box>
        <h1>Info Page</h1>
      </Box>
      <Footer />
    </>
  );
}
