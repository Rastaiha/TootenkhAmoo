import {
  Box,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  Button,
  TableBody,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import Message from '../../../components/Dialog/Message';
import ExchangeCard from '../../../components/Cards/ExchangeCard';
import {
  getAllCheckableObjectsAction,
  checkAnObjectAction,
} from '../../../redux/slices/game';
import { toPersianNumber } from '../../../utils/translateNumber'

const useStyles = makeStyles((theme) => ({
}));

function Index({
  checkAnObject,
  getAllCheckableObjects,

  playerCheckableObjects,
  allCheckableObjects,
}) {
  const classes = useStyles()
  const [openDialog, setOpenDialog] = React.useState();
  const [objectId, setObjectId] = React.useState();

  React.useEffect(() => {
    getAllCheckableObjects();
  }, [])

  const notCheckedObjects = allCheckableObjects.filter((checkableObject) => {
    for (const playerCheckableObject of playerCheckableObjects) {
      if (playerCheckableObject.id == checkableObject.id) {
        return false;
      }
    }
    return true;
  })

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
                <TableCell align='center'>
                  <img
                    width='40px'
                    alt='' src={process.env.PUBLIC_URL + '/items/blue_toot.png'} />
                </TableCell>
                <TableCell align='center'>
                  <img
                    width='40px'
                    alt='' src={process.env.PUBLIC_URL + '/items/red_toot.png'} />
                </TableCell>
                <TableCell align='center'>
                  <img
                    width='40px'
                    alt='' src={process.env.PUBLIC_URL + '/items/black_toot.png'} />
                </TableCell>
                <TableCell align='center'>اصل یا تقلبی</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notCheckedObjects.map((playerCheckableObject) => (
                <TableRow key={playerCheckableObject.id}>
                  <TableCell align='center'>
                    {playerCheckableObject.title}
                  </TableCell>
                  <TableCell align='center'>
                    {toPersianNumber(playerCheckableObject.merchandise?.blue_toot)}
                  </TableCell>
                  <TableCell align='center'>
                    {toPersianNumber(playerCheckableObject.merchandise?.red_toot)}
                  </TableCell>
                  <TableCell align='center'>
                    {toPersianNumber(playerCheckableObject.merchandise?.black_toot)}
                  </TableCell>
                  <TableCell align='center'>
                    <Button
                      variant='outlined'
                      color='secondary'
                      onClick={() => {
                        setObjectId(playerCheckableObject.id);
                        setOpenDialog(true);
                      }}>
                      {'بررسی کن'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {notCheckedObjects.length == 0 &&
          <Grid item container justify='center'>
            <Box p={5}>
              <Typography variant='h4' align='center'>
                {'شی‌ای برای بررسی وجود ندارد!'}
              </Typography>
            </Box>
          </Grid>
        }
      </Grid>


      <Message
        callbackFunction={() => checkAnObject({ checkableObjectId: objectId })}
        text={'آیا حاضرید با پرداخت توت‌های گفته‌شده، شی را از نظر اصل‌بودن یا تقلبی‌بودن بررسی کنید؟'}
        open={openDialog}
        handleClose={() => setOpenDialog(!openDialog)}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  playerCheckableObjects: state.game.playerCheckableObjects,
  allCheckableObjects: state.game.allCheckableObjects,
});

export default connect(
  mapStateToProps,
  {
    getAllCheckableObjects: getAllCheckableObjectsAction,
    checkAnObject: checkAnObjectAction,
  }
)(Index);