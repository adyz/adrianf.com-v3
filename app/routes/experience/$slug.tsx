import PageHeader from "../../components/PageHeader";
import { useLoaderData, json } from "remix";
import ExperienceSection from "~/components/ExperienceSection";
import experience from '../../data/experience';
import type { LoaderFunction } from "remix";


export let loader: LoaderFunction = ({ request, params }) => {
    const {pathname} = new URL(request.url);
    const myExperience = experience.find(ex => {
        console.log({
            name: ex.companyLogo,
            pathname: pathname
        })
        if(`/experience/${ex.companyLogo}` === pathname) {
            return ex
        }
    });
    return json(myExperience)
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