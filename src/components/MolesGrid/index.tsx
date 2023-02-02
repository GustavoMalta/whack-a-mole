import React, { useEffect, useState } from 'react';
import hole from '../../assets/WAM_Hole.png';
import mole from '../../assets/WAM_Mole.png';
import scenarium from '../../assets/WAM_bg.jpg';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMoleUp, getAuthorized, setMoleHit } from '../../pages/Game/redux';
import Hammer from '../Hammer';
import { Div, Grid } from './styles';
import { Mole } from '../index'

interface Props {}
interface Position {
  x: number;
  y: number;
}

function MolesGrid(props: Props) {

  const moleUp = useAppSelector(getMoleUp);
  const isAuthorized = useAppSelector(getAuthorized);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [smash, setSmash] = useState(false);

  const dispatch = useAppDispatch();

  const handleSmash = (hit: Boolean) => {
    if (isAuthorized && hit) {
      dispatch(setMoleHit());
    }
  };

  const handleHammer = (event: { pageX: number; pageY: number }) => {
    setPosition({
      x: event.pageX - 60,
      y: event.pageY - 125,
    });
  };

  useEffect(
    function () {
      const interval = setInterval(() => {
        if (smash) {
          setSmash(false);
        }
      }, 100);
      return () => clearInterval(interval);
    },
    [smash],
  );
  interface ISomeCoolInterface {
    some: 'string';
    cool: 'string';
    props: 'string'
    num: number,
 }

  function addMoles(num: number): Array<JSX.Element> {
    const array = []
    for (var x=0; x< num; x++){
      array.push(<Mole handleSmash={handleSmash} key={x} moleUp={moleUp == x}/>)
    }
    return array
  }

  return (
    <Div className="moles" onMouseMoveCapture={handleHammer} bgImg={scenarium}>
      <Grid onClick={() => setSmash(true)}>
        <>
            <Hammer posX={position.x} posY={position.y} smash={smash} />
            {addMoles(12)}
        </>
      </Grid>
    </Div>
  );
}

export default MolesGrid;
