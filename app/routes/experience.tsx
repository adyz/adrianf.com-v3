import PageHeader from "../components/PageHeader"
import ExperienceSection from "../components/ExperienceSection"
import TrackVisibility from 'react-on-screen';
import experience from '../data/experience';
import { useLoaderData, json } from "remix";

export let loader = () => {

    return json(experience)
}

export default function Page() {
    const data = useLoaderData()
    const description = `Working with startups and big companies like IBM in my more than 10 years front-end development career`;
    return (

        <div className="page-wrapper">
            <PageHeader description={description}>
                <h1>Experience <span role="img" aria-label="emoji">
                    🧓🏼
                </span></h1>
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
