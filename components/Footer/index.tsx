import { Grid, Link as GeistLink, Text } from "@geist-ui/core"

const Footer = () => {
  return (
    <footer>
      <Grid.Container justify="center" className="container">
        <Grid
          xs
          direction="column"
          justify="space-between">
            <Text className="text-muted">2022 © Adriana Eka Prayudha</Text>
            <div className="footer-link">
              <GeistLink underline href="https://github.com/radenadri">Github</GeistLink>
              ·
              <GeistLink underline href="https://www.linkedin.com/in/radenadri/">LinkedIn</GeistLink>
            </div>
        </Grid>
      </Grid.Container>
      <style jsx>{`
        footer {
          max-width: 650px;
          margin: 0 auto;
        }

        .footer-link {
          display: flex;
          gap: .75rem;
        }
      `}</style>
    </footer>
  )
}

export default Footer