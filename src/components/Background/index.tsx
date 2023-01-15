import { Div } from './styles';
// import reactLogo from './assets/vite.svg'
import WamBg from '../../assets/WAM_bg.jpg';

export interface Props {
  img?: string;
}

export const Background = (props: Props) => {
  const { img = WamBg } = props;
  console.log(WamBg);
  return <Div bgImg={img}></Div>;
};

export default Background;
