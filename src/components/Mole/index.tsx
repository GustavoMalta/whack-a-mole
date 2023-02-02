import hole from '../../assets/WAM_Hole.png';
import mole from '../../assets/WAM_Mole.png';

import { useAppSelector } from '../../hooks';
import { getMoleUp } from '../../pages/Game/redux';
import { MoleGrid } from './styles';

interface Props {
  key: number;
  moleUp: any;
  handleSmash: Function;
}

function Mole(props: any) {
  const moleUp = useAppSelector(getMoleUp);

  return (
    <MoleGrid>
      <img
        src={props.moleUp ? mole : hole}
        alt="mole"
        onClick={() => props.handleSmash(props.moleUp)}
        draggable={false}
      />
    </MoleGrid>
  );
}

export default Mole;
