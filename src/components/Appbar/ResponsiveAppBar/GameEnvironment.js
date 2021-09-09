import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslate } from 'react-redux-multilingual/lib/context';
import { Link } from 'react-router-dom';

import BackButton from './components/BackButton';
import JitsiButton from './components/JitsiButton';
import LogoButton from './components/LogoButton';
import MenuButton from './components/MenuButton';
import NotificationsButton from './components/NotificationsButton';

const ArticleAppBarItems = () => {
  const t = useTranslate();
  const logoButton = <LogoButton />;
  const notificationsButton = <NotificationsButton />;
  const menuButton = <MenuButton />;
  const backButton = <BackButton />
  const jitsiButton = <JitsiButton />

  return {
    desktopLeftItems: [backButton],
    desktopRightItems: [menuButton, jitsiButton, notificationsButton],
    mobileLeftItems: [notificationsButton, backButton],
    mobileRightItems: [menuButton, jitsiButton],
    mobileMenuListItems: [],
  };
};

export default ArticleAppBarItems;
