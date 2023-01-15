import { useEffect } from 'react';
import {
  getScore,
  startGameAsync,
  getStatus,
  GameStatesEnum,
  getPlayer,
  setNewPlayer,
  getAuthorized,
  savePlayer,
} from './redux';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { Button, Hammer, Moles } from '../../components';
import scenarium from '../../assets/WAM_bg.jpg';
import { Div, Map, ScoreLabel, ScoreStatus } from './styles';
// import { Axios } from '../../api/axios';
import { useNavigate } from 'react-router-dom';

export const Game = () => {
  const dispatch = useAppDispatch();

  const player = useAppSelector(getPlayer);
  const status = useAppSelector(getStatus);
  // console.log(dispatch)
  let navigate = useNavigate();

  const onLoad = () => {
    console.log(name);
    dispatch(startGameAsync());
  };

  const score = useAppSelector(getScore);

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(
    function () {
      if (status == GameStatesEnum.FINISHED) {
        console.log('axios');
        submitScore();
      }
    },
    [status],
  );

  async function submitScore() {
    try {
      const playerSaved = await dispatch(setNewPlayer({ ...player, score }));
      dispatch(savePlayer(playerSaved));
      navigate('/leaderboards');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Div>
      <Moles>
        <ScoreStatus>
          <div style={{ width: '33.33%' }}></div>
          <div style={{ display: 'flex', width: '33.33%', justifyContent: 'center' }}>
            <ScoreLabel>{score}</ScoreLabel>
          </div>
          <div style={{ display: 'flex', justifyContent: 'end', width: '33.33%' }}>
            <ScoreLabel>{player.name}</ScoreLabel>
          </div>
        </ScoreStatus>
      </Moles>
      <Map src={scenarium} />
    </Div>
  );
};
