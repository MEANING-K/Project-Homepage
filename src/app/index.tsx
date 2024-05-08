/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { Main } from './pages/Main';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Board } from './pages/Board';
import { Info } from './pages/Info';
import { MyPage } from './pages/MyPage';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="MEANING PAGE"
        defaultTitle="MEANING PAGE"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="MEANING PAGE" />
      </Helmet>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="/info" element={<Info />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
