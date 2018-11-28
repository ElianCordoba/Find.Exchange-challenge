import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../components/FormInput/FormInput';

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
            icon="question"
            inputText="Enter some"
            inputIdentifier="words"
          />
          <FormInput
            icon="person"
            inputText="Enter your"
            inputIdentifier="name"
          />
          <FormInput
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

export default Form;
