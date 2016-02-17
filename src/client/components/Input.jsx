import React, { Component } from 'react';
import { connect }          from 'react-redux';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }
  }

  render() {
    const { value } = this.state;
    const { name } = this.props;
    return (
      <input onChange={this.onValueChange.bind(this)} id={name} { ...this.props } value={value} />
    )
  }

  onValueChange(e) { this.setState({ value: e.target.value }); }
}

Input.propTypes = {
  value:  React.PropTypes.node.isRequired,
  name:   React.PropTypes.string.isRequired,
}

Input.defaultProps = {
  className:  'form-control',
  type:       'text',
  value:      '',
}

export default Input;
