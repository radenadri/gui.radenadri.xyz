import Link from 'next/link'

import { Button, Grid, Link as GeistLink } from '@geist-ui/core'
import { Menu, Moon } from '@geist-ui/icons'

import styles from './style.module.scss'

const Navbar = () => {
  return (
    <Grid.Container className="container">
      <Grid
        xs
        alignItems="center"
        justify="space-between">

        {/* Navigation Menu */}
        <Grid.Container xs={0} sm={12} className={styles.navLinkContainer}>
          <Link href="/about" legacyBehavior>
            <GeistLink className={styles.navLink} block>Me</GeistLink>
          </Link>
          <Link href="/works" legacyBehavior>
            <GeistLink className={styles.navLink} block>Works</GeistLink>
          </Link>
          <Link href="/journal" legacyBehavior>
            <GeistLink className={styles.navLink} block>Journal</GeistLink>
          </Link>
          <GeistLink className={styles.navLink} block href="https://drive.google.com/drive/folders/1tQ-XdvNNTeTvO3ubBxNL_075NFa0eARd" target="_blank">Resume</GeistLink>
        </Grid.Container>

        {/* Menu */}
        <Grid.Container xs={12} sm={0}>
          <Button auto scale={1} px={.6} type="abort" icon={<Menu />} />
        </Grid.Container>

        {/* Dark Mode */}
        <Button icon={<Moon />} auto scale={1} px={.6} />
      </Grid>
    </Grid.Container>
  )
}

export default Navbar