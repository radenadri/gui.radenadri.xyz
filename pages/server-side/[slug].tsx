import { Grid } from "@geist-ui/core"

type Context = {
  context: Object
  query: Object
  params: {
    slug: string
  }
}

const ServerSide = ({ query, params } : Context) => {
  return (
    <Grid.Container direction="column" marginTop={2} style={{
      padding: '0 2rem'
    }}>
      <h1>Server Side</h1>
      <p>query : { JSON.stringify(query) }</p>
      <p>parameter : { params.slug }</p>
    </Grid.Container>
  )
}

export async function getServerSideProps(context : Context) {
  const { query, params } = context
  console.log('query', query)
  console.log('params', params)

  return {
    props: {
      query,
      params
    },
  }
}

export default ServerSide