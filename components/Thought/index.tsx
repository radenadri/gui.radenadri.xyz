import Image from "next/image"
import Link from "next/link"

import { Card, Grid, Link as GeistLink, Text, useMediaQuery, useTheme } from "@geist-ui/core"
import moment from "moment"

type DataProps = {
  content: ThoughtProps
  isExternal?: boolean
  list?: boolean
}

type ThoughtProps = {
  title: string
  excerpt?: string
  date?: string
  image?: string
  to: string
}

const Thought = ({ content, isExternal = false, list = false } : DataProps) => {

  const isXS = useMediaQuery('xs')

  const { title, excerpt, date, image, to } = content
  const { palette } = useTheme()

  const CardType = () => (
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
        {excerpt && <Text>{excerpt}</Text>}
        {to && (isExternal ? ( <GeistLink href={to} className="custom-link" target="_blank">View More →</GeistLink> ) : <Link href={to} className="custom-link">Read this →</Link> )}
      </Card.Content>
    </Card>
  )

  const ListType = () => (
    <Grid
      className="thought-list"
      xs={24}
      alignItems={isXS ? 'flex-start' : 'baseline'}
      direction={isXS ? 'column' : 'row'}>
      {date && <Text h6 style={{ color: palette.accents_6 }} width={6}>{moment(date).format('DD/MM/YYYY')}</Text>}
      <Link href={to} legacyBehavior>
        <GeistLink
          underline
          margin={0}
          marginLeft={isXS ? '0' : '1'}>
          <Text h4>{title}</Text>
        </GeistLink>
      </Link>
    </Grid>
  )

  return (
    <>
      {list ? <ListType /> : <CardType />}
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