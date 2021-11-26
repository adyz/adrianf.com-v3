
import TechStackSection from "../components/TechStackSection"
import PageHeader from "../components/PageHeader"
import type { MetaFunction } from "remix";
import {getSocialMetas} from '../utils/seo/meta';

export let meta: MetaFunction = ({location}) => {
    return {
      ...getSocialMetas({
        url: location.pathname,
        title: "Adrian Florescu - Tech Stack",
        description: "I use tools and I like to keep them up to date, here's my current stack",
        keywords: "adrian, adrian florescu, html, css, javascript, typescript, php, react, redux, wordpress, remix, tailwind, tailwindcss, webpack, jest, react-testing-library"
      })
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
