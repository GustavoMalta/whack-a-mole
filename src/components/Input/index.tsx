import { useState } from 'react';
import { InputStyled, Label } from './styles';

export interface tipo {
  placeHolder?: string;
  value?: string;
  onChange: Function;
  onPressEnter: Function;
  label: string;
}

export const Input = (props: tipo) => {
  const { placeHolder = 'Type here', value, onChange, label, onPressEnter } = props;

  const handleInput = (event: any) => {
    onChange(event.value);
  };

  const handleSubmit = (event: any) => {
    if (event.key === 'Enter') {
      onPressEnter();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        height: 150,
        width: 250,
      }}>
      <Label>{label + ':'}</Label>
      <InputStyled
        onChange={(e) => handleInput(e.target)}
        placeholder={placeHolder}
        onKeyDown={(e) => handleSubmit(e)}
        value={value}
        maxLength={18}
      />
    </div>
  );
  // }
};

export default Input;
