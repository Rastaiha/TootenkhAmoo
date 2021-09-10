import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Hidden,
  makeStyles,
  Paper,
  Slide,
  Typography,
  Zoom,
} from '@material-ui/core';
import React from 'react';
import {
  hasPlayerGotProblemAction,
  getProblemFromGroupAction,
} from '../../redux/slices/problem'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
    maxWidth: '400px',
    maxHeight: '400px',
    objectFit: 'contain',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '250px',
      maxHeight: '250px',
      width: '100%',
    }
  }
}));

function Index({
  handleClose,
  getProblemFromGroup,
  hasPlayerGotProblem,

  problemGroupId,
  image: inputImage,
  open,
}) {
  const history = useHistory()
  const classes = useStyles();
  const [image, setImage] = React.useState(inputImage || '/characters/gooooorb.png');
  const [showDialog, setShowDialog] = React.useState(false);

  React.useEffect(() => {
    if (problemGroupId) {
      hasPlayerGotProblem({ problemGroupId }).then((action) => {
        if (action.type.includes('fulfilled')) {
          getProblemFromGroup({ problemGroupId }).then((action) => {
            if (action.type.includes('fulfilled')) {
              history.push(`/problem/${action?.meta?.arg?.problemGroupId}/${action.payload.response.submit.id}/${action.payload.response.problem.id}/`)
            }
          });
        } else {
          setShowDialog(true);
        }
      })
    }
  }, [problemGroupId])

  const doRequestProblem = () => {
    getProblemFromGroup({ problemGroupId });
    handleClose();
  }

  if (!showDialog) {
    return (<></>)
  }

  return (
    <Dialog onClose={handleClose} maxWidth="xs" TransitionComponent={Grow} open={open} PaperComponent='false'>
      <DialogTitle>
        <Grid container spacing={2} justify='center'>
          <img className={classes.image} alt='' src={process.env.PUBLIC_URL + image} />
        </Grid>
      </DialogTitle>
      <DialogActions>
        <Grid container component={Paper} direction='column' spacing={2} justify='center'>
          <Grid item>
            <Typography>
              {'آیا مطمئنید؟ برای گرفتن سوال ۱۰۰۰ سکه از شما کسر می‌شود. توجه کنید که جادوگر و گربه‌اش با کسی شوخی ندارند و پس از پرداخت سکه، دیگر امکان پس‌گرفتن آن را ندارید!'}
            </Typography>
          </Grid>
          <Grid item container justify='center' alignItems='center'>
            <ButtonGroup fullWidth variant='contained' color='primary'>
              <Button
                onClick={doRequestProblem}>
                {'تایید'}
              </Button>
              <Button
                onClick={() => handleClose()}>
                {'لغو'}
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog >
  );
}


export default connect(
  null,
  {
    hasPlayerGotProblem: hasPlayerGotProblemAction,
    getProblemFromGroup: getProblemFromGroupAction,
  }
)(Index);