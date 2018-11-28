import React from 'react';
import PropTypes from 'prop-types';

export default function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div>
      {props.children}
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
