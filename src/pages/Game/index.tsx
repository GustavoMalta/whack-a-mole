import { useEffect, useState } from 'react';
import { getScore, savePlayerName, getStarted, startGameAsync } from './redux';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectPlayerName } from '../Home/redux';

import { Button, Hammer, Moles } from '../../components';
import scenarium from '../../assets/WAM_bg.jpg';
import { Div, Map, ScoreLabel, ScoreStatus } from './styles';

export const Game = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectPlayerName);
  // console.log(dispatch)
  // const name = useAppSelector(selectPlayerName);

  const onLoad = () => {
    console.log(name);
    dispatch(startGameAsync());
  };

  const score = useAppSelector(getScore);

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <Div>
      <Moles>
        <ScoreStatus>
          <div style={{ width: '33.33%' }}></div>
          <div style={{ display: 'flex', width: '33.33%', justifyContent: 'center' }}>
            <ScoreLabel>{score}</ScoreLabel>
          </div>
          <div style={{ display: 'flex', justifyContent: 'end', width: '33.33%' }}>
            <ScoreLabel>{name}</ScoreLabel>
          </div>
        </ScoreStatus>
      </Moles>
      <Map src={scenarium} />
    </Div>
  );
};
