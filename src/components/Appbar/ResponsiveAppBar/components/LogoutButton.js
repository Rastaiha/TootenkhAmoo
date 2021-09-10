import { Button, Icon, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import { logoutAction } from '../../../../redux/slices/account';

const useStyles = makeStyles(() => ({
  iconImage: {
    maxHeight: '20px',
    width: '100%',
  },
}));

function LogoutButton({ logout }) {
  const classes = useStyles();
  return (
    <Button
      color='primary'
      variant="contained"
      onClick={logout}>
      {'خروج'}
    </Button>
  );
}

export default connect(null, { logout: logoutAction })(LogoutButton);
