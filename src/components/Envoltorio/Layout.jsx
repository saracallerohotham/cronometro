import React from 'react'
import styled from 'styled-components';

const StyledLayout = styled.div`
  background: #000000;
  height: 100vh;
  width: 100vw;
  color: white;
`;

function Layout({ children }) {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  );
}

export default Layout;
