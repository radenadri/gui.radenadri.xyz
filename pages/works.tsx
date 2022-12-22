import SectionHeader from "@/components/SectionHeader"
import Layout from "@/layouts/Default"

import projects from "@/lib/data/projects"
import ProjectType from "@/types/ProjectType"

type WorksProps = {
  works: Array<ProjectType>
}

const Works = ({ works } : WorksProps) => {

  console.log({ works })

  return (
    <Layout>
      <div className="container">
        <SectionHeader
          h1
          title="All works"
          subtitle="All my recent works while tinkering with code editor" />
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