import React from "react"
import PageHeader from "../components/PageHeader"
import SayHi from "../components/SayHi"
import SocialLinks from "../components/SocialLinks"

export default function Page() {
    const description = `It's always nice to say hi! Email me or get in touch with me via social platforms`;
    return (

            <div className="page-wrapper">
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


