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
    <div className="wam-hammer-container" key="wam-hammer">
      <HammerImg
        src={wamHammer}
        aria-label={'wam-hammer'}
        draggable={false}
        style={{
          top: posY,
          left: posX,
          position: 'absolute',
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
