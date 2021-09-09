import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import URLImage from '../../components/Konva/URLImage';
import Layout from '../Layout';
import ItemImage from './ItemImage';

const useStyles = makeStyles(() => ({
  fullHeight: {
    minHeight: '100vh',
  },
}));

const Index = () => {
  let history = useHistory();
  const classes = useStyles();
  const BACKGROUND_IMAGE = '/Mashahir/Mashahir-Full.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleX = window.innerWidth / image?.width;
  const [objects, setObjects] = React.useState([
    {
      urlImage: process.env.PUBLIC_URL + '/security_room/satl.png',
      id: 0,
      x: 605,
      y: 1425,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/security_room/komod.png',
      id: 1,
      x: 2200,
      y: 680,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/security_room/Tablo.png',
      id: 2,
      x: 319,
      y: 1013,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
  ]);

  const goForward = (dst) => {
    history.push(dst);
  };

  const handleMouseEnter = (e) => {
    const id = e.target.id();
    setObjects(
      objects.map((star) => {
        return {
          ...star,
          isHover: star.id === id,
        };
      })
    );
  };

  const handleMouseExit = (e) => {
    setObjects(
      objects.map((star) => {
        return {
          ...star,
          isHover: false,
        };
      })
    );
  };

  return (
    <Layout>
      <Stage
        width={window.innerWidth}
        height={Math.min(image?.height * scaleX, window.innerHeight)}>
        <Layer
          draggable
          dragBoundFunc={(pos) => {
            pos.x = 0;
            if (window.innerHeight < image?.height * scaleX) {
              if (pos.y > 0) pos.y = 0;
              if (pos.y < window.innerHeight - image?.height * scaleX)
                pos.y = window.innerHeight - image?.height * scaleX;
            } else {
              pos.y = 0;
            }
            return pos;
          }}>
          <URLImage
            scaleX={scaleX}
            scaleY={scaleX}
            src={process.env.PUBLIC_URL + BACKGROUND_IMAGE}
          />
          {objects.map((object) => (
            <ItemImage
              key={object.id}
              object={object}
              scale={scaleX}
              handleMouseEnter={handleMouseEnter}
              handleMouseExit={handleMouseExit}
            />
          ))}
        </Layer>
      </Stage>
      {/* <MessageSeries
        handleClose={() => setDialogOpen(!dialogOpen)}
        open={dialogOpen}
      /> */}
    </Layout>
  );
};

export default Index;
