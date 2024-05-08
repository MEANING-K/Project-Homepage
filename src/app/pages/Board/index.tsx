/* eslint-disable prettier/prettier */
import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Header } from 'app/components/Header';
import { Footer } from 'app/components/Footer';
import { ContentsContainer } from 'app/components/ContentsContainer';

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;

export function Board() {
  return (
    <>
      <Helmet>
        <title>Board</title>
        <meta name="description" content="Board" />
      </Helmet>
      <Header />
      <Box>
        <ContentsContainer />
      </Box>
      <Footer />
    </>
  );
}
