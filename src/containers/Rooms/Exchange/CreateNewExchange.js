import {
  Box,
  Button,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import ExchangeCard from '../../../components/Cards/ExchangeCard';
import Message from '../../../components/Dialog/Message';
import {
  createNewExchangeAction,
} from '../../../redux/slices/exchange';

const useStyles = makeStyles((theme) => ({
}));

function Index({
  createNewExchange,

}) {
  const classes = useStyles()
  const [openDialog, setOpenDialog] = React.useState(false);
  const [soldMerchandise, setSoldMerchandise] = React.useState({
    coin: 0,
    blue_toot: 0,
    red_toot: 0,
    black_toot: 0,
  });
  const [boughtMerchandise, setBoughtMerchandise] = React.useState({
    coin: 0,
    blue_toot: 0,
    red_toot: 0,
    black_toot: 0,
  });

  const putSellData = (e) => {
    setSoldMerchandise({
      ...soldMerchandise,
      [e.target.name]: Math.max(Math.min(e.target.value, 100), 0),
    })
  }

  const putBuyData = (e) => {
    setBoughtMerchandise({
      ...boughtMerchandise,
      [e.target.name]: Math.max(Math.min(e.target.value, 100), 0),
    })
  }

  const doCreateExchange = () => {
    createNewExchange({
      sold_merchandise: soldMerchandise,
      bought_merchandise: boughtMerchandise,
    })
  }

  return (
    <>
      <Grid
        container item
        spacing={2}
        alignItems="center">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>دارایی</TableCell>
                <TableCell align='center'>میزان دارایی‌ای که می‌دهید</TableCell>
                <TableCell align='center'>میزان دارایی‌ای که می‌گیرید</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>
                  <img
                    width='40px'
                    alt='' src={process.env.PUBLIC_URL + '/items/coin.png'} />
                </TableCell>
                <TableCell align='center'>
                  <TextField
                    type='number'
                    name='coin'
                    onChange={putSellData}
                    value={soldMerchandise.coin} />
                </TableCell>
                <TableCell align='center'>
                  <TextField
                    type='number'
                    name='coin'
                    onChange={putBuyData}
                    value={boughtMerchandise.coin} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <img
                    width='40px'
                    alt='' src={process.env.PUBLIC_URL + '/items/blue_toot.png'} />
                </TableCell>
                <TableCell align='center'>
                  <TextField
                    name='blue_toot'
                    type='number'
                    onChange={putSellData}
                    value={soldMerchandise.blue_toot} />
                </TableCell>
                <TableCell align='center'>
                  <TextField
                    name='blue_toot'
                    type='number'
                    onChange={putBuyData}
                    value={boughtMerchandise.blue_toot} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <img
                    width='40px'
                    alt='' src={process.env.PUBLIC_URL + '/items/red_toot.png'} />
                </TableCell>
                <TableCell align='center'>
                  <TextField
                    name='red_toot'
                    type='number'
                    onChange={putSellData}
                    value={soldMerchandise.red_toot} />
                </TableCell>
                <TableCell align='center'>
                  <TextField
                    name='red_toot'
                    type='number'
                    onChange={putBuyData}
                    value={boughtMerchandise.red_toot} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <img
                    width='40px'
                    alt='' src={process.env.PUBLIC_URL + '/items/black_toot.png'} />
                </TableCell>
                <TableCell align='center'>
                  <TextField
                    name='black_toot'
                    type='number'
                    onChange={putSellData}
                    value={soldMerchandise.black_toot} />
                </TableCell>
                <TableCell align='center'>
                  <TextField
                    name='black_toot'
                    type='number'
                    onChange={putBuyData}
                    value={boughtMerchandise.black_toot} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box mt={1}>
            <Button
              onClick={() => setOpenDialog(true)}
              fullWidth variant='contained' color='primary'>
              {'ایجاد'}
            </Button>
          </Box>
        </TableContainer>
      </Grid>
      <Message
        text={'آیا مطمئنید که می‌خواهید این مبادله را ایجاد کنید؟'}
        open={openDialog}
        handleClose={() => setOpenDialog(!openDialog)}
        callbackFunction={doCreateExchange}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  allExchanges: state.exchange.allExchanges,
});

export default connect(
  mapStateToProps,
  {
    createNewExchange: createNewExchangeAction,
  }
)(Index);