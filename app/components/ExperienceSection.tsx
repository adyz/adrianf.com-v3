import React from 'react';
import { Link } from "remix";

export default function ExperienceSection({ first = false, last = false, home = false, isVisible = false, item, full = false, isCollapsable = true }: any) {
  const [isExpanded, setIsExpanded] = React.useState(false);


  const baseLogo = `/images/logos/${item.companyLogo}.jpg`;
  const fullLogo = `https://adrianf.com${baseLogo}`;
  const cloudinaryLogo = `https://res.cloudinary.com/adrianf/image/fetch/f_auto,h_200,w_200,q_60/${fullLogo}`
  return (
    <section
      className={`
          ${home ? 'home ' : ''} 
          ${isVisible ? 'isVisible' : ''}
          ${first ? 'isFirst' : ''}
          ${last ? 'isLast' : ''}
          `}
    >
      <div className="companyLogo">
        <div className="image-wrapper">
          <img width="100%" height="100%" alt={`Logo of ${item.company}`} src={cloudinaryLogo} />
        </div>
      </div>
      <div className="title">
        {full ? (
            <p className="heading">{item.title}</p>
        ) : (
            <Link className="heading" to={`./${item.companyLogo}`}>{item.title}</Link>
        )}
        
        <p className="company">{item.company}</p>
        <p className="time">
          {item.period.start} -{" "}
          {item.period.end}
        </p>
        <p className="location">{item.location}</p>
      </div>
      <div className="intro">
        <p>
          {item.intro}
        </p>
      </div>

      <div className={`expandable ${isExpanded || full ? 'is-expanded' : 'is-collapsed'}`}>
        {item.milestones && (
          <div className="milestones">
            <p className="sec-heading">Milestones: </p>
            <ul>
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
          <div className="technologies">
            <p className="sec-heading">Used: </p>
            <ul>
              {item.technologies.map((tech: any, techI: any) => {
                return <li key={`tech-${techI}`}>{tech}</li>
              })}
            </ul>
          </div>
        )}


      </div>

      {!full && isCollapsable && <button className="expandButton" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Collapse back' : 'Read more'}</button>}
      {!full && !isCollapsable && <Link className="expandButton" to={`${item.companyLogo}`} title={`Exp @ ${item.company}`}>Read more</Link>}
    </section>
  )
}