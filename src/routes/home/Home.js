/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Modal from '../../components/Modal/Modal';
import Form from '../../components/Form/Form';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      modalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>Open Modal</button>
        <Modal show={this.state.modalOpen}>
          <Form />
        </Modal>
      </div>
    );
  }
}

export default Home;
