import PageHeader, { getRandomInt } from "../../components/PageHeader";
import {json, useLoaderData } from "remix";
import ExperienceSection from "~/components/ExperienceSection";
import experience from '../../data/experience';
import type { LoaderFunction, MetaFunction } from "remix";
import {getSocialMetas} from '../../utils/seo/meta';

export let meta: MetaFunction = ({location, params, parentsData}) => {
    const title = "Adrian Florescu - Experience @" + params.slug
    const description = `My perspective on working with ${params.slug} as a front-end developer`
    const image = `https://res.cloudinary.com/adrianf/image/fetch/c_mfit,h_630,w_1200/l_text:Arial_38_bold:${title},co_white/https://adrianf-v3.netlify.app/images/responsive-headers/${getRandomInt(1, 8)}-m.jpg`
    console.log({
        image
    })
    return {
      ...getSocialMetas({
        image,
        url: location.pathname,
        title,
        description,
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