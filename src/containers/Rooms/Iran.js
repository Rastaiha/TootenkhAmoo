import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import URLImage from '../../components/Konva/URLImage';
import Layout from '../Layout';
import ItemImage from './ItemImage';
import GetProblem from '../../components/Dialog/GetProblem'

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
  const BACKGROUND_IMAGE = '/iran/iran room - empty.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState([
    {
      urlImage: process.env.PUBLIC_URL + '/iran/3 frames.png',
      id: 0,
      x: 1193,
      y: 160,
      isHover: false,
      onClick: () => {
        setGroupProblemId(1);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/cyrus cylinder.png',
      id: 1,
      x: 483,
      y: 567,
      isHover: false,
      onClick: () => {
        setGroupProblemId(1);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/koozeye boz.png',
      id: 3,
      x: 1295,
      y: 525,
      isHover: false,
      onClick: () => {
        setGroupProblemId(1);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/minakari.png',
      id: 4,
      x: 1025,
      y: 540,
      isHover: false,
      onClick: () => {
        setGroupProblemId(1);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/pasargad.png',
      id: 5,
      x: 768,
      y: 480,
      isHover: false,
      onClick: () => {
        setGroupProblemId(1);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/door.png',
      id: 6,
      x: 158,
      y: 745,
      isHover: false,
      onClick: () => {
        setGroupProblemId(1);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/iran frame.png',
      id: 7,
      x: 420,
      y: 225,
      isHover: false,
      onClick: () => {
        setGroupProblemId(1);
        setOpenDialog(true);
      },
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
