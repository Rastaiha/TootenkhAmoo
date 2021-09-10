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
  const BACKGROUND_IMAGE = '/Mashahir/Mashahir-Empty.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState([
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/araghi p.png',
      id: 0,
      x: 395,
      y: 390,
      isHover: false,
      onClick: () => {
        setGroupProblemId(10);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/maraghei p.png',
      id: 1,
      x: 395,
      y: 175,
      isHover: false,
      onClick: () => {
        setGroupProblemId(13);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/soorena p.png',
      id: 2,
      x: 733,
      y: 300,
      isHover: false,
      onClick: () => {
        setGroupProblemId(12);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/farabi p.png',
      id: 3,
      x: 544,
      y: 608,
      isHover: false,
      onClick: () => {
        setGroupProblemId(30);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/mollasadra p.png',
      id: 4,
      x: 930,
      y: 608,
      isHover: false,
      onClick: () => {
        setGroupProblemId(15);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/vahshi p.png',
      id: 5,
      x: 1085,
      y: 265,
      isHover: false,
      onClick: () => {
        setGroupProblemId(14);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Howz.png',
      id: 6,
      x: 1460,
      y: 470,
      isHover: false,
      disabled: true,
      onClick: () => {
        setGroupProblemId(42);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/beyzayi p.png',
      id: 7,
      x: 1860,
      y: 265,
      isHover: false,
      onClick: () => {
        setGroupProblemId(32);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/rastaranj p.png',
      id: 8,
      x: 2206,
      y: 306,
      isHover: false,
      onClick: () => {
        setGroupProblemId(34);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/khaleghi p.png',
      id: 9,
      x: 2530,
      y: 283,
      isHover: false,
      onClick: () => {
        setGroupProblemId(11);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/vafa p.png',
      id: 10,
      x: 1867,
      y: 565,
      isHover: false,
      onClick: () => {
        setGroupProblemId(21);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/sadeghi p.png',
      id: 11,
      x: 2206,
      y: 600,
      isHover: false,
      onClick: () => {
        setGroupProblemId(33);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/Mashahir/Pixelized/loris p.png',
      id: 12,
      x: 2530,
      y: 565,
      isHover: false,
      onClick: () => {
        setGroupProblemId(16);
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
        text={'آیا مطمئنید؟ البته نگران نباشید، برای گرفتن سوال در تالار مشاهیر احتیاجی به پرداخت سکه نیست!'}
        open={openDialog}
        handleClose={() => setOpenDialog(!openDialog)}
        problemGroupId={groupProblemId}
      />
    </Layout>
  );
};

export default Index;
