import { Box, Text, LinkBox, LinkOverlay, Heading, Stack } from "@chakra-ui/react"
import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ post }) => {
    const units = [
        ['year', 31536000000],
        ['month', 2628000000],
        ['day', 86400000],
        ['hour', 3600000],
        ['minute', 60000],
        ['second', 1000],
    ];

    const postTime = new Date(post.published);

    const rtf = new Intl.RelativeTimeFormat('en', { style:'narrow'})
    const relatime = elapsed => {
        for (const [unit, amount] of units) {
            if (Math.abs(elapsed) > amount || unit === 'second') {
                return rtf.format(Math.round(elapsed/amount), unit);
            }
        }
    }

    return (
        <LinkBox as='article' height="15.2rem" maxW="xl" p='5' borderWidth='1px' rounded='md' mt="4" className={articleStyles.card}>
            <Box as='time' dateTime={postTime}>
                {relatime(postTime - new Date())}
            </Box>
            <Heading size='md' my='2'>
                <Link href='/article/[id]' as={`/article/${post.id}`} passHref>
                    <LinkOverlay noOfLines={[1,2]} > {post.title} &rarr; </LinkOverlay>
                </Link>
            </Heading>
            <Text noOfLines={[1,2,3,4]}>{post.description}</Text>
        </LinkBox>
    )
}

const Article = ({ posts }) => {
    let stackList = [];
    for (let i = 1; i < posts.length; i+=2) {
        stackList.push(<Stack spacing={4} direction='row' align="end" key={i}>
            <ArticleItem post={posts[i]}/>
            {i+1 < posts.length ? <ArticleItem post={posts[i+1]}/> : null}
        </Stack>)
    }
    return (
        <Box>
            <Stack spacing={4} direction='column' align='center'>
                {stackList}
            </Stack>
        </Box>
    )
}

export { Article, ArticleItem }