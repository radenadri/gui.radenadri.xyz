import Link from "next/link"

import { Card, Link as GeistLink, Text, useTheme } from "@geist-ui/core"
import Image from "next/image"

type DataProps = {
  content: ThoughtProps
  isExternal?: boolean
}

type ThoughtProps = {
  title: string
  excerpt: string
  image?: string
  to: string
}

const Thought = ({ content, isExternal = false } : DataProps) => {

  const { title, excerpt, image, to } = content
  const { palette } = useTheme()

  return (
    <>
      <Card className="thought-card" width="100%">
        {image && (
          <div className="thought-card-img">
            <Image
              src={image}
              alt={title}
              fill
              draggable={false}
            />
        </div>
        )}
        <Card.Content>
          <Text h4 my={0}>{title}</Text>
          <Text>{excerpt}</Text>
          {to && (isExternal ? ( <GeistLink href={to} className="custom-link" target="_blank">View More →</GeistLink> ) : <Link href={to} className="custom-link">Read this →</Link> )}
        </Card.Content>
      </Card>
      <style jsx global>{`
        .thought-card:hover {
          transform: scale(1.05);
          transition: all 0.2s ease-in-out;
        }

        .thought-card-img {
          position: relative;
          aspect-ratio: 16/9;
        }

        .thought-card-img img {
          object-fit: cover;
          object-position: center;
          border-radius: 4px 4px 0 0;
        }

        .custom-link {
          color: ${palette.success} !important;
        }
      `}</style>
    </>
  )
}

export default Thought