import {
  Badge,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux'

import {
  buyExchangeAction,
} from '../../redux/slices/exchange';
import { toPersianNumber } from '../../utils/translateNumber';
import DialogMessage from '../Dialog/Message';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 'auto !important',
    marginLeft: 'auto !important',
  },
});

const Index = ({
  buyExchange,

  disable = false,
  exchange,
}) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Card>
        <CardContent className={classes.container}>
          <Grid container xs={12} alignItems='center' justify='center' spacing={2}>
            <Grid item container xs={12} justify='center'>
              <Typography variant='h5' align='center'>
                {'فروشنده: ' + exchange?.seller?.name}
              </Typography>
            </Grid>

            {exchange?.buyer &&
              <Grid item container xs={12} justify='center'>
                <Typography variant='h5' align='center'>
                  {'خریدار: ' + exchange?.buyer?.name}
                </Typography>
              </Grid>
            }

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item container justify='center' alignItems='center' spacing={3} xs={12}>
              <Grid item>
                <Badge
                  badgeContent={toPersianNumber(exchange?.bought_merchandise?.coin) + '-'}
                  color="secondary">
                  <img
                    width='40px'
                    style={{ opacity: 0.5 }}
                    alt='' src={process.env.PUBLIC_URL + '/items/coin.png'} />
                </Badge>
              </Grid>
              <Grid item>
                <Badge
                  badgeContent={toPersianNumber(exchange?.sold_merchandise?.coin) + '+'}
                  color="primary">
                  <img
                    width='40px'
                    style={{ opacity: 1.5 }}
                    alt='' src={process.env.PUBLIC_URL + '/items/coin.png'} />
                </Badge>
              </Grid>
            </Grid>

            <Grid item container justify='center' alignItems='center' spacing={3} xs={12}>
              <Grid item>
                <Badge
                  badgeContent={toPersianNumber(exchange?.bought_merchandise?.blue_toot) + '-'}
                  color="secondary">
                  <img
                    width='40px'
                    style={{ opacity: 0.5 }}
                    alt='' src={process.env.PUBLIC_URL + '/items/blue_toot.png'} />
                </Badge>
              </Grid>
              <Grid item>
                <Badge
                  badgeContent={toPersianNumber(exchange?.sold_merchandise?.blue_toot) + '+'}
                  color="primary">
                  <img
                    width='40px'
                    style={{ opacity: 1.5 }}
                    alt='' src={process.env.PUBLIC_URL + '/items/blue_toot.png'} />
                </Badge>
              </Grid>
            </Grid>


            <Grid item container justify='center' alignItems='center' spacing={3} xs={12}>
              <Grid item>
                <Badge
                  badgeContent={toPersianNumber(exchange?.bought_merchandise?.red_toot) + '-'}
                  color="secondary">
                  <img
                    width='40px'
                    style={{ opacity: 0.5 }}
                    alt='' src={process.env.PUBLIC_URL + '/items/red_toot.png'} />
                </Badge>
              </Grid>
              <Grid item>
                <Badge
                  badgeContent={toPersianNumber(exchange?.sold_merchandise?.red_toot) + '+'}
                  color="primary">
                  <img
                    width='40px'
                    style={{ opacity: 1.5 }}
                    alt='' src={process.env.PUBLIC_URL + '/items/red_toot.png'} />
                </Badge>
              </Grid>
            </Grid>



            <Grid item container justify='center' alignItems='center' spacing={3} xs={12}>
              <Grid item>
                <Badge
                  badgeContent={toPersianNumber(exchange?.bought_merchandise?.black_toot) + '-'}
                  color="secondary">
                  <img
                    width='40px'
                    style={{ opacity: 0.5 }}
                    alt='' src={process.env.PUBLIC_URL + '/items/black_toot.png'} />
                </Badge>
              </Grid>
              <Grid item>
                <Badge
                  badgeContent={toPersianNumber(exchange?.sold_merchandise?.black_toot) + '+'}
                  color="primary">
                  <img
                    width='40px'
                    style={{ opacity: 1.5 }}
                    alt='' src={process.env.PUBLIC_URL + '/items/black_toot.png'} />
                </Badge>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          {(!exchange?.buyer && !disable) &&
            <Grid item container justify='center' alignItems='center' xs={12}>
              <Button
                fullWidth
                onClick={() => {
                  setOpenDialog(true)
                }}
                variant='contained'
                color='primary'>
                {'خرید'}
              </Button>
            </Grid>
          }
        </CardActions>
      </Card>
      <DialogMessage
        open={openDialog}
        handleClose={() => setOpenDialog(!openDialog)}
        callbackFunction={() => buyExchange({ exchange: exchange.id })}
      />
    </>
  );
};

const mapStateToProps = (state) => ({

})

export default connect(
  mapStateToProps,
  {
    buyExchange: buyExchangeAction,
  }
)(Index);
