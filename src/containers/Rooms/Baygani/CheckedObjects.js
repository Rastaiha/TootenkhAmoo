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

import {
  getPlayerCheckableObjectsAction,
} from '../../../redux/slices/game';

const useStyles = makeStyles((theme) => ({
}));

function Index({
  getPlayerCheckableObjects,

  playerCheckableObjects,
}) {
  const classes = useStyles()

  React.useEffect(() => {
    getPlayerCheckableObjects();
  }, [])

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
                <TableCell align='center'>عنوان</TableCell>
                <TableCell align='center'>اصل یا تقلبی؟</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playerCheckableObjects.map((playerCheckableObject) => (
                <TableRow key={playerCheckableObject.id}>
                  <TableCell align='center'>
                    {playerCheckableObject.title}
                  </TableCell>
                  <TableCell align='center'>
                    {playerCheckableObject.is_fake
                      ? 'تقلبیه'
                      : 'اصله'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {playerCheckableObjects.length == 0 &&
          <Grid item container justify='center'>
            <Box p={5}>
              <Typography variant='h4' align='center'>
                {'شما تا کنون شی‌ای را بررسی نکرده‌اید!'}
              </Typography>
            </Box>
          </Grid>
        }
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  playerCheckableObjects: state.game.playerCheckableObjects,
});

export default connect(
  mapStateToProps,
  {
    getPlayerCheckableObjects: getPlayerCheckableObjectsAction,
  }
)(Index);