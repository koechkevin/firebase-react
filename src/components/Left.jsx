import React, { Component, forwardRef } from 'react';

class Left extends Component {
  render() {
    return (
      <div {...this.props} className="left">

      </div>
    );
  }
}
export default forwardRef((props, ref) => {
  return <Left {...props} ref={ref} />
});
