import React from 'react';
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

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer >
        <URLImage width={window.innerWidth} height={window.innerHeight} src={process.env.PUBLIC_URL + '/backgrounds/space.jpg'} />
        <LionImage />
      </Layer>
    </Stage >
  );
};

export default Index;