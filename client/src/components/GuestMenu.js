import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class GuestMenu extends Component {
  constructor() {
    super();

    this.handleButton = this.handleButton.bind(this);
  }
  static muiName = 'FlatButton';

  handleButton() {
    //this.context.router.push('/login');
  }

  render() {
    return (
      <FlatButton label="Login" onClick={ this.handleButton} />
    );
  }
}