import {
  Grid,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { useHistory } from "react-router-dom";
import useImage from 'use-image';

import MessageSeries from '../../components/Dialog/MessageSeries';
import URLImage from '../../components/Konva/URLImage';
import Layout from '../layout';


const useStyles = makeStyles(() => ({
  fullHeight: {
    minHeight: '100vh',
  },
}));


const Index = () => {
  let history = useHistory()
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const BACKGROUND_IMAGE = '/egypt/empty-room.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState(
    [
      {
        urlImage: process.env.PUBLIC_URL + '/egypt/cat.png',
        id: 0,
        x: 465 * window.innerWidth / 1000,
        y: 360 * window.innerHeight / 1000,
        width: 100,
        height: 200,
        isHover: false,
        onClick: () => goForward('/folan1'),
      },
      {
        urlImage: process.env.PUBLIC_URL + '/egypt/harp.png',
        id: 1,
        x: 240,
        y: 370,
        width: 200,
        height: 300,
        isHover: false,
        onClick: () => goForward('/folan1'),
      },
      {
        urlImage: process.env.PUBLIC_URL + '/egypt/pharaoh.png',
        id: 2,
        x: 900,
        y: 60,
        width: 150,
        height: 600,
        isHover: false,
        onClick: () => goForward('/folan1'),
      },
      {
        urlImage: process.env.PUBLIC_URL + '/egypt/pyramids.png',
        id: 3,
        x: 490,
        y: 410,
        width: 170,
        height: 50,
        isHover: false,
        onClick: () => goForward('/folan1'),
      }
    ]
  );

  const goForward = (dst) => {
    history.push(dst);
  }

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
      <Stage width={Math.min(image?.width * scaleY, window.innerWidth)} height={window.innerHeight}>
        <Layer
          draggable
          dragBoundFunc={(pos) => {
            pos.y = 0;
            if (window.innerWidth < image?.width * scaleY) {
              if (pos.x > 0) pos.x = 0;
              if (pos.x < window.innerWidth - image?.width * scaleY)
                pos.x = window.innerWidth - image?.width * scaleY
            } else {
              pos.x = 0;
            }
            return pos;
          }}
        >
          <URLImage scaleX={scaleY} scaleY={scaleY} src={process.env.PUBLIC_URL + BACKGROUND_IMAGE} />

          {objects.map((object) => (
            <URLImage
              onClick={object.onClick}
              src={object.urlImage}
              width={object.width}
              height={object.height}
              key={object.id}
              id={object.id}
              x={object.x}
              y={object.y}
              innerRadius={300}
              outerRadius={40}
              opacity={1}
              rotation={object.rotation}
              shadowColor="black"
              shadowBlur={10}

              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseExit}
              shadowOpacity={0.6}
              shadowOffsetX={object.isHover ? 10 : 5}
              shadowOffsetY={object.isHover ? 10 : 5}
              scaleX={object.isHover ? 1.07 : 1}
              scaleY={object.isHover ? 1.07 : 1}

            />
          ))}
        </Layer>
      </Stage >
      <MessageSeries
        handleClose={() => setDialogOpen(!dialogOpen)}
        open={dialogOpen} />
    </Layout>
  );
};

export default Index;