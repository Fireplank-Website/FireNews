import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import Link from 'next/link';
import Head from 'next/head';
import { articles } from "../../../data";

const article = ({ post }) => {
    return (
        <Box>
            <Head>
                <title>{post.title} - FireNews</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="news, articles, stories" />
                <meta name="description" content="FireNews is a news website" />
                <meta charSet='utf-8' />
            </Head>
            <Heading fontSize="2xl" mt="1rem">{post.title}</Heading>
            <Text mt="1.5rem">{post.content}</Text>
            <Stack spacing={4} direction='row' align="end">
                <Link href="/">
                    <Button colorScheme='red' size='lg' mt="3rem">Go Back</Button>
                </Link>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                    <Button colorScheme='teal' size='lg' mt="3rem">View Full Post</Button>
                </a>
            </Stack>
        </Box>
    )
}

export async function getServerSideProps(context) {
    const post = articles[context.params.id];
    return {
        props: {
            post,
        },
    }
}

export default article