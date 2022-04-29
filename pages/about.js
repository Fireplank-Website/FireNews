import { Box, Heading, Text } from "@chakra-ui/react"
import Head from "next/head"

const about = () => {
  return (
    <Box textAlign={"center"}>
        <Head>
          <title>About - FireNews</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="news, articles, stories" />
          <meta name="description" content="FireNews is a news website" />
          <meta charSet='utf-8' />
        </Head>
        <Heading mt="3rem" mb="1rem">About</Heading>
        <Text>Hello! This is my first ever real web application that I have made.</Text>
        <Text>I made this simple news app using a free API to fetch the latest news.</Text>
        <Text>It&apos;s meant to be a learning project as it is my first one so please don&apos;t be so harsh on me. 🙏</Text>
        <Text>I used React with Next.js and Chakra UI as it&apos;s a nightmare doing design with CSS.</Text>
        <Text>This app wouldn&apos;t look nearly as good if not for Chakra so thanks Chakra lol.</Text>
        <Text>I hope you enjoy it!</Text>
    </Box>
  )
}
export default about