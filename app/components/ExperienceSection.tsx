import React from 'react';
import { Link } from "remix";

export default function ExperienceSection({ first = false, last = false, home = false, isVisible = false, item, full = false}: any) {


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
      <img className="rounded-lg w-24 shadow-md float-right" width="100%" height="100%" alt={`Logo of ${item.company}`} src={cloudinaryLogo} />
        {full ? (
            <p className="text-colorBrown text-lg xl:text-xl uppercase font-bold tracking-widest">{item.title}</p>
        ) : (
            <Link   className="text-colorBrown text-lg xl:text-xl uppercase font-bold tracking-widest" to={`./${item.companyLogo}`}>{item.title}</Link>
        )}
        
        <p className="text-colorLigherBrown text-sm">{item.company}</p>
        <p className="text-colorLigherBrown text-sm">
          {item.period.start} -{" "}
          {item.period.end}
        </p>
        <p className="text-colorLigherBrown text-sm">{item.location}</p>
      </div>
      <div className="text-colorLightBrown text-base md:text-lg mt-5 w-5/6">
        <p>
          {item.intro}
        </p>
      </div>

      {full && <div className="mt-10">
        {item.milestones && (
          <div className="">
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
                )})}
            </ul>
          </div>
        )}

        {item.technologies.length > 0 && (
          <div className="mt-10">
            <p className="text-colorBrown text-lg xl:text-xl uppercase font-bold tracking-widest">Used: </p>
            <ul className="text-colorLightBrown text-base md:text-lg mt-5 w-5/6">
              {item.technologies.map((tech: any, techI: any) => {
                return <li className="inline" key={`tech-${techI}`}>{tech}{techI === item.technologies.length -1 ? '' : ','} </li>
              })}
            </ul>
          </div>
        )}
      </div>
      }
      {!full && <Link className="text-colorBrown text-base uppercase font-bold tracking-widest mt-2" to={`./${item.companyLogo}`}>Read more</Link>}
    </section>
  )
}