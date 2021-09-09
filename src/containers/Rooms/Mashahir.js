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
  const BACKGROUND_IMAGE = '/Mashahir/Mashahir-Empty.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState([
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/araghi.png',
      id: 0,
      x: 395,
      y: 390,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/maraghei.png',
      id: 1,
      x: 395,
      y: 175,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/soorena.png',
      id: 2,
      x: 733,
      y: 300,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/farabi.png',
      id: 3,
      x: 544,
      y: 608,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/mollasadra.png',
      id: 4,
      x: 930,
      y: 608,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/vahshi.png',
      id: 5,
      x: 1085,
      y: 265,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Howz.png',
      id: 6,
      x: 1460,
      y: 470,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/beyzayi.png',
      id: 7,
      x: 1860,
      y: 265,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/rastaranj.png',
      id: 8,
      x: 2206,
      y: 306,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/khaleghi.png',
      id: 9,
      x: 2530,
      y: 283,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/vafa.png',
      id: 10,
      x: 1867,
      y: 565,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/sadeghi.png',
      id: 11,
      x: 2206,
      y: 600,
      isHover: false,
      onClick: () => goForward('/folan1'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Normal/loris.png',
      id: 12,
      x: 2530,
      y: 565,
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
