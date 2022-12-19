import { Grid } from "@geist-ui/core";
import postsData from '../../lib/data/posts.json';

interface IPost {
  id: number
  title: string
}

interface Post {
  post: IPost
}

const StaticPropsDetail = ({ post: { id, title } } : Post) => {
  return (
    <Grid.Container direction="column" marginTop={2} style={{
      padding: '0 2rem'
    }}>
      <h1>{title}</h1>
      <p>id : {id}</p>
      <p>title : {title}</p>
    </Grid.Container>
  );
}

// Generates `/static-props/1` and `/static-props/2`
export async function getStaticPaths() {

  return {
    paths: postsData.map((post : IPost) => ({
      params: { id: post.id.toString() },
    })),
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(
  { params : { id } } :
  { params: { id: string } }
) {

  // Fetch from json file, find post by id
  const post = postsData.find((post : IPost) => post.id === parseInt(id));

  // Fetch from API
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const posts = await response.json()

  // Set notFound true if no posts
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 10, // In seconds
  }
}

export default StaticPropsDetail