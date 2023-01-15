import { useEffect } from 'react';
import { getLeaderBoard, getLeaderBoards } from './redux';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { TableScore } from '../../components';
import { Div, DivName, DivRank, DivScore, LeaderBorad, ScoreLabel, ScoreStatus } from './styles';
import { getPlayer, getScore, unAthorize } from '../Game/redux';

export const Leaderboards = () => {
  const dispatch = useAppDispatch();
  const { id, name, rank, score } = useAppSelector(getPlayer);

  const leaderBoards = useAppSelector(getLeaderBoards);

  useEffect(function () {
    fillLeaderBoard();
    dispatch(unAthorize());
  }, []);

  // useEffect(
  //   function () {
  //     bodyTable();
  //   },
  //   [leaderBoards],
  // );

  async function fillLeaderBoard() {
    dispatch(getLeaderBoard());
  }

  return (
    <Div>
      {/* <Moles> */}
      <ScoreStatus>
        <DivRank>
          <span>{rank >= 0 ? 'Rank:' : ''}</span>
          <ScoreLabel>{rank}</ScoreLabel>
        </DivRank>
        <DivScore>
          <span>{score >= 0 ? 'Score:' : ''}</span>
          <ScoreLabel>{score}</ScoreLabel>
        </DivScore>
        <DivName>
          <span>{name ? 'Player:' : ''}</span>
          <ScoreLabel>{name}</ScoreLabel>
        </DivName>
      </ScoreStatus>
      <LeaderBorad>
        <TableScore players={leaderBoards} playerId={id} />
      </LeaderBorad>
    </Div>
  );
};
