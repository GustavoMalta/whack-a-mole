import { useEffect } from 'react';
import {
  getScore,
  startGameAsync,
  getStatus,
  GameStatesEnum,
  getPlayer,
  setNewPlayer,
  savePlayer,
} from './redux';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { MolesGrid } from '../../components';
import { Div, DivScore, Map, ScoreLabel, ScoreStatus } from './styles';
import { useNavigate } from 'react-router-dom';

export const Game = () => {
  const dispatch = useAppDispatch();

  const player = useAppSelector(getPlayer);
  const status = useAppSelector(getStatus);

  let navigate = useNavigate();

  const onLoad = () => {
    dispatch(startGameAsync());
  };

  const score = useAppSelector(getScore);

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(
    function () {
      if (status == GameStatesEnum.FINISHED) {
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
      <ScoreStatus>
        <DivScore>
          <ScoreLabel small >SCORE:</ScoreLabel>
          <ScoreLabel>{score}</ScoreLabel>
        </DivScore>
        <DivScore>
          <ScoreLabel small >PLAYER:</ScoreLabel>
          <ScoreLabel>{player.name}</ScoreLabel>
        </DivScore>
      </ScoreStatus>
      <MolesGrid />
    </Div>
  );
};
