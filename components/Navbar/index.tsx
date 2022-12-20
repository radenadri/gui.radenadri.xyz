import { useState } from 'react'

import Link from 'next/link'

import { Button, Drawer, Grid } from '@geist-ui/core'
import { Menu, Moon } from '@geist-ui/icons'

import NavMenu from '@/components/NavMenu'
import NavMenuItem from '@/components/NavMenuItem'

import styles from './style.module.scss'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Grid.Container className="container">
      <Grid
        xs
        alignItems="center"
        justify="space-between">

        {/* Navigation Menu */}
        <NavMenu xs={0} sm={16} className={styles.navLinkContainer}>
          <NavMenuItem to="/" className={styles.navLink}>Home</NavMenuItem>
          <NavMenuItem to="/me" className={styles.navLink}>Me</NavMenuItem>
          <NavMenuItem to="/works" className={styles.navLink}>Works</NavMenuItem>
          <NavMenuItem to="/journal" className={styles.navLink}>Journal</NavMenuItem>
          <NavMenuItem to="https://drive.google.com/drive/folders/1tQ-XdvNNTeTvO3ubBxNL_075NFa0eARd" className={styles.navLink} target="_blank">Resume</NavMenuItem>
        </NavMenu>

        {/* Menu */}
        <Grid.Container xs={12} sm={0}>
          <Button auto scale={1} px={.6} type="abort" icon={<Menu />} onClick={() => setOpen(true)} />
        </Grid.Container>

        {/* Dark Mode */}
        <Button icon={<Moon />} auto scale={1} px={.6} />

        {/* Drawer */}
        <Drawer className={styles.drawer} visible={open} onClose={() => setOpen(false)} placement="left" width={15}>
          <Drawer.Title>Menu</Drawer.Title>
          <Drawer.Content>
            <NavMenu direction="column" className={styles.navLinkContainer}>
              <NavMenuItem to="/" className={styles.navLink}>Home</NavMenuItem>
              <NavMenuItem to="/me" className={styles.navLink}>Me</NavMenuItem>
              <NavMenuItem to="/works" className={styles.navLink}>Works</NavMenuItem>
              <NavMenuItem to="/journal" className={styles.navLink}>Journal</NavMenuItem>
              <NavMenuItem to="https://drive.google.com/drive/folders/1tQ-XdvNNTeTvO3ubBxNL_075NFa0eARd" className={styles.navLink} target="_blank">Resume</NavMenuItem>
            </NavMenu>
          </Drawer.Content>
        </Drawer>

      </Grid>
    </Grid.Container>
  )
}

export default Navbar