import wamHammer from '../../assets/WAM_Hammer.png';
import { HammerImg } from './styles';
// import './styles.css'

export interface HammerProps {
  posX: number;
  posY: number;
  smash: boolean;
}

export const Hammer = (props: HammerProps) => {
  const { posX, posY, smash } = props;

  return (
    <div key="hammer">
      <HammerImg
        src={wamHammer}
        aria-label={'hammer'}
        draggable={false}
        style={{
          top: posY,
          left: posX,
          position: 'fixed',
          zIndex: 50,
          pointerEvents: 'none',
          transformOrigin: 'bottom right',
        }}
        smash={smash}
      />
    </div>
  );
};

export default Hammer;
