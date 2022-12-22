import SectionHeader from "@/components/SectionHeader"
import Thought from "@/components/Thought"
import Layout from "@/layouts/Default"

import projects from "@/lib/data/projects"
import ProjectType from "@/types/ProjectType"
import { Grid } from "@geist-ui/core"

type WorksProps = {
  works: Array<ProjectType>
}

const Works = ({ works } : WorksProps) => {

  return (
    <Layout>
      <div className="container">
        <SectionHeader
          h1
          title="All works"
          subtitle="All my recent works while tinkering with code editor" />
        <Grid.Container gap={2} marginTop={2}>
          {works.map((work, index) => (
            <Grid key={index} xs={24} sm={12}>
              <Thought content={{
                title: work.title,
                excerpt: work.description,
                image: work.imgSrc,
                to: work.href
              }} isExternal />
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const works = projects

  return {
    props: {
      works
    }
  }
}

export default Works;