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
  padding: 2rem 1rem;
`;

export function MyPage() {
  return (
    <>
      <Helmet>
        <title>MyPage</title>
        <meta name="description" content="MyPage" />
      </Helmet>
      <Header />
      <Box>This is MyPage</Box>
      <Footer />
    </>
  );
}
