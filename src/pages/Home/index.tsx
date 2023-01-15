import { Div } from './styles';
import { selectPlayerName, setPlayerName } from './redux';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button, Input } from '../../components';
import { useNavigate } from 'react-router-dom';
import { authorize, restart } from '../Game/redux';
import { useEffect } from 'react';

export const Home = () => {
  const dispatch = useAppDispatch();
  const playerName = useAppSelector(selectPlayerName);
  let navigate = useNavigate();

  useEffect(function () {
    dispatch(setPlayerName(''));
    dispatch(restart());
  }, []);

  function handleSubmit() {
    if (playerName) {
      dispatch(authorize());
      navigate('/game');
    }
  }

  const handleInput = (e: string) => {
    dispatch(setPlayerName(e));
  };

  return (
    <Div>
      <Input
        placeHolder="Type your name"
        label={'Type your Name'}
        onChange={handleInput}
        value={playerName}
        onPressEnter={() => handleSubmit()}
      />
      <Button text="Start Smashing" onClick={handleSubmit} />
    </Div>
  );
};
