import { ReactElement, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMoleUp } from '../../pages/Game/redux';
import { Player } from '../../pages/Game/redux';
import { Table } from './styles';
// import './styles.css'

interface Props {
  players: Player[];
  playerId?: string;
}

function TableScore(props: Props) {
  const { players, playerId } = props;

  const bodyTable = () => {
    const body = [];
    if (players)
      for (let x = 0; x < players.length; x++) {
        const player = players[x];
        body.push(
          <tr
            key={x}
            style={{
              boxShadow:
                playerId == player.id
                  ? '0px 0px 5px rgba(255,0,0,0.4)'
                  : '0px 0px 5px rgba(0,0,0,0.1)',
            }}>
            <td>{x + 1}</td>
            <td>{player.name || 'Guest'}</td>
            <td>{player.score || 0}Pts</td>
          </tr>,
        );
      }
    return body;
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{bodyTable()}</tbody>
    </Table>
  );
}

export default TableScore;
