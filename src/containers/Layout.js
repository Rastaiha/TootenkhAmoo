import { Container, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import AppBar from '../components/Appbar/ResponsiveAppBar';
import DialogMessage from '../components/Dialog/Message';
import {
  getPlayerAction,
  getUserNotificationsAction,
} from '../redux/slices/account';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 'auto !important',
    marginLeft: 'auto !important',
  },
  background: ({ backgroundImage }) => ({
    transform: 'scale(1.1)',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    background: `url(${process.env.PUBLIC_URL + backgroundImage}) no-repeat center center fixed`,
    opacity: '0.5',
    backgroundSize: 'cover',
    zIndex: '-1',
    animation: 'show-back 0.8s 0.3s both',
    filter: 'blur(3px)',
  }),
}));

const Layout = ({
  getPlayer,
  getUserNotifications,

  backgroundImage,
  open,
  text,
  ...props
}) => {
  const classes = useStyles({ backgroundImage });
  const [openDialogMessage, setOpenDialogMessage] = React.useState(open || false);
  const history = useHistory();

  useEffect(() => {
    getPlayer();
    getUserNotifications();
  }, []);

  return (
    <>
      <div className={classes.background} />
      <AppBar mode="GAME_ENVIRONMENT" position="fixed" />
      <div className={classes.container}>{props.children}</div>
      <DialogMessage
        text={text}
        handleClose={() => setOpenDialogMessage(!openDialogMessage)}
        open={openDialogMessage} />
    </>
  );
};

const mapStateToProps = (state) => ({
  open: state.dialogMessage.open,
  text: state.dialogMessage.text,
});

export default connect(
  mapStateToProps,
  {
    getPlayer: getPlayerAction,
    getUserNotifications: getUserNotificationsAction,
  }
)(Layout);