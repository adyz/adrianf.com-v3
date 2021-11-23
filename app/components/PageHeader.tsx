import one from '../images/responsive-headers/1-d.jpg';

function getRandomInt(min: number, max: number): any {
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

export default function PageHeader({ description, children }: any) {
    return (
        <div className="page-header-wrapper">
          <div className="page-header-insides">
              <div className="text">
                {children}
                <p>{description}</p>
              </div>
              <div className="image">
                <div className="hero">
                    <img src={one} />
                </div>
              </div>
          </div>
        </div>
    )
}