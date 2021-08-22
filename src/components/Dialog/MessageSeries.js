import {
  Dialog,
  DialogActions,
  Paper,
  DialogContent,
  DialogTitle,
  ButtonGroup,
  Button,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  description: {
    padding: '10px',
    align: 'left',
    textAlign: 'justify',
  },
  paper: {
    padding: theme.spacing(2),
    width: '100%',
  }
}));

function Index({
  open,
  handleClose,

}) {

  const [image, setImage] = React.useState();
  const [text, setText] = React.useState();

  const classes = useStyles();
  return (
    <Dialog maxWidth="xs" open={open} onClose={handleClose} PaperComponent='false'>
      <DialogTitle>
        <Grid container spacing={2} justify='center'>
          <img width='300px' alt='' src={process.env.PUBLIC_URL + '/logo.png'} />
        </Grid>
      </DialogTitle>
      <DialogActions>
        <Grid container component={Paper} direction='column' spacing={2} justify='center'>
          <Grid item>
            <Typography>
              {'جنازه‌های مردگان در پستو‌های این موزه پنهان شده‌اند و شما باید آن‌ها را پیدا کنید.'}
            </Typography>
          </Grid>
          <Grid item>
            <ButtonGroup fullWidth variant='contained' color='primary'>
              <Button>بعدی</Button>
              <Button>قبلی</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog >
  );
}


export default Index;