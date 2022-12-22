import { Grid, Text } from "@geist-ui/core"

import SectionHeader from "@/components/SectionHeader"
import Thought from "@/components/Thought"

import ThoughtType from "@/types/ThoughtType"

type LatestThoughtProps = {
  thoughts: Array<ThoughtType>
}

const LatestThought = ({ thoughts } : LatestThoughtProps) => {

  return (
    <div className="container">
      <SectionHeader
        title={'Latest Thought'}
        subtitle={'Recently I have been thinking about the following topics and trying to write about them.'} />
      <Grid.Container marginTop={1} justify="space-between" gap={2}>
        {thoughts ? thoughts.map((thought, i) => (
          <Grid xs={24} sm={12} key={i}>
            <Thought content={{
              title: thought.data?.title,
              excerpt: thought.data?.excerpt,
              to: `/journal/${thought.slug}`
            }} />
          </Grid>
        )) : (
          <Text h1>No thoughts found</Text>
        )}
      </Grid.Container>
    </div>
  );
};

export default LatestThought;