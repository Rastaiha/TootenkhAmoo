import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslate } from 'react-redux-multilingual/lib/context';
import { Link } from 'react-router-dom';

import LogoButton from './components/LogoButton';
import MenuButton from './components/MenuButton';
import BackButton from './components/BackButton';

const ArticleAppBarItems = () => {
  const t = useTranslate();
  const logoButton = <LogoButton />;
  const menuButton = <MenuButton />;
  const backButton = <BackButton />
  return {
    desktopLeftItems: [backButton],
    desktopRightItems: [menuButton],
    mobileLeftItems: [backButton],
    mobileRightItems: [menuButton],
    mobileMenuListItems: [],
  };
};

export default ArticleAppBarItems;
