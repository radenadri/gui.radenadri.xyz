import Link from "next/link"

import { Card, Text, useTheme } from "@geist-ui/core"

type DataProps = {
  content: ThoughtProps
}

type ThoughtProps = {
  title: string
  excerpt: string
  to: string
}

const Thought = ({ content } : DataProps) => {

  const { title, excerpt, to } = content
  const { palette } = useTheme()

  return (
    <Card className="thought-card" width="100%">
      <Text h4 my={0}>{title}</Text>
      <Text>{excerpt}</Text>
      {to && <Link href={to} className="custom-link">Read this →</Link>}
      <style jsx global>{`
        .thought-card:hover {
          transform: scale(1.05);
          transition: all 0.2s ease-in-out;
        }

        .custom-link {
          color: ${palette.success};
        }
      `}</style>
    </Card>
  )
}

export default Thought