import { Card, Grid, Text } from "@geist-ui/core";
import Link from "next/link";

const LatestThought = () => {

  return (
    <div className="container">
      <Text h1 className="h1">Latest Thought</Text>
      <Text h5 className="text-muted font-normal">
        Recently I have been thinking about the following topics and trying to write about them.
      </Text>
      <Grid.Container marginTop={1} justify="space-between" gap={2}>
        <Grid xs={24} sm>
          <Card width="100%">
            <Text h4 my={0}>HTTP is extensible</Text>
            <Text>Introduced in HTTP/1.0, HTTP headers make this protocol.</Text>
            <Link href="#">Read this →</Link>
          </Card>
        </Grid>
        <Grid xs={24} sm>
          <Card width="100%">
            <Text h4 my={0}>HTTP is extensible</Text>
            <Text>Introduced in HTTP/1.0, HTTP headers make this protocol.</Text>
            <Link href="#">Read this →</Link>
          </Card>
        </Grid>
        <Grid xs={24} sm>
          <Card width="100%">
            <Text h4 my={0}>HTTP is extensible</Text>
            <Text>Introduced in HTTP/1.0, HTTP headers make this protocol.</Text>
            <Link href="#">Read this →</Link>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default LatestThought;