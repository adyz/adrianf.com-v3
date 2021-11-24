
import TechStackSection from "../components/TechStackSection"
import PageHeader from "../components/PageHeader"
import type { MetaFunction } from "remix";


export let meta: MetaFunction = () => {
    return {
        title: "Adrian Florescu - Tech Stack",
        description: "Ce stack mai folosesc"
    };
};

export default function Page() {
    const description = `I use tools and I like to keep them up to date, here's my current stack`;
    return (
        <div className="page-wrapper">
            <PageHeader description={description}>

                <h1>Tech stack  <span role="img" aria-label="emoji">
                    👨‍💻
                </span></h1>

            </PageHeader>
            <div className="sectionTechStack">
                <TechStackSection />
            </div>
        </div>
    )
}
