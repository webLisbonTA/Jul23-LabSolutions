import React from 'react';

class Dice extends React.Component {
  state = {
    src: require('../../assets/images/dice-empty.png'),
  };

  handleClick = () => {
    this.setState({
      src: require(`../../assets/images/dice${Math.floor(Math.random() * 5) + 1}.png`),
    });
  };

  render() {
    return (
      <div>
        <img
          className="w-25 h-25"
          src={this.state.src}
          onClick={this.handleClick}
          alt="dice"
        />
      </div>
    );
  }
}

export default Dice;
