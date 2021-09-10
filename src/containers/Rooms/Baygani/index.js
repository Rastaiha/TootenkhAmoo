import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  makeStyles,
  Typography,
  Paper,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import {
  getPlayerCheckableObjectsAction,
  getAllCheckableObjectsAction,
} from '../../../redux/slices/game';
import Layout from '../../Layout';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 100,
    display: 'flex',
    justifyContent: 'center',
    marginRight: 'auto !important',
    marginLeft: 'auto !important',
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

import CheckedObjects from './CheckedObjects';
import NotYetCheckedObjects from './NotYetCheckedObjects';

const tabs = [
  {
    label: 'اشیای بررسی‌نشده',
    component: NotYetCheckedObjects,
  },
  {
    label: 'اشیای بررسی‌شده',
    component: CheckedObjects,
  },
];


const Index = ({
  getAllCheckableObjects,
  getPlayerCheckableObjects,
}) => {
  const history = useHistory();
  const BACKGROUND_IMAGE = '/backgrounds/baygani.jpg';
  const [tabIndex, setTabIndex] = React.useState(0);
  const classes = useStyles();

  const TabComponent = tabs[tabIndex].component;

  React.useEffect(() => {
    getAllCheckableObjects();
    getPlayerCheckableObjects();
  }, [])

  return (
    <Layout backgroundImage={BACKGROUND_IMAGE}>
      <Container className={classes.container}>
        <Grid xs={12} sm={10} md={8} container spacing={2} direction="row" justify="center">
          <Grid item xs={12}>
            <Typography variant='h1' align="center">
              {'اتاق بایگانی'}
            </Typography>
          </Grid>
          <Grid
            container
            item
            sm={3}
            xs={12}
            direction="column"
            justify="space-between">
            <Grid item>
              <ButtonGroup orientation="vertical" color="primary" fullWidth>
                {tabs.map((tab, index) => (
                  <Button
                    key={index}
                    onClick={() => setTabIndex(index)}
                    variant={tabIndex == index && 'contained'}
                    startIcon={tab.icon && <tab.icon />}>
                    {tab.label}
                  </Button>
                ))}
                <Button onClick={() => history.push('/rahro/')}>
                  {'به سمت راهرو'}
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid item sm={9} xs={12}>
            <Paper className={classes.paper}>
              <TabComponent />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default connect(
  null,
  {
    getAllCheckableObjects: getAllCheckableObjectsAction,
    getPlayerCheckableObjects: getPlayerCheckableObjectsAction,
  }
)(Index);