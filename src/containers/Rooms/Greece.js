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
  const [image] = useImage(process.env.PUBLIC_URL + '/backgrounds/space.jpg');
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState(
    [
      {
        id: 0,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 180,
        isDragging: false,
        onClick: () => goForward('/folan1'),
      },
      {
        id: 1,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 180,
        isDragging: false,
        onClick: () => goForward('/folan2'),
      },
      {
        id: 2,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 180,
        isDragging: false,
        onClick: () => goForward('/folan3'),
      },
      {
        id: 3,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 180,
        isDragging: false,
        onClick: () => goForward('/folan4'),
      },
    ]
  );

  const goForward = (dst) => {
    history.push(dst);
  }

  const handleDragStart = (e) => {
    const id = e.target.id();
    setObjects(
      objects.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };

  const handleDragEnd = (e) => {
    setObjects(
      objects.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  return (
    <Layout>
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
          <URLImage scaleX={scaleY} scaleY={scaleY} src={process.env.PUBLIC_URL + '/backgrounds/space.jpg'} />

          {objects.map((object) => (
            <URLImage
              onClick={object.onClick}
              src={process.env.PUBLIC_URL + '/backgrounds/space.jpg'}
              width={100} height={100}
              key={object.id}
              id={object.id}
              x={object.x}
              y={object.y}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#89b717"
              opacity={0.8}
              draggable
              rotation={object.rotation}
              shadowColor="black"
              shadowBlur={10}
              // onClick={onClick}
              onMouseEnter={handleDragStart}
              onMouseLeave={handleDragEnd}
              shadowOpacity={0.6}
              shadowOffsetX={object.isDragging ? 10 : 5}
              shadowOffsetY={object.isDragging ? 10 : 5}
              scaleX={object.isDragging ? 1.2 : 1}
              scaleY={object.isDragging ? 1.2 : 1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
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