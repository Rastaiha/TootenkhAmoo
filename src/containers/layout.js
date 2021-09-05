import { Container, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import AppBar from '../components/Appbar/ResponsiveAppBar';
// import { getUserProfileAction } from '../redux/slices/account';
// import { addNotificationAction } from '../redux/slices/notifications';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 'auto !important',
    marginLeft: 'auto !important',
  },
  background: {
    transform: 'scale(1.1)',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    background: `url(${process.env.PUBLIC_URL + '/backgrounds/space.jpg'}) no-repeat center center fixed`,
    opacity: '0.5',
    backgroundSize: 'cover',
    zIndex: '-1',
    animation: 'show-back 0.8s 0.3s both',
    filter: 'blur(3px)',
  },
}));

const Layout = ({
  getUserProfile,
  addNotification,
  userProfile,
  userAccount,
  ...props
}) => {
  const classes = useStyles();
  const history = useHistory();



  // useEffect(() => {
  //   if (
  //     userProfile &&
  //     (!userProfile?.first_name ||
  //       !userProfile?.last_name ||
  //       !userProfile?.gender ||
  //       !userProfile?.province ||
  //       !userProfile?.city) &&
  //     !window.location.href.includes('profile')
  //   ) {
  //     addNotification({
  //       message:
  //         'پیش از هر چیز، لطفاً موارد الزامی در پروفایل رو تکمیل کن! موارد الزامی با ستاره مشخص شده‌اند.',
  //       type: 'error',
  //     });
  //     history.push('/profile/');
  //   }
  // }, [userProfile]);

  // useEffect(() => {
  //   getUserProfile({ id: userAccount?.id });
  // }, [getUserProfile]);

  return (
    <>
      <div className={classes.background} />
      <AppBar mode="GAME_ENVIRONMENT" position="fixed" />
      <div className={classes.container}>{props.children}</div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.account.userProfile,
  userAccount: state.account.userAccount,
});

export default connect(mapStateToProps, {
  // getUserProfile: getUserProfileAction,
  // addNotification: addNotificationAction,
})(Layout);