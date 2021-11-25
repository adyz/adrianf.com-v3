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
        title: "Adrian Florescu - Thooughts of a front-end developer",
        description: "I write from time to time. Read my thoughts to know me better"
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
        <div className="page-wrapper">

            <PageHeader description={description}>
                <h1>Thoughts <span role="img" aria-label="emoji">
                    🤯
                </span></h1>
            </PageHeader>
            <div className="sectionArticles">

                <div className="articles">
                    {data && data.length > 0 && data.map((article: any, articleIndex: any) => {
                        return (
                            <a
                                key={articleIndex}
                                href={article.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="article"
                            >
                                <span className="thumb">
                                    <img src={article.thumb} loading="lazy" alt={article.title} />
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