import React from 'react';
import FormInput from '../../components/FormInput/FormInput';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      words: '',
      name: '',
      email: '',
    };

    this.isFormValid = this.isFormValid.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  isFormValid() {
    return this.state.words && this.state.name && this.state.email;
  }

  clickHandler(event) {
    const data = event.target;
    this.setState({
      [data.name]: data.value,
    });
  }

  render() {
    return (
      <div className="formShape">
        <FormInput
          value={this.state.words}
          handleChange={this.clickHandler}
          icon="question"
          inputText="Enter some"
          inputIdentifier="words"
        />
        <FormInput
          value={this.state.name}
          handleChange={this.clickHandler}
          icon="person"
          inputText="Enter your"
          inputIdentifier="name"
        />
        <FormInput
          value={this.state.email}
          handleChange={this.clickHandler}
          icon="at"
          inputText="email"
          inputIdentifier="email"
        />

        <button className="">Exit</button>
        <button className="" disabled={!this.isFormValid()}>Send</button>
      </div>
    );
  }
}

export default Form;
