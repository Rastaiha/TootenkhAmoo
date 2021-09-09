import {
  Grid,
  makeStyles,
  Box,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import ExchangeCard from '../../../components/Cards/ExchangeCard';
import {
  getPlayerExchangesAction,
} from '../../../redux/slices/exchange';


const useStyles = makeStyles((theme) => ({
}));

function Index({
  getPlayerExchanges,

  playerExchanges,
}) {
  const classes = useStyles()

  React.useEffect(() => {
    getPlayerExchanges();
  }, [])

  return (
    <>
      <Grid
        container item
        spacing={2}
        alignItems="center">
        {
          playerExchanges.map((exchange) => (
            <Grid key={exchange.id} item xs={12} sm={6} md={4}>
              <ExchangeCard exchange={exchange} disable={true} />
            </Grid>
          ))
        }
        {playerExchanges?.length == 0 &&
          <Grid item>
            <Box p={10}>
              <Typography variant='h4'>
                {'شما تا کنون مبادله‌ای انجام نداده‌اید!'}
              </Typography>
            </Box>
          </Grid>
        }
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  playerExchanges: state.exchange.playerExchanges,
});

export default connect(
  mapStateToProps,
  {
    getPlayerExchanges: getPlayerExchangesAction,
  }
)(Index);