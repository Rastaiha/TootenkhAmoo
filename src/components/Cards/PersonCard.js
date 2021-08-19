import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Button,
  CardActions,
} from '@material-ui/core';
import MentorIntroduction from '../Dialog/MentorIntroduction';

const useStyles = makeStyles({
  root: {
    // height: '100%',
    width: '100%',
    maxWidth: '20rem',
    fontSize: '1rem',
    textDecoration: 'none',
    overflow: 'hidden',
    boxShadow: '0 0 2rem -1.5rem rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.1s ease-in-out',
    '&:hover': {
      transform: 'translateY(-0.2rem) scale(1.02)',
      boxShadow: '0 0.5em 0.5rem -0.5rem rgba(0, 0, 0, 0.5)',
    },
    background: '#e9e2c6',
  },
  media: {
    height: '300px',
  },
  icon: {
    textAlign: 'center',
  },
});

const PersonCard = ({ person }) => {
  const classes = useStyles();
  const [isDialogueOpen, setDialogueOpen] = useState(false);
  let position = '';
  let introductuion = (
    <>
    <CardActions>
        <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={() => setDialogueOpen(!isDialogueOpen)}>
        او کیست؟!
      </Button>
    </CardActions>
    <MentorIntroduction
      person={person}
      open={isDialogueOpen}
      handleClose={() => {
        setDialogueOpen(!isDialogueOpen);
      }}
    />
    </>
  );
  if (person.position) {
    position = (
      <Typography variant="body2" color="textSecondary" component="p">
        {person.position}
      </Typography>
    );
  }
  if (person.description === 'none'){
    introductuion="";
  }
    return (
      <>
        <Card className={classes.root}>
          <CardActionArea disabled>
            <CardMedia
              className={classes.media}
              image={person.picture}
              title={person.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {person.name}
              </Typography>
              {/* {person.team.map((team) => (
              <>
                <Typography variant="body2" color="textSecondary" component="p">
                  {team}
                </Typography>
              </>
            ))} */}
              {position}
            </CardContent>
          </CardActionArea>
          {introductuion}
        </Card>
      </>
    );
};

export default PersonCard;
