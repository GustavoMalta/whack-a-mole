import { useEffect } from 'react';
import { getScore, startGameAsync } from './redux';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectPlayerName } from '../Home/redux';

import { Moles } from '../../components';
import scenarium from '../../assets/WAM_bg.jpg';
import { Div, Map, ScoreLabel, ScoreStatus } from './styles';

export const Leaderboards = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectPlayerName);

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
