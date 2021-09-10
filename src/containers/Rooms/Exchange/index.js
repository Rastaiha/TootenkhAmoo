import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

import Layout from '../../Layout';
import AllExchanges from './AllExchanges';
import CreateNewExchange from './CreateNewExchange';
import PlayerExchanges from './PlayerExchanges';


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


const tabs = [
  {
    label: 'همه‌ی پیشنهادات',
    component: AllExchanges,
  },
  {
    label: 'تبادلات من',
    component: PlayerExchanges,
  },
  {
    label: 'ایجاد تبادل جدید',
    component: CreateNewExchange,
  },

];


const Index = () => {
  const { mode } = useParams()
  const BACKGROUND_IMAGE = '/backgrounds/baygani.jpg';
  const [tabIndex, setTabIndex] = React.useState(0);
  const classes = useStyles();

  const TabComponent = tabs[tabIndex].component;

  return (
    <Layout backgroundImage={BACKGROUND_IMAGE}>
      <Container className={classes.container}>
        <Grid xs={12} sm={10} md={8} container spacing={2} direction="row" justify="center">
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

export default Index;