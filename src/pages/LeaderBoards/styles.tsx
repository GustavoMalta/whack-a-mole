import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Div = styled.div`
  width: 100%;
  height: 1000px;
  max-width: 1300px;
  max-height: 90vh;
  padding: 0 30px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;

export const Map = styled.img`
  width: 100%;
`;

export const ScoreStatus = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 60px;
  font-size: 70px;
  white-space: nowrap;
  width: 100%;
  padding-top: 25px;
  line-height: 3rem;
`;

export const ScoreLabel = styled.label`
  font-weight: 900;
  color: ${colors.primary};
  display: flex;
  justify-content: center;
`;

export const LeaderBorad = styled.div`
  display: flex;
  width: 100%;
`;

const headerDiv = styled.div`
  padding: 0 10px;
  font-weight: 900;
  & span {
    color: ${colors.textSecondary};
    font-size: 33px;
    vertical-align: middle;
    justify-content: center;
    display: flex;
  }
`;

export const DivRank = styled(headerDiv)`
  width: 33.33%;
`;

export const DivScore = styled(headerDiv)`
  justify-content: center;
  width: 20%;
`;

export const DivName = styled(headerDiv)`
  justify-content: end;
  width: 40%;
`;

// padding: 0px 30px 40px;
// background-color: @white;
// padding: 8px;
// border-radius: 4px;
// font-size: 35px;
// line-height: 16px;
