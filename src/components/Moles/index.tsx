import { ReactElement, useState } from 'react';
import hole from '../../assets/WAM_Hole.png';
import mole from '../../assets/WAM_Mole.png';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMoleUp, getStarted, setMoleHit } from '../../pages/Game/redux';
import { Div, MoleGrid, MolesGrid } from './styles';
// import './styles.css'

interface Props {
  children: ReactElement;
}

function Moles(props: Props) {
  const { children } = props;
  // const [moleSmashed, setMoleSmashed] = useState(-1);
  // const [moleUp, setMoleUp] = useState(Math.floor(Math.random() * 9));
  // const [stopMoles, setStopMoles] = useState(false);

  const moleUp = useAppSelector(getMoleUp);
  const started = useAppSelector(getStarted);
  // const score = useAppSelector(sdsdsdsdsds);
  const dispatch = useAppDispatch();

  const handleSmash = (e: any) => {
    if (started && e.target.id == moleUp) {
      // e.target.src = hole;
      dispatch(setMoleHit(e.target.id));
      console.log(moleUp);
    }
  };

  const Mole = (total: number) => {
    const asd = [];
    for (var id = 0; id < total; id++) {
      // const show = moleUp == id;
      asd.push(
        <MoleGrid key={id} className={id.toLocaleString()}>
          <img
            id={id.toString()}
            src={moleUp == id ? mole : hole}
            alt="mole"
            className="moleImg"
            onClick={handleSmash}
            draggable={false}
          />
        </MoleGrid>,
      );
    }

    return asd;
  };
  return (
    <Div className="moles" style={{ position: 'absolute', width: 'inherit' }}>
      {children}
      <MolesGrid>{Mole(9)}</MolesGrid>
    </Div>
  );
}

export default Moles;
