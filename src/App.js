import './Theme/Styles/App.css';

import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual';

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

const App = ({ dir }) => {
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
  React.useEffect(() => {
    function handleResize() {
      window.location.reload()
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <IntlProvider translations={translations}>
      {dir === 'rtl' ? (
        <>
          <ThemeProvider theme={RTLMuiTheme}>
            <StylesProvider jss={jss}>
              <ArticleApp />
            </StylesProvider>
          </ThemeProvider>
        </>
      ) : (
          <>
            <ThemeProvider theme={MuiTheme}>
              <ArticleApp />
            </ThemeProvider>
          </>
        )}
      <MoreThanOneTabDialog open={open} />
    </IntlProvider>
  );
};

const mapStateToProps = (state) => ({
  dir: state.Intl.locale === 'fa' ? 'rtl' : 'ltr',
});

export default connect(mapStateToProps)(App);
