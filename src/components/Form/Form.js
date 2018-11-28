import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormInput from '../../components/FormInput/FormInput';
import { updateInput } from '../../actions/formInput';

class Form extends React.PureComponent {
  static propTypes = {
    words: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    updateInput: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.isFormValid = this.isFormValid.bind(this);
  }

  isFormValid() {
    return this.props.words && this.props.name && this.props.email;
  }

  render() {
    return (
      <div className="formShape">
        <form>
          <FormInput
            value={this.props.words}
            handleChange={this.props.updateInput}
            icon="question"
            inputText="Enter some"
            inputIdentifier="words"
          />
          <FormInput
            value={this.props.name}
            handleChange={this.props.updateInput}
            icon="person"
            inputText="Enter your"
            inputIdentifier="name"
          />
          <FormInput
            value={this.props.email}
            handleChange={this.props.updateInput}
            icon="at"
            inputText="email"
            inputIdentifier="email"
          />
        </form>
        <button className="">Exit</button>
        <button className="" disabled={!this.isFormValid()}>Send</button>
      </div>
    );
  }
}

const mapState = state => ({
  words: state.form.words,
  name: state.form.name,
  email: state.form.email,
});

const mapDispatch = dispatch => ({
  updateInput: event => {
    const { name, value } = event.target;
    return dispatch(updateInput({ inputName: name, inputValue: value }));
  },
});

export default connect(mapState, mapDispatch)(Form);
