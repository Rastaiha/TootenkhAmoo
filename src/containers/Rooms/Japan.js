import {
    Grid,
    makeStyles,
} from '@material-ui/core';
import React from 'react';
import {Image, Layer, Stage, Star, Text} from 'react-konva';
import {useHistory} from "react-router-dom";
import useImage from 'use-image';

import MessageSeries from '../../components/Dialog/MessageSeries';
import URLImage from '../../components/Konva/URLImage';
import Layout from '../layout';


const useStyles = makeStyles(() => ({
    fullHeight: {
        minHeight: '100vh',
    },
}));


const Index = () => {
    let history = useHistory()
    const classes = useStyles();
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const BACKGROUND_IMAGE = '/japan/japan room - empty.png';
    const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
    const scaleY = window.innerHeight / image?.height;
    const [objects, setObjects] = React.useState(
        [
            {
                urlImage: process.env.PUBLIC_URL + '/japan/sushi.png',
                id: 0,
                x: 880,
                y: 595,
                width: 180,
                height: 60,
                isHover: false,
                onClick: () => goForward('/folan1'),
            },
            {
                urlImage: process.env.PUBLIC_URL + '/japan/chance cat.png',
                id: 1,
                x: 320,
                y: 445,
                width: 100,
                height: 150,
                isHover: false,
                onClick: () => goForward('/folan1'),
            },
            {
                urlImage: process.env.PUBLIC_URL + '/japan/cherry blossom vase.png',
                id: 3,
                x: 575,
                y: 230,
                width: 200,
                height: 300,
                isHover: false,
                onClick: () => goForward('/folan1'),
            }
            ,{
            urlImage: process.env.PUBLIC_URL + '/japan/dragon.png',
            id: 4,
            x: 125,
            y: 60,
            width: 170,
            height: 250,
            isHover: false,
            onClick: () => goForward('/folan1'),
        }
            ,{
            urlImage: process.env.PUBLIC_URL + '/japan/katana.png',
            id: 5,
            x: 105,
            y: 445,
            width: 50,
            height: 350,
            isHover: false,
            onClick: () => goForward('/folan1'),
        }
        ]
    );

    const goForward = (dst) => {
        history.push(dst);
    }

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
                    <URLImage scaleX={scaleY} scaleY={scaleY}
                              src={process.env.PUBLIC_URL + BACKGROUND_IMAGE}/>

                    {objects.map((object) => (
                        <URLImage
                            onClick={object.onClick}
                            src={object.urlImage}
                            width={object.width}
                            height={object.height}
                            key={object.id}
                            id={object.id}
                            x={object.x * scaleY}
                            y={object.y * scaleY}
                            innerRadius={300}
                            outerRadius={40}
                            opacity={1}
                            rotation={object.rotation}
                            shadowColor="black"
                            shadowBlur={10}

                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseExit}
                            shadowOpacity={0.6}
                            shadowOffsetX={object.isHover ? 10 : 5}
                            shadowOffsetY={object.isHover ? 10 : 5}
                            scaleX={object.isHover ? 1.07 : 1}
                            scaleY={object.isHover ? 1.07 : 1}

                        />
                    ))}
                </Layer>
            </Stage>
            <MessageSeries
                handleClose={() => setDialogOpen(!dialogOpen)}
                open={dialogOpen}/>
        </Layout>
    );
};

export default Index;