import PageHeader from "../../components/PageHeader"
import ExperienceSection from "../../components/ExperienceSection"
import TrackVisibility from 'react-on-screen';
import experience from '../../data/experience';
import { useLoaderData, json } from "remix";
import type { MetaFunction } from "remix";
import {getSocialMetas} from '../../utils/seo/meta';

export let meta: MetaFunction = ({location}) => {
    return {
      ...getSocialMetas({
        url: location.pathname,
        title: "Adrian Florescu - Experience",
        description: "Working with startups and big companies like IBM in my more than 10 years front-end development career",
        keywords: "adrian, adrian florescu, career, resume, florescu, experience, html, css, js, typescript, remix, react, romania, bucharest, front-end development"
      })
    };
  };

export let loader = () => {
    return json(experience)
}

export default function Page() {
    const data = useLoaderData()
    const description = `Working with startups and big companies like IBM in my more than 10 years front-end development career`;
    return (

        <div 
            className="
                min-h-screen
                border-b border-solid border-colorBorder
                bg-gradient-to-b from-colorSuperLigherBrown to-colorBg bg-no-repeat
                flex
                flex-col
                justify-center
                flex-wrap
            "
            style={{
                backgroundPosition: '0 40px',
                backgroundSize: '100% 40vh'
            }}
        >
            <PageHeader description={description}>
                Experience <span role="img" aria-label="emoji">🧓🏼</span>
            </PageHeader>
            <div className="sectionExperience">

                {data && data.length > 0 && data.map((item: any, itemIndex: any) => {
                    const nodes = data;
                    const isFirst = itemIndex === 0;
                    const isLast = nodes.length - 1 === itemIndex;
                    return (
                        <TrackVisibility once className="section-wrapper" key={`home-ex-${itemIndex}`} >
                            {({ isVisible }) => {
                                return (
                                    <ExperienceSection
                                        key={itemIndex}
                                        item={item}
                                        first={isFirst}
                                        last={isLast}
                                        isCollapsable={false}
                                        home={true}
                                        isVisible={isVisible}
                                    />
                                )
                            }
                            }
                        </TrackVisibility>
                    )
                })}
            </div>
        </div>
    )
}
