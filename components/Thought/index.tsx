import Link from "next/link"

import { Card, Text } from "@geist-ui/core"

type DataProps = {
  data: ThoughtProps
}

type ThoughtProps = {
  title: string
  excerpt: string
  to: string
}

const Thought = ({ data } : DataProps) => {
  const { title, excerpt, to } = data

  return (
    <Card width="100%">
      <Text h4 my={0}>{title}</Text>
      <Text>{excerpt}</Text>
      {to && <Link href={to}>Read this →</Link>}
    </Card>
  )
}

export default Thought