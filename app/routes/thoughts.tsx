import ExternalLinkIcon from '../components/ExternalLinkIcon';
import PageHeader from "../components/PageHeader"
import articles from '../data/articles';
import { useLoaderData, json } from "remix";
import type { MetaFunction } from "remix";
import {getSocialMetas} from '../utils/seo/meta';

export let meta: MetaFunction = ({location}) => {
    return {
      ...getSocialMetas({
        url: location.pathname,
        title: "Adrian Florescu - Thoughts",
        description: "I write from time to time. Read my thoughts to know me better",
        keywords: "blog, articles, adrian, florescu, thoughts, front-end development"
      })
    };
  };

export let loader = () => {
    return json(articles)
}

export default function Page() {
    const data = useLoaderData()
    const description = `I write from time to time. Read my thoughts to know me better`;
    
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
                Thoughts <span role="img" aria-label="emoji">🤯</span>
            </PageHeader>
            <div className="sectionArticles">

                <div className="articles">
                    {data && data.length > 0 && data.map((article: any, articleIndex: any) => {
                        const articleImgRes =`https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,g_center,h_420,w_1400,q_30/${article.thumb}`
                        return (
                            <a
                                key={articleIndex}
                                href={article.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="article"
                            >
                                <span className="thumb">
                                    <img width="100%" height="100%" src={articleImgRes} loading="lazy" alt={article.title} />
                                </span>
                                <span className="titleAndDate">
                                    <span className="link-icon">
                                        <ExternalLinkIcon />
                                    </span>
                                    <span className="title">{article.title}</span>
                                    <span className="date">
                                        {article.publishDate}
                                    </span>
                                </span>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}