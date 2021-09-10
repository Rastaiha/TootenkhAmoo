import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import GetProblem from '../../components/Dialog/GetProblem'
import URLImage from '../../components/Konva/URLImage';
import {
  getAllFamousPersonsAction,
} from '../../redux/slices/game';
import Layout from '../Layout';
import ItemImage from './ItemImage';

const useStyles = makeStyles(() => ({
  fullHeight: {
    minHeight: '100vh',
  },
}));

const Index = ({
  getAllFamousPersons,
  allFamousPersons,
}) => {
  React.useEffect(() => {
    getAllFamousPersons();
  }, [])

  const check = (id) => {
    for (const person of allFamousPersons) {
      if (person.id == id) return true;
    }
    return false
  }

  let history = useHistory();
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [groupProblemId, setGroupProblemId] = React.useState();
  const BACKGROUND_IMAGE = '/Mashahir/Mashahir-Empty.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState([]);


  React.useEffect(() => {
    setObjects(
      [
        {
          urlImage: process.env.PUBLIC_URL +
            (check(1) ? '/Mashahir/Normal/araghi.png' : '/Mashahir/Pixelized/araghi p.png'),
          id: 1,
          x: 395,
          y: 390,
          isHover: false,
          onClick: () => {
            setGroupProblemId(10);
            setOpenDialog(true);
          },
        },
        {
          urlImage: process.env.PUBLIC_URL +
            (check(4) ? '/Mashahir/Normal/maraghei.png' : '/Mashahir/Pixelized/maraghei p.png'),
          id: 4,
          x: 395,
          y: 175,
          isHover: false,
          onClick: () => {
            setGroupProblemId(13);
            setOpenDialog(true);
          },
        },
        {
          urlImage: process.env.PUBLIC_URL +
            (check(3) ? '/Mashahir/Normal/soorena.png' : '/Mashahir/Pixelized/soorena p.png'),
          id: 3,
          x: 733,
          y: 300,
          isHover: false,
          onClick: () => {
            setGroupProblemId(12);
            setOpenDialog(true);
          },
        },
        {
          urlImage: process.env.PUBLIC_URL +
            (check(8) ? '/Mashahir/Normal/farabi.png' : '/Mashahir/Pixelized/farabi p.png'),
          id: 8,
          x: 544,
          y: 608,
          isHover: false,
          onClick: () => {
            setGroupProblemId(30);
            setOpenDialog(true);
          },
        },
        {
          urlImage: process.env.PUBLIC_URL +
            (check(6) ? '/Mashahir/Normal/mollasadra.png' : '/Mashahir/Pixelized/mollasadra p.png'),
          id: 6,
          x: 930,
          y: 608,
          isHover: false,
          onClick: () => {
            setGroupProblemId(15);
            setOpenDialog(true);
          },
        },
        {
          urlImage: process.env.PUBLIC_URL +
            (check(5) ? '/Mashahir/Normal/vahshi.png' : '/Mashahir/Pixelized/vahshi p.png'),
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
          id: 60,
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
          urlImage: process.env.PUBLIC_URL +
            (check(10) ? '/Mashahir/Normal/beyzayi.png' : '/Mashahir/Pixelized/beyzayi p.png'),
          id: 10,
          x: 1860,
          y: 265,
          isHover: false,
          onClick: () => {
            setGroupProblemId(32);
            setOpenDialog(true);
          },
        },
        {
          urlImage: process.env.PUBLIC_URL +
            (check(12) ? '/Mashahir/Normal/rastaranj.png' : '/Mashahir/Pixelized/rastaranj p.png'),
          id: 12,
          x: 2206,
          y: 306,
          isHover: false,
          onClick: () => {
            setGroupProblemId(34);
            setOpenDialog(true);
          },
        },
        {
          urlImage: process.env.PUBLIC_URL +
            (check(2) ? '/Mashahir/Normal/khaleghi.png' : '/Mashahir/Pixelized/khaleghi p.png'),
          id: 2,
          x: 2530,
          y: 283,
          isHover: false,
          onClick: () => {
            setGroupProblemId(11);
            setOpenDialog(true);
          },
        },
        {
          urlImage: process.env.PUBLIC_URL +
            (check(9) ? '/Mashahir/Normal/vafa.png' : '/Mashahir/Pixelized/vafa p.png'),
          id: 9,
          x: 1867,
          y: 565,
          isHover: false,
          onClick: () => {
            setGroupProblemId(21);
            setOpenDialog(true);
          },
        },
        {
          urlImage: process.env.PUBLIC_URL +
            (check(11) ? '/Mashahir/Normal/sadeghi.png' : '/Mashahir/Pixelized/sadeghi p.png'),
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
          urlImage: process.env.PUBLIC_URL +
            (check(7) ? '/Mashahir/Normal/loris.png' : '/Mashahir/Pixelized/loris p.png'),
          id: 7,
          x: 2530,
          y: 565,
          isHover: false,
          onClick: () => {
            setGroupProblemId(16);
            setOpenDialog(true);
          },
        },
      ]
    )
  }, [allFamousPersons])

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

const mapStateToProps = (state) => ({
  allFamousPersons: state.game.allFamousPersons,
})

export default connect(
  mapStateToProps,
  {
    getAllFamousPersons: getAllFamousPersonsAction,
  }
)(Index);
