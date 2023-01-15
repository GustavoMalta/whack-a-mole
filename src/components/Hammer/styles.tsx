import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

interface HammerProps {
  smash: boolean;
  posY?: number;
  posX?: number;
}

export const HammerImg = styled.img<HammerProps>`
  ${({ smash }) => (smash ? 'transform: rotate(-45deg);' : '')},
`;
