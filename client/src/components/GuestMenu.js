import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import FlatButton from 'material-ui/FlatButton';

class GuestMenu extends Component {

  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton label="Login" onClick={ this.props.goToLoginPage } />
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  goToLoginPage: () => push('/login')
}, dispatch);

export default connect(null, mapDispatchToProps)(GuestMenu);