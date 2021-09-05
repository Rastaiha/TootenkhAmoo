import { IconButton, makeStyles, withWidth } from '@material-ui/core';
import React from 'react';
import GameMenu from '../../../Dialog/GameMenu';

const useStyles = makeStyles(() => ({
  logo: ({ width }) => ({
    height: width == 'xs' ? 50 : 60,
  }),
  logoButton: ({ width }) => ({
    padding: width == 'xs' ? 5 : 10,
  }),
}));

const Index = ({ width }) => {
  const classes = useStyles({ width });
  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <>
      <IconButton className={classes.logoButton} onClick={() => setOpenDialog(!openDialog)}>
        <img
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt="logo"
          className={classes.logo}
        />
      </IconButton>
      <GameMenu
        open={openDialog}
        handleClose={() => setOpenDialog(!openDialog)}
      />
    </>
  );
}

export default withWidth()(Index);