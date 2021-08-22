import React from 'react';

import LogoButton from './components/LogoButton';

const LandingAppBarItems = () => {
  const logoButton = <LogoButton size="large" />;

  return {
    desktopLeftItems: [],
    desktopRightItems: [logoButton],
    mobileLeftItems: [logoButton],
    mobileRightItems: [],
    mobileMenuListItems: [],
  };
};

export default LandingAppBarItems;
