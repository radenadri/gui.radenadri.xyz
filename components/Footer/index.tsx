import { Grid, Link as GeistLink, Text } from "@geist-ui/core"

import styles from './style.module.scss'

const Footer = () => {
  return (
    <footer>
      <Grid.Container justify="center" className="container">
        <Grid
          xs
          sm={20}
          lg={12}
          xl={8}
          className={styles.footer}
          justify="space-between">
            <Text className="text-muted">2022 © Adriana Eka Prayudha</Text>
            <div className={styles.footerLink}>
              <GeistLink underline href="https://github.com/radenadri">Github</GeistLink>
              ·
              <GeistLink underline href="https://www.linkedin.com/in/radenadri/">LinkedIn</GeistLink>
            </div>
        </Grid>
      </Grid.Container>
    </footer>
  )
}

export default Footer