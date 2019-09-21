import React, { Component } from 'react';
import {AppContext} from "../context";

class Body extends Component {
  componentDidMount() {
    this.context.database()
      .ref('/data/users').on('value', val => console.log(val.val()))
  }

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

  render(){
    return(
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
    );
  }
}

Body.contextType = AppContext;

export default Body;
