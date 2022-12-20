import { Grid } from "@geist-ui/core";
import Link from "next/link";

import postsData from '@/lib/data/posts.json';

interface IPost {
  id: number
  title: string
}

interface Posts {
  posts: Array<IPost>
}

const StaticProps = ({ posts } : Posts) => {

  return (
    <Grid.Container direction="column" marginTop={2} style={{
      padding: '0 2rem'
    }}>
      <h1>Static Props</h1>
      { posts.map((post : IPost) => (
        <Link href={`static-props/${post.id}`} key={post.id}>{post.title}</Link>
      )) }
    </Grid.Container>
  );
}

export async function getStaticProps() {

  // Fetch from json file
  const posts = postsData;

  // Fetch from API
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const posts = await response.json()

  // Set notFound true if no posts
  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

export default StaticProps