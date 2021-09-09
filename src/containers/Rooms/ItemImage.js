import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const Index = ({
  object,
  scale,
  handleMouseEnter,
  handleMouseExit
}) => {
  const [image] = useImage(object.urlImage);

  if (!image) {
    return (<></>)
  }

  return (
    <Image
      image={image}
      offsetX={image.width / 2}
      offsetY={image.height / 2}
      onClick={object.onClick}
      key={object.id}
      id={object.id}
      x={object.x * scale}
      y={object.y * scale}
      opacity={1}
      rotation={object.rotation}
      shadowColor="black"
      shadowBlur={10}

      onTap={(e) => {
        handleMouseEnter(e);
        setTimeout(() => {
          handleMouseExit(e);
        }, [200])
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      shadowOpacity={0.6}
      shadowOffsetX={object.isHover ? 10 : 5}
      shadowOffsetY={object.isHover ? 10 : 5}

      scaleX={object.isHover ? scale + 0.03 : scale}
      scaleY={object.isHover ? scale + 0.03 : scale}
    />
  )
}
export default Index;