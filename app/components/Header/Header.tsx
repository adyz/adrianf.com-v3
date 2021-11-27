import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import useSound from 'use-sound';

import { Link, useLocation } from "remix";

import Logo from "./Logo";
import Switch from "./Switch";
import SwitchBase from "./SwitchBase";
import soundToggle from "../../sounds/switch.wav"
import { COLOR_MODE_KEY } from '~/constants';
import type { TColorMode } from '~/constants';
import { setCookie } from '~/utils/cookie';

function replaceAll(originalString: string, find: string, replace: string) {
  return originalString.replace(new RegExp(find, 'g'), replace);
};

const Header = ({ siteTitle, initialColorMode }: { siteTitle: string, initialColorMode: TColorMode }) => {

  const location = useLocation();
  const pathName = replaceAll(location.pathname, '/', '');

  const [isSticky, setSticky] = useState(false);
  const [colorMode, setColorMode] = useState<TColorMode>(initialColorMode);
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))
  const [toggled, setToggled] = useState(false);
  const [playToggleSound] = useSound(soundToggle, { volume: 0.1 });

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

  if (!colorMode) {
    return null;
  }

  function setThemeFuncForUserPrefEvent(e: any) {
    if (e.matches) {
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
      setCookie(COLOR_MODE_KEY, 'light', 360);
    } else {
      setColorMode('dark');
      setCookie(COLOR_MODE_KEY, 'dark', 360);
    }
  }


  return (
    <>
      <header className={`${isSticky ? 'is-sticky' : 'is-fixed'}`}>

        <Link className={`logo ${pathName === '' && 'is-active'}`} title={'Home Link'} to="/">
          <Logo />
        </Link>
        <nav>
          <Link className={`${pathName === 'tech-stack' && 'is-active'}`} to={`/tech-stack`} >TechStack</Link>
          <Link className={`${(pathName === 'experience' || pathName.includes('experience')) && 'is-active'}`} to={`/experience`} >Experience</Link>
          <Link className={`${pathName === 'thoughts' && 'is-active'}`} to={`/thoughts`}>Thoughts</Link>
          <Link className={`${pathName === 'contact' && 'is-active'}`} to={`/contact`} >Contact</Link>
        </nav>
      </header>

      {colorMode === 'light' ? (
        <style>
          {`
          :root {
            --colorBorder: #eeebd8;
            --colorBrown: #543416;
            --colorLightBrown: #865E5E;
            --colorLigherBrown: #AEA092;
            --colorSuperLigherBrown: #E7D7C8;
            --colorBg: #fffdef;
            --colorRed: #e95d5d;
            --colorGreen: #52870f;
            --colorWhite: #ffffff;
            --colorLogoBody: #6FA68C;
            --colorLogoLeg: #216155;
            --colorLogoWing: #74CCA2;
          }
          `}
        </style>
      ) : (
        <style>
          {`
          :root {
            --colorBorder: #3a3a30;
            --colorBrown: #F5EFB9;
            --colorLightBrown: #9F9C7D;
            --colorLigherBrown: #716E59;
            --colorSuperLigherBrown: #525040;
            --colorBg: #434238;
            --colorRed: #9F9C7D;
            --colorGreen: #52870f;
            --colorWhite: #28281F;
            --colorLogoBody: #6FA68C;
            --colorLogoLeg: #216155;
            --colorLogoWing: #74CCA2;
          }
          `}
        </style>
      )}

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
