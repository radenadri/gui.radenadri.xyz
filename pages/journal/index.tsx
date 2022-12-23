import { Grid, useMediaQuery } from "@geist-ui/core"

import SectionHeader from "@/components/SectionHeader"
import Thought from "@/components/Thought"
import Layout from "@/layouts/Default"
import ThoughType from "@/types/ThoughtType"

import { getPosts } from "@/lib/mdx"

type JournalProps = {
  journals: Array<ThoughType>
}

const Journal = ({ journals } : JournalProps) => {

  const isXS = useMediaQuery('xs')

  return (
    <Layout>
      <div className="container">
        <SectionHeader
          h1
          title="Journal"
          subtitle="A collection of my thoughts and ideas." />
        { journals &&
          <Grid.Container gap={isXS ? 2 : 1} marginTop={2} direction="column">
            {journals.map((journal, i) => (
              <Thought
                list
                key={i}
                content={{
                  title: journal.data.title,
                  to: `journal/${journal.slug}`,
                  date: journal.data.date
                }} />
            ))}
          </Grid.Container>
        }
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const journals = await getPosts()

  return {
    props: {
      journals
    }
  }
}

export default Journal