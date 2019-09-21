import React, {Component, createRef,} from 'react';
import './App.scss';
import Body from "./components/Body";
import Board from "./components/Board";
import Left from "./components/Left";
import {AppContext} from "./context";


class App extends Component {
  render() {
    const {Provider} = AppContext;
    return (
      <Provider value={this.props.firebase}>
      <div className="app">
        <Left ref={createRef()} />
        <Board />
        <Body />
      </div>
      </Provider>
    );
  }
}

export default App;
