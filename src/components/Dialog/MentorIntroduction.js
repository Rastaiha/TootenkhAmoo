import {
  Dialog,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  DialogContent,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  image: (props) => ({
    height: '300px',
    background: `url(${props.image})`,
    backgroundSize: 'cover !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    boxShadow: '2px 2px 5px gray',
  }),
  description: {
    padding: '10px',
    align: 'left',
    textAlign: 'justify',
  }
}));

function MentorIntroduction({
  open,
  handleClose,
  person
}) {
  const image = person.picture
  const classes = useStyles({ image });
  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <Grid container justify='center' alignItems='center'>
        <Grid xs={12} sm={6} container item direction='column' justify='center'>
          <Grid item>
            <Typography gutterBottom variant="h4" align="center">
              {person.name}
            </Typography>
          </Grid >
          <Grid item>
            <Typography variant="h6" className={classes.description}>
              {person.description}
            </Typography>
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid sm={6} item className={classes.image} />
        </Hidden>
      </Grid>
    </Dialog >
  );
}


export default MentorIntroduction;