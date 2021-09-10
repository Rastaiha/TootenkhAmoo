import './Theme/Styles/App.css';

import { Button, CssBaseline, LinearProgress } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual';
import { useHistory } from 'react-router-dom';
import MoreThanOneTabDialog from './components/Dialog/MoreThanOneTab';
import Notifier from './components/Notifications/Notifications';
import Root from './root';
import MuiTheme from './Theme/MuiThemes/MuiTheme';
import RTLMuiTheme from './Theme/MuiThemes/RTLMuiTheme';
import translations from './translations';
import jss from './utils/jssRTL';

const ArticleApp = () => (
  <SnackbarProvider>
    <Notifier />
    <CssBaseline />
    <Root />
  </SnackbarProvider>
);

const App = ({
  dir,
  isFetching,
}) => {
  const history = useHistory()

  useEffect(() => {
    document.body.dir = dir;
  }, [dir]);

  // handle one active tab
  const [open, setOpen] = React.useState(false);
  window.addEventListener('storage', () => {
    setOpen(true);
  }, false)
  localStorage.setItem('OneTab', Math.random())

  // handle refresh on resize
  // React.useEffect(() => {
  //   function handleResize() {
  //     window.location.reload()
  //   }
  //   window.addEventListener('resize', handleResize)
  // })

  const Loading = () => {
    if (isFetching) {
      return (
        <div style={{ width: '100%', position: 'fixed', top: '0px', zIndex: '1000', }}>
          <LinearProgress />
        </div>
      );
    } else {
      return <></>;
    }
  };


  return (
    <IntlProvider translations={translations}>
      {dir === 'rtl' ? (
        <ThemeProvider theme={RTLMuiTheme}>
          <StylesProvider jss={jss}>
            <Loading />
            <ArticleApp />
            {
              <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
                <Button
                  onClick={() => history.goBack()}
                  variant="contained"
                  color="primary">
                  {'بازگشت به عقب'}
                </Button>
              </div>
            }
          </StylesProvider>
        </ThemeProvider>
      ) : (
          <ThemeProvider theme={MuiTheme}>
            <Loading />
            <ArticleApp />
          </ThemeProvider>
        )}
      <MoreThanOneTabDialog open={open} />
    </IntlProvider>
  );
};

const mapStateToProps = (state) => ({
  dir: state.Intl.locale === 'fa' ? 'rtl' : 'ltr',
  isFetching: state.account.isFetching
    || state.problem.isFetching
    || state.game.isFetching
    || state.exchange.isFetching,
});

export default connect(mapStateToProps)(App);
