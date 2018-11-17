import React, { PropTypes } from 'react';

class FormInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.function,
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
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default FormInput;
