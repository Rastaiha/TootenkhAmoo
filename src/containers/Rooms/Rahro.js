import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import GetProblem from '../../components/Dialog/GetProblem'
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
  const [openDialog, setOpenDialog] = React.useState(false);
  const [groupProblemId, setGroupProblemId] = React.useState();
  const BACKGROUND_IMAGE = '/Rahro/Rahro-Empty.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState([
    {
      urlImage: process.env.PUBLIC_URL + '/Rahro/absardkon.png',
      id: 0,
      x: 165,
      y: 580,
      isHover: false,
      onClick: () => { },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Rahro/arrowright.png',
      id: 1,
      x: 1290,
      y: 200,
      isHover: false,
      onClick: () => goForward('/baygani/no-start/'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Rahro/arrowleft.png',
      id: 2,
      x: 165,
      y: 200,
      isHover: false,
      onClick: () => goForward('/main_hall/'),
    }
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
      <GetProblem
        open={openDialog}
        handleClose={() => setOpenDialog(!openDialog)}
        problemGroupId={groupProblemId}
      />
    </Layout>
  );
};

export default Index;
