import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateInput } from '../../actions/formInput';

class FormInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    updateInput: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    inputText: PropTypes.string.isRequired,
    inputIdentifier: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h3>
          ({this.props.icon})
          {this.props.inputText}
        </h3>
        <strong>{this.props.inputIdentifier}</strong>

        <input
          name={this.props.inputIdentifier}
          value={this.props.value}
          onChange={this.props.updateInput}
        />
      </div>
    );
  }
}


const mapState = state => ({
  [this.props.inputIdentifier]: state.form[this.props.inputIdentifier],
});

const mapDispatch = dispatch => ({
  updateInput: event => {
    const { name, value } = event.target;
    return dispatch(updateInput({ inputName: name, inputValue: value }));
  },
});

export default connect(mapState, mapDispatch)(FormInput);
