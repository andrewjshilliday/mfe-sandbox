import React from 'react';
import styled from 'styled-components';

const App = () => {
  console.log('React version:', React.version);
  
  return (
    <div>
      <StyledHeader>Home Page</StyledHeader>
      <hr />
    </div>
  );
};

export default App;

const StyledHeader = styled.h2`
  margin: 0;
`;
