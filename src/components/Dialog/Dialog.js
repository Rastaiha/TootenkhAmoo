import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Slide,
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
  },
  image: {
    width: '100%',
    maxWidth: '350px',
    maxHeight: '350px',
    objectFit: 'contain',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '250px',
      maxHeight: '250px',
      width: '100%',
    }
  }
}));

function Index({
  open,
  goBackward,
  goForward,

  text: inputText,
  rightButtonText,
  leftButtonText,
  image: inputImage,
}) {
  const classes = useStyles();
  const [image, setImage] = React.useState(inputImage || '/logo.png');
  const [text, setText] = React.useState(inputText || 'آیا مطمئن هستید؟');

  return (
    <Dialog maxWidth="xs" TransitionComponent={Grow} open={open} PaperComponent='false'>
      <DialogTitle>
        <Grid container spacing={2} justify='center'>
          <img className={classes.image} alt='' src={process.env.PUBLIC_URL + image} />
        </Grid>
      </DialogTitle>
      <DialogActions>
        <Grid container component={Paper} direction='column' spacing={2} justify='center'>
          <Grid item>
            <Typography>
              {text}
            </Typography>
          </Grid>
          <Grid item container justify='center' alignItems='center'>
            <ButtonGroup fullWidth variant='contained' color='primary'>
              <Button
                onClick={() => goForward()}>
                {rightButtonText || 'تایید'}
              </Button>
              {leftButtonText != 'disabled' &&
                <Button
                  onClick={() => goBackward()}>
                  {leftButtonText || 'لغو'}
                </Button>
              }
            </ButtonGroup>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog >
  );
}


export default Index;