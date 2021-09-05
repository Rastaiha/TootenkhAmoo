import {
  Dialog,
  DialogActions,
  Paper,
  DialogContent,
  DialogTitle,
  ButtonGroup,
  Button,
  Grid,
  Fade,
  Hidden,
  Slide,
  makeStyles,
  Typography,
  Zoom,
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
    <Dialog maxWidth="xs" TransitionComponent={Slide} open={open} onClose={handleClose} >
      <DialogTitle>
        <Grid container direction='column' spacing={2} justify='center'>
          <Grid item>
            <Typography align='center' variant='h2'>
              {'تیم دلاوران'}
            </Typography>
          </Grid>
          <Grid item container alignItems='center' spacing={2}>
            <Grid item>
              <img width='30px' alt='' src={process.env.PUBLIC_URL + '/logo.png'} />
            </Grid>
            <Grid item>
              <Typography>
                {'توت طلایی'}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container alignItems='center' spacing={2}>
            <Grid item>
              <img width='30px' alt='' src={process.env.PUBLIC_URL + '/logo.png'} />
            </Grid>
            <Grid item>
              <Typography>
                {'توت طلایی'}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container alignItems='center' spacing={2}>
            <Grid item>
              <img width='30px' alt='' src={process.env.PUBLIC_URL + '/logo.png'} />
            </Grid>
            <Grid item>
              <Typography>
                {'توت طلایی'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </DialogTitle>
      {/* <DialogActions>
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
      </DialogActions> */}
    </Dialog >
  );
}


export default Index;