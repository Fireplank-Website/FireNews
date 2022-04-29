import Head from 'next/head';
import { Article } from '../components/Article';
import { apiKey, articles } from '../data';

export default function Home(props) {
    return (
        <>
            <Head>
                <title>Home - FireNews</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="news, articles, stories" />
                <meta name="description" content="FireNews is a news website" />
                <meta charSet='utf-8' />
            </Head>
            <Article posts={props.articles}/>
        </>
    )
}


export async function getServerSideProps(context) {
    console.log(articles[0]);

    // check if its time to update news
    if (new Date().getTime()/1000-3600 > articles[0]) {
        console.log("Updating news!");
        // update news
        articles[0] = new Date().getTime()/1000;
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await res.json();
        for (let index = 1; index < data.articles.length; index++) {
            if (index >= articles.length) {
                articles.push({
                    title: data.articles[index].title,
                    content: data.articles[index].content,
                    url: data.articles[index].url,
                    description: data.articles[index].description,
                    published: data.articles[index].publishedAt,
                    id: index,
                });
            } else {
                articles[index].title = data.articles[index].title;
                articles[index].content = data.articles[index].content;
                articles[index].url = data.articles[index].url;
                articles[index].description = data.articles[index].description;
                articles[index].published = data.articles[index].publishedAt;
                articles[index].id = index;
            }
        }
    }

    return {
        props: {
            articles,
        }, // will be passed to the page component as props
    }
}