import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom'
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary';
import FallbackPage from './FallbackPage';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';

const Layout = () => (
  <StyledLayoutContainer>
    <Header />
    <StyledAppContainer>
      <ErrorBoundary errorComponent={<FallbackPage />}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </StyledAppContainer>
    <Footer />
  </StyledLayoutContainer>
);

export default Layout;

const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledAppContainer = styled.div`
  overflow: auto;
  flex-grow: 1;
  padding: 2rem 5rem;
  word-wrap: break-word;
`;
