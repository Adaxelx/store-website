import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.h1`
  text-transform: uppercase;
  font-weight: lighter;
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledTitle>Maison</StyledTitle>
    </StyledNav>
  );
};

export default Nav;
