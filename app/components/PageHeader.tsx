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
    return (
        <div className="page-header-wrapper">
          <div className="page-header-insides">
              <div className="text">
                {children}
                <p>{description}</p>
              </div>
              <div className="image">
                <img src={`/images/responsive-headers/${getRandomInt(1, 8)}-m.jpg`} />
              </div>
          </div>
        </div>
    )
}