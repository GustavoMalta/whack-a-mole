import styled from 'styled-components';
import { colors } from '../../utils/colors';

interface LabelProps {
  min?: boolean;
}
export const Div = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;

export const Map = styled.img`
  width: 100%;
  max-width: 1500px;
`;

export const ScoreStatus = styled.div`
  position: absolute;
  top: 0;
  justify-content: center;
  display: flex;
  padding: 35px 35px 0;
  width: 100%;
`;

export const ScoreLabel = styled.label<LabelProps>`
  font-size: ${({ min }) => (min ? 30 : 70)}px;
  font-weight: 900;
  color: ${({ min }) => (min ? colors.textSecondary : colors.primary)};

  ${({ min }) =>
    min ? 'text-align: end; padding-right: 13px; display: flex; align-items: center;' : ''};
`;

export const DivScore = styled.div`
  display: flex;
  width: 50%;
  padding: 5px 40px;
`;
