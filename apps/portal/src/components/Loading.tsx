import React from 'react';
import styled from 'styled-components';

const Loading = () => (
  <>
    <StyledLoadingMessage>Loading...</StyledLoadingMessage>
    <hr />
  </>
);

export default Loading;


const StyledLoadingMessage = styled.h2`
  margin: 0;
`;
