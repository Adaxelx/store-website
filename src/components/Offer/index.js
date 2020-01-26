import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setBreakpoint, openFilter } from 'actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Product from 'components/Offer/Product';
import Filter from 'components/Offer/Filter';

const StyledOffer = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProductCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 10px;
  column-count: 2;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const TitleBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const StyledH2 = styled.h2`
  font-weight: lighter;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledButton = styled.button`
  margin-top: 20px;
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: underline;
`;

const StyledDropdown = styled.button`
  border: 2px solid black;
  background-color: transparent;
  width: ${({ theme }) => theme.fontSize.xl};
  height: ${({ theme }) => theme.fontSize.xl};
  margin-left: 5px;
  line-height: ${({ theme }) => theme.fontSize.l};
`;

const Offer = props => {
  const Products = props.items
    .filter(({ name }) => name.includes(props.filter))
    .map(({ width, img, name, price, id }, i) => {
      if (i < props.breakPoint)
        return <Product width={width} img={img} name={name} price={price} key={id} item={i + 1} />;
      return null;
    });

  return (
    <StyledOffer>
      <TitleBar>
        <Header>
          <StyledH2>Categories</StyledH2>
          <StyledDropdown>
            <FontAwesomeIcon icon={faArrowDown} />
          </StyledDropdown>
        </Header>
        <Header>
          <StyledH2>Filter</StyledH2>
          <StyledDropdown onClick={props.openFilter}>
            <FontAwesomeIcon icon={faArrowDown} />
          </StyledDropdown>
          <Filter active={props.activeFilter} />
        </Header>
      </TitleBar>

      <StyledProductCon>{Products}</StyledProductCon>
      {props.items.filter(({ name }) => name.includes(props.filter)).length <=
      props.breakPoint ? null : (
        <StyledButton onClick={props.setBreakpoint}>Show more</StyledButton>
      )}
    </StyledOffer>
  );
};

const mapStateToProps = state => ({
  items: state.items,
  breakPoint: state.breakPoint,
  activeFilter: state.activeFilter,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  setBreakpoint: () => dispatch(setBreakpoint()),
  openFilter: () => dispatch(openFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
