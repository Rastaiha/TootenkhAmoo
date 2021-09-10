import {
  Grid,
  makeStyles,
  Typography,
  Box,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import ExchangeCard from '../../../components/Cards/ExchangeCard';
import {
  getAllExchangesAction,
} from '../../../redux/slices/exchange';

const useStyles = makeStyles((theme) => ({
}));

function Index({
  getAllExchanges,

  allExchanges,
}) {
  const classes = useStyles()

  React.useEffect(() => {
    getAllExchanges();
  }, [])

  return (
    <>
      <Grid
        container item
        spacing={2}
        alignItems="center">
        {
          allExchanges.map((exchange) => (
            <Grid key={exchange.id} item xs={12} sm={6} md={4}>
              <ExchangeCard exchange={exchange} />
            </Grid>
          ))

        }
        {allExchanges?.length == 0 &&
          <Grid item>
            <Box p={10}>
              <Typography variant='h4' align='center'>
                {'مبادله‌ی فعالی وجود ندارد!'}
              </Typography>
            </Box>
          </Grid>
        }
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  allExchanges: state.exchange.allExchanges,
});

export default connect(
  mapStateToProps,
  {
    getAllExchanges: getAllExchangesAction,
  }
)(Index);