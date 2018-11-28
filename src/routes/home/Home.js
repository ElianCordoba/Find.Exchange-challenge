/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import Form from '../../components/Form/Form';
import { modalToggle } from '../../actions/modal';

class Home extends React.Component {
  static propTypes = {
    modalOpen: PropTypes.bool,
    toggleModal: PropTypes.func,
  };

  render() {
    return (
      <div>
        <button onClick={this.props.toggleModal}>Open Modal</button>
        <Modal show={this.props.modalOpen}>
          <Form />
        </Modal>
      </div>
    );
  }
}

const mapState = state => ({
  modalOpen: state.modal.modalOpen,
});

const mapDispatch = dispatch => ({
  toggleModal: () => dispatch(modalToggle()),
});

export default connect(mapState, mapDispatch)(Home);
