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

import { Moles } from '../../components';
import scenarium from '../../assets/WAM_bg.jpg';
import { Div, DivScore, Map, ScoreLabel, ScoreStatus } from './styles';
// import { Axios } from '../../api/axios';
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
        <DivScore style={{ justifyContent: 'center' }}>
          <ScoreLabel min={true}>SCORE:</ScoreLabel>
          <ScoreLabel>{score}</ScoreLabel>
        </DivScore>
        <DivScore style={{ justifyContent: 'end' }}>
          <ScoreLabel min={true}>PLAYER:</ScoreLabel>
          <ScoreLabel>{player.name}</ScoreLabel>
        </DivScore>
      </ScoreStatus>
      <Moles />
      {/* <Map src={scenarium} /> */}
    </Div>
  );
};
