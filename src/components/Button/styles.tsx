import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const ButtonCustom = styled.button`
  border-radius: 8px;
  border: 1px solid ${colors.primary};
  padding: 0.6em 1.2em;
  font-size: 2em;
  font-weight: 500;
  font-family: inherit;
  background-color: green;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
