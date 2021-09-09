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
  const BACKGROUND_IMAGE = '/viking/viking room - empty.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState([
    {
      urlImage: process.env.PUBLIC_URL + '/viking/ax.png',
      id: 0,
      x: 1238,
      y: 278,
      isHover: false,
      onClick: () => goForward('/problem/1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/viking/horn.png',
      id: 1,
      x: 380,
      y: 540,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/viking/hat.png',
      id: 2,
      x: 975,
      y: 515,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/viking/ship.png',
      id: 3,
      x: 680,
      y: 545,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/viking/door.png',
      id: 4,
      x: 1335,
      y: 745,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/viking/viking frame.png',
      id: 5,
      x: 250,
      y: 240,
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
    <Layout backgroundImage={BACKGROUND_IMAGE}>
      <Stage
        width={Math.min(image?.width * scaleY, window.innerWidth)}
        height={window.innerHeight}>
        <Layer
          draggable
          dragBoundFunc={(pos) => {
            pos.y = 0;
            if (window.innerWidth < image?.width * scaleY) {
              if (pos.x > 0) pos.x = 0;
              if (pos.x < window.innerWidth - image?.width * scaleY)
                pos.x = window.innerWidth - image?.width * scaleY;
            } else {
              pos.x = 0;
            }
            return pos;
          }}>
          <URLImage
            scaleX={scaleY}
            scaleY={scaleY}
            src={process.env.PUBLIC_URL + BACKGROUND_IMAGE}
          />

          {objects.map((object) => (
            <ItemImage
              key={object.id}
              object={object}
              scale={scaleY}
              handleMouseEnter={handleMouseEnter}
              handleMouseExit={handleMouseExit}
            />
          ))}
        </Layer>
      </Stage>
    </Layout>
  );
};

export default Index;
