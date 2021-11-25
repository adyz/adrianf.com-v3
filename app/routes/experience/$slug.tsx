import PageHeader from "../../components/PageHeader";
import {json, useLoaderData } from "remix";
import ExperienceSection from "~/components/ExperienceSection";
import experience from '../../data/experience';
import type { LoaderFunction, MetaFunction } from "remix";
import {getSocialMetas} from '../../utils/seo/meta';

export let meta: MetaFunction = ({location, params, parentsData}) => {
    return {
      ...getSocialMetas({
        url: location.pathname,
        title: "Adrian Florescu - Experience @" + params.slug,
        description: `My perspective on working with ${params.slug} as a front-end developer`,
      })
    };
  };

export let loader: LoaderFunction = ({ request, params }) => {
    const {pathname} = new URL(request.url);
    const myExperience = experience.find(ex => {
        if(`/experience/${ex.companyLogo}` === pathname) {
            return ex
        }
    });
    if(myExperience) {
        return json(myExperience)
    } else {
        return new Error('No page found');
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