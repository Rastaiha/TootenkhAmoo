import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Slide,
  Typography,
  Zoom,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import {
  getPlayerAction
} from '../../redux/slices/account';
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
  getPlayer,

  open,
  player,
}) {
  const classes = useStyles();


  return (
    <Dialog maxWidth="sm" TransitionComponent={Slide} open={open} onClose={handleClose} >
      <DialogTitle>
        <Typography align='center' variant='h2'>
          {`تیم ${player?.name}`}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={1} justify='center'>
          <Grid item container xs={12} sm={6} alignItems='center' justify='center' spacing={1}>
            <img
              style={{ borderRadius: 5 }}
              width='200px' alt=''
              src={process.env.PUBLIC_URL + '/items/question_mark.jpg'} />
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
      </DialogContent>
    </Dialog >
  );
}

const mapStateToProps = (state, props) => ({
  player: state.account.player,
})

export default connect(
  mapStateToProps,
  {
    getPlayer: getPlayerAction,
  }
)(Index);