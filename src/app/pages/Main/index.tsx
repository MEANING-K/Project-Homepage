import { Footer } from 'app/components/Footer';
import { Header } from 'app/components/Header';
import { MainBody } from 'app/components/MainBody';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function Main() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Main" />
      </Helmet>
      <Header />
      <MainBody />
      <Footer />
    </>
  );
}
