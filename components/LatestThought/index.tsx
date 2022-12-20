import { Grid, Text } from "@geist-ui/core"

import Thought from "@/components/Thought"

const LatestThought = () => {

  return (
    <div className="container">
      <Text h2>Latest Thought</Text>
      <Text h5 className="text-muted font-normal">
        Recently I have been thinking about the following topics and trying to write about them.
      </Text>
      <Grid.Container marginTop={1} justify="space-between" gap={2}>
        {Array(3).fill(0).map((_, i) => (
          <Grid xs={24} sm key={i}>
            <Thought data={{
              title: "HTTP is extensible",
              excerpt: "Introduced in HTTP/1.0, HTTP headers make this protocol.",
              to: "#"
            }} />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default LatestThought;