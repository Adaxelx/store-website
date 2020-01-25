import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const StyledNav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const StyledTitle = styled.h1`
  text-transform: uppercase;
  font-weight: lighter;
`;

const StyledButton = styled.button`
  border: 2px solid black;
  background-color: white;
  width: 30px;
  height: 30px;
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledButton />
      <StyledTitle>Maison</StyledTitle>
      <StyledButton>
        <FontAwesomeIcon icon={faShoppingCart} />
      </StyledButton>
    </StyledNav>
  );
};

export default Nav;
