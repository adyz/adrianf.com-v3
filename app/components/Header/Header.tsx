import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import useSound from 'use-sound';

import { Link, useLocation } from "remix";

import Logo from "./Logo";
import Switch from "./Switch";
import SwitchBase from "./SwitchBase";

import soundToggle from "../../sounds/switch.wav"

const Header = ({ siteTitle }: {siteTitle: string}) => {

  const location = useLocation();
  const pathName = location.pathname;

  const [isSticky, setSticky] = useState(false);
  const [colorMode, setColorMode] = useState('light');
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))
  const [toggled, setToggled] = useState(false);
  const [playToggleSound] = useSound(soundToggle, {volume: 0.1});

  // Set the drag hook and define component movement based on gesture data
  const bind = useGesture({
    onDrag: function Dragging(state) {
      const { down, movement: [mx, my] } = state;
      set({ y: down && my < 250 ? my : 0 })
      if (down && my > 50 && !toggled) {
        setToggled(true);
        toggle();
      }
    },
    onDragEnd: function DragEnd() {
      setToggled(false);
    },
    onMouseDown: () => console.log('mouse down')
  })
  useEffect(() => {
    //Sticky header
    window.addEventListener('scroll', handleScroll);
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkScheme.addListener(setThemeFuncForUserPrefEvent);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
      prefersDarkScheme.removeListener(setThemeFuncForUserPrefEvent);
    };
  }, []);

  if(!colorMode) {
    return null;
  }

  function setThemeFuncForUserPrefEvent(e: any) {
    if(e.matches) {
      setColorMode('dark')
    } else {
      setColorMode('light')
    }
  }

  const handleScroll = () => {
    setSticky(document.body.getBoundingClientRect().top < -2);
  };

  function toggle() {
    console.log('Toggle');
    playToggleSound();
    if (colorMode === 'dark') {
      setColorMode('light');
    } else {
      setColorMode('dark');
    }
  }


  return (
    <>
      <header className={`${isSticky ? 'is-sticky' : 'is-fixed'}`}>

        <Link className="logo" title={siteTitle} to="/">
          <Logo />
        </Link>
        <nav>
          <Link className={`${pathName === '/tech-stack' && 'is-active'}`} to={`/tech-stack`} >TechStack</Link>
          <Link className={`${pathName === '/experience' && 'is-active'}`} to={`/experience`} >Experience</Link>
          <Link className={`${pathName === '/thoughts' && 'is-active'}`} to={`/thoughts`}>Thoughts</Link>
          <Link  className={`${pathName === '/contact' && 'is-active'}`} to={`/contact`} >Contact</Link>
        </nav>
      </header>
      
      <div className="switch">
        <div className="switch__base">
          <SwitchBase />
        </div>
        <animated.div className="switch__chain" {...bind()} style={{ transform: y.interpolate((y) => `translate3d(0px,${y}px,0)`) }}>
          <Switch />
        </animated.div>
      </div>

    </>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
