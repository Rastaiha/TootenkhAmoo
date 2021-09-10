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
      key={object.id}
      id={object.id}
      x={object.x * scale}
      y={object.y * scale}
      opacity={1}
      rotation={object.rotation}
      shadowColor="black"
      shadowBlur={10}
      shadowOpacity={0.6}
      shadowOffsetX={(object.isHover && !object.disabled) ? 10 : 5}
      shadowOffsetY={(object.isHover && !object.disabled) ? 10 : 5}
      scaleX={(object.isHover && !object.disabled) ? scale + 0.03 : scale}
      scaleY={(object.isHover && !object.disabled) ? scale + 0.03 : scale}

      onTap={(e) => {
        handleMouseEnter(e);
        setTimeout(() => {
          handleMouseExit(e);
        }, [200])
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}

      onDblTap={object.onClick}
      onClick={object.onClick}
    />
  )
}
export default Index;