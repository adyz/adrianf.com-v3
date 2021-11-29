import PageHeader from "../../components/PageHeader";
import {json, useLoaderData } from "remix";
import ExperienceSection from "~/components/ExperienceSection";
import experience from '../../data/experience';
import type { LoaderFunction, MetaFunction } from "remix";
import {getSocialMetas} from '../../utils/seo/meta';

export let meta: MetaFunction = ({location, params, parentsData, data}) => {
    return {
      ...getSocialMetas({
        url: location.pathname,
        title: `Adrian Florescu - Experience @${data.company}`,
        description: `My perspective on working with ${data.company} as a front-end developer`,
        keywords: `${location.pathname}, adrian, adrian florescu, career, resume, florescu, experience, html, css, js, typescript, remix, react, romania, bucharest, front-end development`
      })
    };
  };

export let loader: LoaderFunction = ({ request, params }) => {
    const myExperience = experience.find(ex => {
        if(ex.companyLogo === params.slug) {
            return ex
        }
    });
    if(myExperience) {
        return json(myExperience)
    } else {
        return new Response('No page found', {
            status: 404
        });
    }
    
}

export default function ExperiencePage() {
    const data = useLoaderData()
    return (
        <>
            <div className="page-wrapper">
                <PageHeader>
                    <h1>Experience @ {data.company}</h1>
                </PageHeader>
                <div className="sectionExperience">
                    <ExperienceSection full={true} item={data} />  
                </div>
            </div>
        </>
    )
}