import {
  Container,
  makeStyles,
  Paper,
  Typography,
  Grid,
} from '@material-ui/core';
import React from 'react';

import ResponsiveAppBar from '../components/Appbar/ResponsiveAppBar';
import Footer from '../components/SpecialComponents/Homepage/Footer';
import PersonCard from '../components/Cards/PersonCard';
import presenters from './RatalkPresenters';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    margin: theme.spacing(3,0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5,2),
    }
  },
  container: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(5),
  },
  item: {
    margin: theme.spacing(0.7),
    lineHeight: 1.5,
  },
}));
function Rastalk() {
  const classes = useStyles();
  return (
    <>
      <ResponsiveAppBar mode="LANDING" />
      <Container maxWidth="md" className={classes.container}>
        <Paper className={classes.paper}>
          <Typography variant="h1" align="center">
            دورهمی‌های مدرسه تابستانه‌ رستا
          </Typography>
          <Paper className={classes.paper} elevation={5}>
            <Grid
              container
              justify="space-evenly"
              alignItems="center"
              direction="column">
              <Grid item className={classes.item}>
                <Typography variant="h2" align="center">
                  اتفاقی با دکتر تفاق!
                </Typography>
              </Grid>
              <Grid item className={classes.item}>
                <Typography variant="subtitle1" align="center">
                  اتفاق: همدلی، هم‌زبانی، هم‌صحبتی و...
                </Typography>
              </Grid>
              <Grid item className={classes.item}>
                <PersonCard person={presenters.DrTefagh}></PersonCard>
              </Grid>
              <Grid item className={classes.item}>
                <Typography variant="h5" component="h3">
                  توی این ارائه، به مدل‌سازی ریاضی یکی از بزرگ‌ترین مشکلات این
                  روزهامون پرداخته خواهد شد؛ بیماری کووید-۱۹. دکتر تفاق قراره
                  آثار تصمیم‌هایی که در این باره گرفته می‌شه رو از دید ریاضی
                  برامون به تصویر بکشن.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper} elevation={5}>
            <Grid
              container
              justify="space-evenly"
              alignItems="center"
              direction="column">
              <Grid item className={classes.item}>
                <Typography variant="h2" align="center">
                  رس‌تاک: دورهمی با دانشجویان
                </Typography>
              </Grid>
              <Grid item className={classes.item}>
                <Typography variant="h5" align="h3">
                  توی این رس‌تاک قراره بیشتر باهم حرف بزنیم. از خودمون بگیم، از
                  راه‌هایی که رفتیم و راه‌هایی که قراره بریم.
                  <br /> راه من کدوم طرفه؟
                </Typography>
              </Grid>
              <Grid
                container
                item
                className={classes.item}
                spacing={2}
                justify="center">
                {presenters.secondSeminar.map((presenter, index) => (
                  <Grid
                    container
                    item
                    key={index}
                    xs={10}
                    sm={5}
                    md={4}
                    alignItems="flex-start"
                    justify="center">
                    <PersonCard person={presenter} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}

export default Rastalk;
