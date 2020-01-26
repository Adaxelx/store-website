import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setBreakpoint } from 'actions';

import Product from 'components/Offer/Product';

const StyledOffer = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h2`
  font-weight: lighter;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledProductCon = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: underline;
`;

const Offer = props => {
  const Products = props.items.map(({ width, img, name, price, id }) => {
    if (id < props.breakPoint)
      return <Product width={width} img={img} name={name} price={price} key={id} />;

    return null;
  });
  return (
    <StyledOffer>
      <TitleBar>
        <Header>Categories</Header>
        <Header>Filter</Header>
      </TitleBar>
      <StyledProductCon>{Products}</StyledProductCon>
      <StyledButton onClick={props.setBreakpoint}>Show more</StyledButton>
    </StyledOffer>
  );
};

const mapStateToProps = state => ({
  items: state.items,
  breakPoint: state.breakPoint,
});

const mapDispatchToProps = dispatch => ({
  setBreakpoint: () => dispatch(setBreakpoint()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
