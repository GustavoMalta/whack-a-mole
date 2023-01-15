import styled from 'styled-components';

export const Div = styled.div`
  width: 1500px;
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
`;

export const ScoreStatus = styled.div`
  justify-content: center;
  display: flex;
  padding: 35px 35px 0;
`;

export const ScoreLabel = styled.label`
  font-size: 70px;
  font-weight: 900;
  color: darkgreen;
`;
