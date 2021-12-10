import { Link } from "remix";

export default function ExperienceSection({ first = false, last = false, home = false, isVisible = false, item, full = false }: any) {


  const baseLogo = `/images/logos/${item.companyLogo}.jpg`;
  const fullLogo = `https://adrianf.com${baseLogo}`;
  const cloudinaryLogo = `https://res.cloudinary.com/adrianf/image/fetch/f_auto,h_200,w_200,q_60/${fullLogo}`
  return (
    <section
      className={`
        flex flex-col relative mb-10
          ${home ? 'home ' : ''} 
          ${isVisible ? 'isVisible' : ''}
          ${first ? 'isFirst' : ''}
          ${last ? 'isLast' : ''}
          `}
    >
      <div>
        <img className="rounded-lg w-20 shadow-md float-right relative z-20" width="100%" height="100%" alt={`Logo of ${item.company}`} src={cloudinaryLogo} />
        {full ? (
          <p className="text-colorBrown text-lg xl:text-xl uppercase font-bold tracking-widest">{item.title}</p>
        ) : (
          <Link className="text-colorBrown text-lg xl:text-xl uppercase font-bold tracking-widest block pt-5" to={`./${item.companyLogo}`}>{item.title}</Link>
        )}

        <p className="text-colorLigherBrown text-sm mt-5">{item.company}</p>
        <p className="text-colorLigherBrown text-sm">
          {item.period.start} -{" "}
          {item.period.end}
        </p>
        <p className="text-colorLigherBrown text-sm">{item.location}</p>
      </div>
      <div className="text-colorLightBrown text-base md:text-lg mt-5 w-10/12">
        <p>
          {item.intro}
        </p>
      </div>

      {!full && (
        <>


            {isVisible && 
              <div 
                className={`h-10 w-0.5 absolute z-10 top-0 right-10 bg-gradient-to-b from-colorSuperLigherBrown to-colorRed animate-dropFade`}
              />
            }

            <div className="h-full w-0.5 bg-colorSuperLigherBrown absolute top-10 right-10"/>

            <div 
              className={`h-2.5 w-2.5 rounded-full absolute -bottom-5 right-9 bg-colorSuperLigherBrown`}
            />
   
            {isVisible && 
              <div 
                className={`h-2.5 w-2.5 rounded-full absolute -bottom-5 right-9 bg-colorRed opacity-0 animate-fadeInOut`}
              />
            }


        </>
      )}

      {full && <div className="mt-10">
        {item.milestones && (
          <div>
            <p className="text-colorBrown text-lg xl:text-xl uppercase font-bold tracking-widest">Milestones: </p>
            <ul className="text-colorLightBrown text-base md:text-lg mt-5 w-5/6">
              {item.milestones.map((mile: any, mileI: any) => {
                return (
                  <li key={`mile-${mileI}`}>
                    {item.milestones.length > 1 && (<p>{mile.title}</p>)}
                    <ul>
                      {mile.items.map((subMile: any, submileI: any) => {
                        return (
                          <li key={`submile-${submileI}`}>{subMile}</li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {item.technologies.length > 0 && (
          <div className="mt-10">
            <p className="text-colorBrown text-lg xl:text-xl uppercase font-bold tracking-widest">Used: </p>
            <ul className="text-colorLightBrown text-base md:text-lg mt-5 w-5/6">
              {item.technologies.map((tech: any, techI: any) => {
                return <li className="inline" key={`tech-${techI}`}>{tech}{techI === item.technologies.length - 1 ? '' : ','} </li>
              })}
            </ul>
          </div>
        )}
      </div>
      }
      {!full && <Link className="text-colorBrown text-sm uppercase font-bold tracking-widest mt-2" to={`./${item.companyLogo}`}>Read more</Link>}
    </section>
  )
}