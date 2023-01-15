import { ReactElement, useEffect, useState } from 'react';
import hole from '../../assets/WAM_Hole.png';
import mole from '../../assets/WAM_Mole.png';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMoleUp, getAuthorized, setMoleHit } from '../../pages/Game/redux';
import Hammer from '../Hammer';
import { Div, MoleGrid, MolesGrid } from './styles';
// import './styles.css'

interface Props {
  children: ReactElement;
}
interface Position {
  x: number;
  y: number;
}

function Moles(props: Props) {
  const { children } = props;
  // const [moleSmashed, setMoleSmashed] = useState(-1);
  // const [moleUp, setMoleUp] = useState(Math.floor(Math.random() * 9));
  // const [stopMoles, setStopMoles] = useState(false);

  const moleUp = useAppSelector(getMoleUp);
  const isAuthorized = useAppSelector(getAuthorized);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [smash, setSmash] = useState(false);

  // const score = useAppSelector(sdsdsdsdsds);
  const dispatch = useAppDispatch();

  const handleSmash = (e: any) => {
    if (isAuthorized && e.target.id == moleUp) {
      dispatch(setMoleHit(e.target.id));
    }
  };

  const handleHammer = (event: { clientX: number; clientY: number }) => {
    setPosition({
      x: event.clientX - 250,
      y: event.clientY - 370,
    });
  };

  useEffect(
    function () {
      const interval = setInterval(() => {
        if (smash) {
          setSmash(false);
        }
      }, 100);
      return () => clearInterval(interval);
    },
    [smash],
  );

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
            onClick={handleSmash}
            draggable={false}
          />
        </MoleGrid>,
      );
    }

    return asd;
  };
  return (
    <Div className="moles" onMouseMoveCapture={handleHammer}>
      {children}
      <MolesGrid onClick={() => setSmash(true)}>
        <Hammer posX={position.x} posY={position.y} smash={smash} />
        {Mole(9)}
      </MolesGrid>
    </Div>
  );
}

export default Moles;
