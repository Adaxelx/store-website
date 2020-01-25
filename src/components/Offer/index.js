import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Product from 'components/Offer/Product';

const StyledOffer = styled.div`
  flex-grow: 1;
  min-height: 100vh;
  padding: 20px;
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
`;

const Offer = props => {
  const Products = props.items.map(({ width, img, name, price }) => (
    <Product width={width} img={img} name={name} price={price} />
  ));
  return (
    <StyledOffer>
      <TitleBar>
        <Header>Categories</Header>
        <Header>Filter</Header>
      </TitleBar>
      <StyledProductCon>{Products}</StyledProductCon>
    </StyledOffer>
  );
};

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(mapStateToProps)(Offer);
