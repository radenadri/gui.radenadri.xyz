import Link from 'next/link'

import { Button, Grid, Link as GeistLink } from '@geist-ui/core'
import { Moon } from '@geist-ui/icons'

const Navbar = () => {
  return (
    <Grid.Container justify="center" className="nav-container">
      <Grid
        xs={24}
        sm={12}
        alignItems="center"
        justify="space-between">

        {/* Navigation Menu */}
        <Grid.Container className="nav-link-container">
          <Link href="/about" legacyBehavior>
            <GeistLink className="nav-link" block>Me</GeistLink>
          </Link>
          <Link href="/works" legacyBehavior>
            <GeistLink className="nav-link" block>Works</GeistLink>
          </Link>
          <Link href="/journal" legacyBehavior>
            <GeistLink className="nav-link" block>Journal</GeistLink>
          </Link>
          <GeistLink className="nav-link" block href="https://drive.google.com/drive/folders/1tQ-XdvNNTeTvO3ubBxNL_075NFa0eARd" target="_blank">Resume</GeistLink>
        </Grid.Container>

        {/* Dark Mode */}
        <Button icon={<Moon />} auto scale={1} px={.6} />
      </Grid>
    </Grid.Container>
  )
}

export default Navbar