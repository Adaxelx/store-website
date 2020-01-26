import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { findName } from 'actions';

const StyledFilter = styled.div`
  width: 100%;
  height: 50px;
  transform: ${({ active }) => (active ? 'scaleY(1)' : 'scaleY(0)')};
  border: 1px solid ${({ theme }) => theme.grayD};
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #fff;
  z-index: 1;
  transition: 0.5s;
  transform-origin: top;
`;

const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.grayD};
  background-color: transparent;
`;

class Filter extends React.Component {
  state = {
    inputV: '',
  };

  componentDidUpdate() {
    this.props.find(this.state.inputV);
  }

  setInput = e => {
    this.setState({
      inputV: e.target.value,
    });
  };

  clear = () => {
    this.setState({
      inputV: '',
    });
  };

  render() {
    const { inputV } = this.state;
    const { active } = this.props;
    return (
      <StyledFilter active={active}>
        <input value={inputV} onChange={this.setInput} />
        <StyledButton onClick={this.clear}>Wyczyść</StyledButton>
      </StyledFilter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  find: item => dispatch(findName(item)),
});

export default connect(null, mapDispatchToProps)(Filter);
