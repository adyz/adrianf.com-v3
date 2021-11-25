// import useBoop from '../hooks/useBoop';
import { animated } from 'react-spring';

const Boop = ({ children}: any) => {
    return (
      // @ts-ignore
      <animated.span>
        {children}
      </animated.span>
    );
  };

  export default Boop;