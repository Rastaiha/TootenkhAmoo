import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import { Layer, Stage, Star, Text, Image } from 'react-konva';
import useImage from 'use-image';

import URLImage from '../components/Konva/URLImage';

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

const LionImage = () => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image draggable image={image} />;
};

const Index = () => {
  const [stars, setStars] = React.useState(INITIAL_STATE);

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };


  const [image] = useImage(process.env.PUBLIC_URL + '/backgrounds/space.jpg');
  const scaleY = window.innerHeight / image?.height;

  return (
    <Grid container justify='center'>
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
          {/* <Text text="Try to drag a star" /> */}
          {stars.map((star) => (
            <Star
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
    </Grid>
  );
};

export default Index;