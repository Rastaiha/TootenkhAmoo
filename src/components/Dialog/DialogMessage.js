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
  callbackFunction,

  text: comingText,
}) {

  const [image, setImage] = React.useState();
  const [text, setText] = React.useState(comingText || 'آیا مطمئن هستید؟');

  const classes = useStyles();
  return (
    <Dialog maxWidth="xs" TransitionComponent={Slide} open={open} onClose={handleClose} PaperComponent='false'>
      <DialogTitle>
        <Grid container spacing={2} justify='center'>
          <img width='300px' alt='' src={process.env.PUBLIC_URL + '/logo.png'} />
        </Grid>
      </DialogTitle>
      <DialogActions>
        <Grid container component={Paper} direction='column' spacing={2} justify='center'>
          <Grid item>
            <Typography>
              {text}
            </Typography>
          </Grid>
          <Grid item>
            <ButtonGroup fullWidth variant='contained' color='primary'>
              <Button onClick={() => { callbackFunction(); handleClose(); }}>
                {'تایید'}
              </Button>
              <Button>
                {'لغو'}
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog >
  );
}


export default Index;