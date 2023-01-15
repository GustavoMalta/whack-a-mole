import styled from 'styled-components';

interface Props {
  bgImg: string;
}

export const Div = styled.div<Props>`
  ${({ bgImg }) => (bgImg ? 'background-image:url("' + bgImg + '")' : '')};

  max-width: 1300px;
  max-height: 100vh;
  width: 100%;
  cursor: none;

  background-size: cover;
`;

export const MolesGrid = styled.div`
  width: 100%;
  max-height: 100vh;
  max-width: 1300px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  place-items: center;
`;

export const MoleGrid = styled.div`
  width: 20%;
  padding: 20px 60px;
  justify-content: center;
  display: flex;
  min-height: 150px;
  align-items: end;
  z-index: 10;
`;
