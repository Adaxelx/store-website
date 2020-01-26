import React from 'react';
import styled from 'styled-components';

const StyledProduct = styled.div`
  position: relative;
  margin-top: 20px;
  overflow: hidden;
  width: 100%;
  ${({ width, item }) =>
    width === 'l'
      ? `grid-column-start: 1; grid-column-end: 3; grid-row: ${
          item % 2 === 0 ? item / 2 + 1 : item / 2 + 0.5
        }}`
      : ''};
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const StyledImgCon = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.grayL};
  margin-bottom: 10px;
`;

const StyledImg = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
`;

const StyledName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: lighter;
`;

const StyledPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: lighter;
  color: #707070;
`;

const Product = ({ width, img, name, price, item }) => {
  return (
    <StyledProduct width={width} item={item}>
      <StyledImgCon>
        <StyledImg src={img} />
      </StyledImgCon>
      <StyledName>{name}</StyledName>
      <StyledPrice>{price}$</StyledPrice>
    </StyledProduct>
  );
};

export default Product;
