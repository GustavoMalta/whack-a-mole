import { Player } from '../pages/Game/redux';
import { Axios } from './config.axios';

export const getLeaderBoardList = async () => {
  try {
    const axios = Axios();

    const { data } = await axios.get(`/api/v1/leaderboard`);
    if (data.success) {
      return data.records;
    }
    return new Error('cannot get leaderboard list');
  } catch (error) {
    console.log('error', error);
    return error;
  }
};

export const setPlayerScore = async (player: Player) => {
  try {
    const axios = Axios();
    const { data } = await axios.post(`/api/v1/players`, player);
    if (data.success) {
      return data.player;
    }
    return new Error('cannot set player score');
  } catch (error) {
    console.log('error', error);
    return error;
  }
  //   const axios = Axios();

  //   const { data } = await axios.get(`/api/v1/leaderboard`);
  //   if (data.success) {
  //     return data.records;
  //   }
  //   return new Error('cannot get leaderboard list');
  // } catch (error) {
  //   console.log('error', error);
  //   return error;
  // }
};
