import React, {Component} from 'react';
import './App.scss';

class App extends Component {
  styles = {
    button: {
      border: 'none',
      backgroundColor: 'transparent',
      outline: 'none',
    },
    details: {
      'zIndex': 10
    }
  };
  render() {
    return (
      <div className="app">
        <div className="left">

        </div>
        <div className="board">

        </div>
        <div className="body">
          <details style={this.styles.details}>
            <summary>
              Our Website
              <div className="icon"> </div>
            </summary>
            <div className="open">
              {
                [1,2,3,4,5,6].map((e, index) => {
                  return (
                    <div style={{ textAlign: 'center' }} key={index}>
                      <button style={this.styles.button} key={index}>{`Button ${index+1}`}</button>
                    </div>
                  );
                })
              }
            </div>
          </details>
        </div>
      </div>
    );
  }
}

export default App;
