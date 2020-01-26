import React from 'react';
import styled from 'styled-components';
import img from 'assets/slider.png';
import img2 from 'assets/slider2.png';
import img3 from 'assets/slider3.png';

const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.grayL};
  overflow: hidden;
`;

const StyledImg = styled.img`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const StyledBox = styled.div`
  width: 50px;
  height: 10px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.grayD};
  transition: 0.1s;
  background-color: ${({ activeI, index, theme }) =>
    index === activeI ? theme.grayD : 'transparent'};
`;

const images = [img, img2, img3];

class Slider extends React.Component {
  state = {
    active: 0,
    interval: 0,
    timeout: 0,
  };

  componentDidMount() {
    this.moveItSelf();
  }

  moveSlider = dir => {
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

  setActiveImage = dir => {
    const { interval, timeout } = this.state;
    const { moveItSelf, moveSlider } = this;
    moveSlider(dir);
    clearInterval(interval);
    clearTimeout(timeout);
    this.setState({
      timeout: setTimeout(moveItSelf, 3000),
    });
  };

  moveItSelf = () => {
    this.setState({
      interval: setInterval(() => this.moveSlider('r'), 3000),
    });
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
        <StyledBox>
          <StyledDot activeI={active} index={0} />
          <StyledDot activeI={active} index={1} />
          <StyledDot activeI={active} index={2} />
        </StyledBox>
      </StyledSlider>
    );
  }
}

export default Slider;
