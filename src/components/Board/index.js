import React from 'react';
import styled from '@emotion/styled';
import OptionForm from '../OptionForm';

const Board = styled('div')`
  max-width: 600px;
  border-radius: 8px;
  background: #fff;
`;

class BoardComponent extends React.PureComponent {
  state = {
    interval: null,
  };

  startPooling = () => {
    if (this.state.interval) {
      return;
    }

    const interval = setInterval(() => {
      // Это нужно заменить на вызов api
      setTimeout(() => {
        if (Math.random() > 0.6) {
          clearInterval(this.state.interval);
          this.setState({ interval: null });
        }
      }, 200);
    }, 1000);

    this.setState({
      interval,
    });
  };

  render() {
    return (
      <Board>
        <h2>Бинарный опцион</h2>
        <hr />
        <OptionForm
          startPooling={this.startPooling}
          isPooling={!!this.state.interval}
        />
      </Board>
    );
  }
}

export default BoardComponent;
