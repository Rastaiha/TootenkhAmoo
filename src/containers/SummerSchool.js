import {
  Grid,
} from '@material-ui/core';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import useImage from 'use-image';
import { useHistory } from "react-router-dom";

import MessageSeries from '../components/Dialog/MessageSeries';
import URLImage from '../components/Konva/URLImage';
import Layout from './layout';



const OBJECTS = [
  {
    id: 0,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  },
  {
    id: 1,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  },
]

const Index = () => {
  const [objects, setObjects] = React.useState(OBJECTS);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  let history = useHistory();

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

  const goForward = (dst) => {
    history.push(dst);
  }

  const [image] = useImage(process.env.PUBLIC_URL + '/backgrounds/space.jpg');
  const scaleY = window.innerHeight / image?.height;

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



          {objects.map((star) => (
            <URLImage
              onClick={() => goForward('/folan-folan')}
              src={process.env.PUBLIC_URL + '/backgrounds/space.jpg'}
              width={100} height={100}
              key={star.id}
              id={star.id}
              x={star.x}
              y={star.y}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#89b717"
              opacity={0.8}
              draggable
              rotation={star.rotation}
              shadowColor="black"
              shadowBlur={10}
              // onClick={onClick}
              onMouseEnter={handleDragStart}
              onMouseLeave={handleDragEnd}
              shadowOpacity={0.6}
              shadowOffsetX={star.isDragging ? 10 : 5}
              shadowOffsetY={star.isDragging ? 10 : 5}
              scaleX={star.isDragging ? 1.2 : 1}
              scaleY={star.isDragging ? 1.2 : 1}
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