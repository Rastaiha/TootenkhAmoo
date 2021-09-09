import {
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from "react-router-dom";

import Layout from '../../Layout';

const useStyles = makeStyles(() => ({
  fullHeight: {
    minHeight: '100vh',
  },
}));


const Index = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const BACKGROUND_IMAGE = '/backgrounds/baygani.jpg';


  return (
    <Layout backgroundImage={BACKGROUND_IMAGE}>
    </Layout>
  );
};

export default Index;