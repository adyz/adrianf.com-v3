import React from 'react';
import { Link } from "remix";

export default function ExperienceSection({ first = false, last = false, home = false, isVisible = false, item, full = false, isCollapsable = true }: any) {
  const [isExpanded, setIsExpanded] = React.useState(false);

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
          <img src={`/images/logos/${item.companyLogo}.jpg`} />
        </div>
      </div>
      <div className="title">
        <Link className="heading" to={`./${item.companyLogo}`}>{item.title}</Link>
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
            <h4>Milestones: </h4>
            <ul>
              {item.milestones.map((mile: any, mileI: any) => {
                return <div key={`mile-${mileI}`}>
                  {item.milestones.length > 1 && (<p>{mile.title}</p>)}
                  <ul>
                    {mile.items.map((subMile: any, submileI: any) => {
                      return <li key={`submile-${submileI}`}>{subMile}</li>
                    })}
                  </ul>
                </div>
              })}
            </ul>
          </div>
        )}

        {item.technologies.length > 0 && (
          <div className="technologies">
            <h4>Used: </h4>
            <ul>
              {item.technologies.map((tech: any, techI: any) => {
                return <li key={`tech-${techI}`}>{tech}</li>
              })}
            </ul>
          </div>
        )}


      </div>

      {!full && isCollapsable && <button className="expandButton" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Collapse back' : 'Read more'}</button>}
      {!full && !isCollapsable && <Link className="expandButton" to={`/${item.title}`}>Read More</Link>}
    </section>
  )
}