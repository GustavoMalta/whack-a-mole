import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const InputStyled = styled.input`
  height: 35px;
  border-radius: 10px;
  background-color: ${colors.secondary};
  padding: 0 10px;
  height: 3rem;
  font-size: 25px;
  width: 14rem;
`;

export const Label = styled.label`
  color: ${colors.secondary};
  padding: 5px 10px;
  font-size: 22px;
`;
