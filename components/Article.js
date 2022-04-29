import { Box, Text, LinkBox, LinkOverlay, Heading, Stack } from "@chakra-ui/react"
import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ post }) => {
    return (
        <LinkBox as='article' height="14rem" maxW="xl" p='5' borderWidth='1px' rounded='md' mt="4" className={articleStyles.card}>
        <Heading size='md' my='2'>
            <Link href='/article/[id]' as={`/article/${post.id}`}>
                <LinkOverlay noOfLines={[1,2,3]} > {post.title} &rarr; </LinkOverlay>
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