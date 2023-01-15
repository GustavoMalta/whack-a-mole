import styled from 'styled-components';

interface Props {
  bgImg: string;
}

export const Div = styled.div<Props>`
  ${({ bgImg }) => (bgImg ? 'background-image:url("' + bgImg + '")' : '')};

  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  filter: blur(8px);
  position: absolute;
  background-size: cover;
  z-index: -1;
`;
