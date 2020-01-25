import React from 'react';
import styled from 'styled-components';
import img from 'assets/slider.png';
import img2 from 'assets/slider2.png';
import img3 from 'assets/slider3.png';

const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  background-color: #f5f5f5;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  position: absolute;
  ${({ activeI, index }) => (index === activeI ? 'opacity:1;' : 'opacity:0;')}
  transition: 0.4s;
`;

const StyledArrow = styled.button`
  position: absolute;
  top: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  ${({ dir }) => (dir === 'l' ? 'left: 10px;' : 'right: 10px;')}
`;

const images = [img, img2, img3];

class Slider extends React.Component {
  state = {
    active: 0,
  };

  setActiveImage = dir => {
    const { active } = this.state;
    if (dir === 'l') {
      if (active === 0) {
        this.setState({
          active: 2,
        });
      } else {
        this.setState(prevState => ({
          active: prevState.active - 1,
        }));
      }
    }
    if (dir === 'r') {
      if (active === 2) {
        this.setState({
          active: 0,
        });
      } else {
        this.setState(prevState => ({
          active: prevState.active + 1,
        }));
      }
    }
  };

  render() {
    const { active } = this.state;
    const { setActiveImage } = this;
    return (
      <StyledSlider>
        <StyledArrow dir="l" onClick={() => setActiveImage('l')}>
          {'<'}
        </StyledArrow>
        {images.map((ig, i) => (
          <StyledImg src={ig} activeI={active} index={i} key={ig} />
        ))}
        <StyledArrow dir="r" onClick={() => setActiveImage('r')}>
          {'>'}
        </StyledArrow>
      </StyledSlider>
    );
  }
}

export default Slider;
