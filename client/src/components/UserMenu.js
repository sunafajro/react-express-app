import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { appLogout } from '../actions/index'

class UserMenu extends Component {
  static muiName = 'IconMenu';

  render() {
    return (
    <IconMenu
        iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onClick={ this.props.appLogout } />
    </IconMenu>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  appLogout
}, dispatch);

export default connect(null, mapDispatchToProps)(UserMenu);
