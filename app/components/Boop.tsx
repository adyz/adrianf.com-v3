import React from "react"
import useBoop from '../hooks/useBoop';
import { animated } from 'react-spring';

const Boop = ({ children, ...boopConfig }: any) => {
    const [style, trigger] = useBoop(boopConfig);
    return (
      // @ts-ignore
      <animated.span onMouseEnter={trigger} style={style}>
        {children}
      </animated.span>
    );
  };

  export default Boop;