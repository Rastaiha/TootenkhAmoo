import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { loginAction } from '../../redux/slices/account';
import { addNotificationAction } from '../../redux/slices/notifications';
import { toEnglishNumber } from '../../utils/translateNumber';

const InputFields = ({ isFetching, login, addNotification, token }) => {
  const [data, setData] = useState({
    password: '',
    username: '',
  });

  if (token) {
    return <Redirect to="/security_room/" />;
  }

  const isJustDigits = (number) => {
    var regex = new RegExp(`\\d{${number.length}}`);
    if (regex.test(toEnglishNumber(number))) {
      return true;
    } else {
      return false;
    }
  };

  const putData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const doLogin = () => {
    const { username } = data;
    if (!username) {
      addNotification({
        message: 'لطفاً همه‌ی موارد خواسته شده را پر کنید!',
        type: 'error',
      });
      return;
    }

    login({ username: data.username, password: data.username });
  };

  return (
    <>
      <Grid item>
        <TextField
          variant="outlined"
          fullWidth
          onChange={(e) => {
            if (isJustDigits(e.target.value)) {
              putData(e);
            }
          }}
          value={data.username}
          name="username"
          label="شماره تلفن همراه"
          inputProps={{ className: 'ltr-input' }}
        />
      </Grid>

      {/* <Grid item>
        <TextField
          variant="outlined"
          fullWidth
          onChange={putData}
          label="گذرواژه"
          name="password"
          inputProps={{ className: 'ltr-input' }}
          type="password"
        />
      </Grid> */}

      <Grid container item direction="row" justify="center">
        <Button
          onClick={doLogin}
          variant="contained"
          color="primary"
          disabled={isFetching}
          fullWidth>
          بزن بریم
        </Button>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.account.token,
  isFetching: state.account.isFetching,
});

export default connect(mapStateToProps, {
  login: loginAction,
  addNotification: addNotificationAction,
})(InputFields);
