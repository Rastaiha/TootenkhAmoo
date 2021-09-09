import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslate } from 'react-redux-multilingual/lib/context';
import { Link } from 'react-router-dom';

import BackButton from './components/BackButton';
import JitsiButton from './components/JitsiButton';
import LogoButton from './components/LogoButton';
import MenuButton from './components/MenuButton';

const ArticleAppBarItems = () => {
  const t = useTranslate();
  const logoButton = <LogoButton />;
  const menuButton = <MenuButton />;
  const backButton = <BackButton />
  const jitsiButton = <JitsiButton />

  return {
    desktopLeftItems: [backButton],
    desktopRightItems: [menuButton, jitsiButton],
    mobileLeftItems: [backButton],
    mobileRightItems: [menuButton],
    mobileMenuListItems: [],
  };
};

export default ArticleAppBarItems;
