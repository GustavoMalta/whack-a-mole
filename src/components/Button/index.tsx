import { Component, useState } from 'react';
// import reactLogo from './assets/vite.svg'
import './styles.css';

export interface Props {
  text?: string;
  onClick: Function;
}

export const Button = (props: Props) => {
  const [playerName, setPlayerName] = useState('name' || '');
  const { text = 'Enter', onClick } = props;

  return <button onClick={() => onClick()}>{text}</button>;
  // }
};

export default Button;
