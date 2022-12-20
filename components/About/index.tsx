/* eslint-disable react/no-unescaped-entities */
import { Link as GeistLink, Text, useTheme } from "@geist-ui/core"

const About = () => {
  const { palette } = useTheme();

  return (
    <div className="container">
      <Text h1 className="h1">Who am i?</Text>
      <Text p style={{ color: palette.accents_6 }}>
        I've been working on the field for almost 3 years, currently i've got a lot of interest to website and also mobile apps technologies.
      </Text>
      <Text p style={{ color: palette.accents_6 }}>
        Sometimes i'm dealing with frontend, and sometimes i'm doing a little bit of technical things too. I love to make things up and running. Sounds like a full stack developer yup? (of course there's so many things to learn).
      </Text>
      <Text p style={{ color: palette.accents_6 }}>
        My purpose to stay at this field because there something that makes me happy when i can help people through my work.
      </Text>
      <Text p style={{ color: palette.accents_6 }}>
        Currently i'm working as a Software Engineer at <GeistLink underline href="https://pentacode.id" target="_blank" style={{
          color: palette.accents_8
        }}>Pentacode</GeistLink>.
      </Text>
    </div>
  )
}

export default About