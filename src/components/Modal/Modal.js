import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
