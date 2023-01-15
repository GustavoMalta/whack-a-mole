import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Div = styled.div`
  width: 1500px;
  height: 1080px;
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
  width: 100%;
  padding-top: 25px;
  line-height: 3rem;
`;

export const ScoreLabel = styled.label`
  font-weight: 900;
  color: ${colors.primary};
`;

export const LeaderBorad = styled.div`
  display: flex;
  width: 100%;
`;

const headerDiv = styled.div`
  width: 33.33%;
  padding: 0 10px;

  & span {
    font-size: 30px;
    vertical-align: middle;
    padding-right: 15px;
  }
`;

export const DivRank = styled(headerDiv)``;

export const DivScore = styled(headerDiv)`
  justifycontent: center;
`;

export const DivName = styled(headerDiv)`
  justifycontent: 'end';
`;

// padding: 0px 30px 40px;
// background-color: @white;
// padding: 8px;
// border-radius: 4px;
// font-size: 35px;
// line-height: 16px;
