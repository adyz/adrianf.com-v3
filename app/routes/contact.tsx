import PageHeader from "../components/PageHeader"
import SayHi from "../components/SayHi"
import SocialLinks from "../components/SocialLinks"
import type { MetaFunction } from "remix";
import {getSocialMetas} from '../utils/seo/meta';

export let meta: MetaFunction = ({location}) => {
    return {
      ...getSocialMetas({
        url: location.pathname,
        title: "Adrian Florescu - Contact",
        description: "It's always nice to say hi! Email me or get in touch with me via social platforms",
        keywords: "contact me, say hi, greeting, html, css, js, typescript, remix, react, romania, bucharest front-end development"
      })
    };
  };

export default function Page() {
    const description = `It's always nice to say hi! Email me or get in touch with me via social platforms`;
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
                <SayHi />
            </PageHeader>
            <div className="sectionContact">

                <p>
                    Email: <a href="mailto:hi@adrianf.com">hi@adrianf.com</a>
                </p>

                <h3>I'd be happy to connect with you via social platforms</h3>

                <SocialLinks />
            </div>
        </div>
    )
}


