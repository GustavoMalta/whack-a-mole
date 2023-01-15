import { Div } from './styles';
import { savePlayerName, selectPlayerName } from './redux';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button, Input, Hammer } from '../../components';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const dispatch = useAppDispatch();
  const playerName = useAppSelector(selectPlayerName);
  let navigate = useNavigate();

  function handleSubmit() {
    if (playerName) navigate('/game');
  }

  const handleInput = (e: string) => {
    dispatch(savePlayerName(e));
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
