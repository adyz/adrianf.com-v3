import { useRef } from "react";

export function getRandomInt(min: number, max: number): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    const val = Math.floor(Math.random() * (max - min + 1)) + min;
    let currentRandom = null
    if(val === currentRandom) {
      return getRandomInt(min, max)
    } else {
      currentRandom = val
      return val
    }    
}

export default function PageHeader({ description, children }: {
  description?: string;
  children: any;
}) {
  const {current: image} = useRef(`https://adrianf.com/images/responsive-headers/${getRandomInt(1, 8)}-m.jpg`);
  const {current: resizedImage} 
    = useRef(`https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,g_center,h_640,w_824,q_45/${image}`);
  const {current: resizedImageMobile} 
    = useRef(`https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,g_center,h_640,w_412,q_30/${image}`);
    return (
        <div className="page-header-wrapper">
          <div className="page-header-insides">
              <div className="text">
                {children}
                <p>{description}</p>
              </div>
              <div className="image">
              <picture>
                <source width="100%" height="100%" media="(max-width: 799px)" srcSet={resizedImageMobile} />
                <source width="100%" height="100%" media="(min-width: 800px)" srcSet={resizedImage} />
                <img width="100%" height="100%" src={resizedImage} alt="Random image" />
              </picture>
              </div>
          </div>
        </div>
    )
}