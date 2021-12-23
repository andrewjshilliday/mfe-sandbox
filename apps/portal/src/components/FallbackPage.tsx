import React from 'react';
import styled from 'styled-components';

const FallbackPage = () => (
  <>
    <StyledFallbackMessage>Something went wrong :(</StyledFallbackMessage>
    <hr />
  </>
);

export const fallbackRoute = (route: string) => [{ path: route, element: <FallbackPage /> }]

export default FallbackPage;

const StyledFallbackMessage = styled.h2`
  margin: 0;
  color: red;
`;
