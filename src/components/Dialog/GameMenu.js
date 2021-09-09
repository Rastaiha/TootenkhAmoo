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
import { connect } from 'react-redux';
import { toPersianNumber } from '../../utils/translateNumber'

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
  handleClose,

  open,
  player,
}) {

  const [image, setImage] = React.useState();
  const [text, setText] = React.useState();

  const classes = useStyles();
  return (
    <Dialog maxWidth="sm" TransitionComponent={Slide} open={open} onClose={handleClose} >
      <DialogTitle>
        <Grid container spacing={2} justify='center'>

          <Grid
            item container
            xs={12} sm={6}
            direction='column'
            alignItems='center' justify='center'
            spacing={1}>
            <Grid item container justify='center' alignItems='center'>
              <Typography align='center' variant='h2'>
                {`تیم ${player?.name}`}
              </Typography>
            </Grid>
            <Grid item container justify='center' alignItems='center'>
              <img
                style={{ borderRadius: 5 }}
                width='200px' alt=''
                src={process.env.PUBLIC_URL + '/items/question_mark.jpg'} />
            </Grid>
          </Grid>

          <Grid item container xs={12} sm={6} alignItems='center' justify='center'>
            <Grid item container xs={12}>
              <Typography variant='h3' gutterBottom>
                {'دارایی‌ها:'}
              </Typography>
            </Grid>
            <Grid item container alignItems='center' spacing={1} xs={12} sm={6}>
              <Grid item>
                <img width='40px' alt='' src={process.env.PUBLIC_URL + '/items/coin.png'} />
              </Grid>
              <Grid item>
                <Typography>
                  {`سکه: ${toPersianNumber(player?.coin || 0)}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems='center' spacing={1} xs={12} sm={6}>
              <Grid item>
                <img width='40px' alt='' src={process.env.PUBLIC_URL + '/items/blue_toot.png'} />
              </Grid>
              <Grid item>
                <Typography>
                  {`توت آبی: ${toPersianNumber(player?.blue_toot || 0)}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems='center' spacing={1} xs={12} sm={6}>
              <Grid item>
                <img width='40px' alt='' src={process.env.PUBLIC_URL + '/items/red_toot.png'} />
              </Grid>
              <Grid item>
                <Typography>
                  {`توت قرمز: ${toPersianNumber(player?.red_toot || 0)}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems='center' spacing={1} xs={12} sm={6}>
              <Grid item>
                <img width='40px' alt='' src={process.env.PUBLIC_URL + '/items/black_toot.png'} />
              </Grid>
              <Grid item>
                <Typography>
                  {`توت سیاه: ${toPersianNumber(player?.black_toot || 0)}`}
                </Typography>
              </Grid>
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

const mapStateToProps = (state, props) => ({
  player: state.account.player,
})

export default connect(
  mapStateToProps,
  {

  }
)(Index);