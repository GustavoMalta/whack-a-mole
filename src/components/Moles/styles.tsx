import styled from 'styled-components';

export const Div = styled.div`
  position: absolute;
  width: inherit;
  cursor: none;
`;

export const MolesGrid = styled.div`
  width: 100%;
  max-width: inherit;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  place-items: center;
`;

export const MoleGrid = styled.div`
  width: 20%;
  padding: 60px;
  justify-content: center;
  display: flex;
  min-height: 150px;
  align-items: end;
  z-index: 10;
`;
