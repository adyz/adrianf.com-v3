import { animated } from 'react-spring';
import useBoop from '../hooks/useBoop';

const SayHi = () => {
    const [style, trigger] = useBoop({
        rotation: 50,
        timing: 50
    });
    return (
        // @ts-ignore
        <div role="none" onMouseEnter={trigger}>
            <h1 style={{display: 'flex'}}>
                Say hi!{" "}
                <animated.span style={style}>
                    <span role="img" aria-label="wave emoji">👋</span>
                </animated.span>
            </h1>
        </div>
    )
}

export default SayHi