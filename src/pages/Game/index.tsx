import { useEffect } from 'react';
import { getScore, startGameAsync, getStatus, GameStatesEnum } from './redux';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectPlayerName } from '../Home/redux';

import { Button, Hammer, Moles } from '../../components';
import scenarium from '../../assets/WAM_bg.jpg';
import { Div, Map, ScoreLabel, ScoreStatus } from './styles';
import { Axios } from '../../api/axios';
import { useNavigate } from 'react-router-dom';

export const Game = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectPlayerName);
  const status = useAppSelector(getStatus);
  // console.log(dispatch)
  // const name = useAppSelector(selectPlayerName);
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

        grava();
      }
    },
    [status],
  );

  async function grava() {
    try {
      const axios = Axios();

      const { data } = await axios.post(`/api/v1/players`, { name, score });
      console.log(data);

      if (data.success) {
        console.log('success');
        navigate('/leaderboards');
      }
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
            <ScoreLabel>{name}</ScoreLabel>
          </div>
        </ScoreStatus>
      </Moles>
      <Map src={scenarium} />
    </Div>
  );
};
