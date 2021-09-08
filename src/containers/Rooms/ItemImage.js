import React from 'react';
import URLImage from '../../components/Konva/URLImage';


const Index = ({ object, scale, handleMouseEnter, handleMouseExit }) => {
  return (
    <URLImage
      onClick={object.onClick}
      src={object.urlImage}
      key={object.id}
      id={object.id}
      x={object.x * scale}
      y={object.y * scale}
      opacity={1}
      rotation={object.rotation}
      shadowColor="black"
      shadowBlur={10}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      shadowOpacity={0.6}
      shadowOffsetX={object.isHover ? 10 : 5}
      shadowOffsetY={object.isHover ? 10 : 5}

      scaleX={object.isHover ? scale + 0.05 : scale}
      scaleY={object.isHover ? scale + 0.05 : scale}
    />
  )
}
export default Index;