import {
  Button,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslate } from 'react-redux-multilingual/lib/context';
import { Link } from 'react-router-dom';

import { getLandingDataAction } from '../../../redux/slices/landing';
import getRandomSubarray from '../../../utils/getRandomSubarray';
import PersonCard from '../../Cards/PersonCard';

const useStyles = makeStyles((theme) => ({
  moreButton: {
    margin: theme.spacing(2, 'auto', 0),
    textAlign: 'center',
    display: 'table',
  },
  sectionTitle: {
    margin: theme.spacing(2, 0, 4, 0),
  },
}));

function LandingOurTeam({ members = [], count = 4, getLandingData }) {
  const classes = useStyles();
  const t = useTranslate();

  useEffect(() => {
    getLandingData();
  }, []);

  if (members.length === 0) return <></>;
  return (
    <>
      <Typography component="h2" variant="h2" gutterBottom className={classes.sectionTitle}>
        کیا قراره توی این رویداد همراهمون باشن؟
      </Typography>
      <Grid container spacing={4} justify="center" >
        {getRandomSubarray(members, count).map((member, index) => (
          <Grid
            container
            item
            xs={10}
            sm={4}
            md={3}
            key={index}
            justify="center"
          >
            <PersonCard
              person={member}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        className={classes.moreButton}
        component={Link}
        target="_blank"
        rel="noopener"
        to="/our_team"
        style={{ backgroundColor: "#e8332a", color: "white" }}
      >
        {t('seeMore')}
      </Button>
    </>
  );
}

const mapStatesToProps = (state) => ({
  members: state.landing.members,
});

export default connect(mapStatesToProps, {
  getLandingData: getLandingDataAction,
})(LandingOurTeam);
