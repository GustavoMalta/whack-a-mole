import { useState } from 'react';
import { ButtonCustom } from './styles';
// import reactLogo from './assets/vite.svg'
// import './styles.css';

export interface Props {
  text?: string;
  onClick: Function;
}

export const Button = (props: Props) => {
  const [playerName, setPlayerName] = useState('name' || '');
  const { text = 'Enter', onClick } = props;

  return <ButtonCustom onClick={() => onClick()}>{text}</ButtonCustom>;
  // }
};

export default Button;
