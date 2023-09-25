import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Drawer, Grid, useTheme } from '@geist-ui/core'
import { Menu, Moon, Sun } from '@geist-ui/icons'

import NavMenu from "@/components/NavMenu"
import NavMenuItem from "@/components/NavMenuItem"

import ThemeContext from '@/contexts/ThemeContext'
import themeSwitcher from '@/lib/themeSwitcher'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)
  const { palette } = useTheme()
  const router = useRouter()

  const linkActive = (to: string): string | boolean => {
    if (router.pathname !== to) {
      return false
    }

    return 'active'
  }

  const switchTheme = () => {
    const newTheme = themeSwitcher(theme)
    setTheme(newTheme)

    document.body.className = newTheme
  }

  return (
    <Grid.Container className="container">
      <Grid
        xs
        alignItems="center"
        justify="space-between">

        {/* Navigation Menu */}
        <NavMenu xs={0} sm={16} className="nav-link-container">
          <NavMenuItem to="/" className={`nav-link ${linkActive('/')}`}>Home</NavMenuItem>
          <NavMenuItem to="/me" className={`nav-link ${linkActive('/me')}`}>Me</NavMenuItem>
          <NavMenuItem to="/works" className={`nav-link ${linkActive('/works')}`}>Works</NavMenuItem>
          <NavMenuItem to="/journal" className={`nav-link ${linkActive('/journal')}`}>Journal</NavMenuItem>
          <NavMenuItem to="https://drive.google.com/drive/folders/1tQ-XdvNNTeTvO3ubBxNL_075NFa0eARd" isExternal className="nav-link" target="_blank">Resume</NavMenuItem>
        </NavMenu>

        {/* Menu */}
        <Grid.Container xs={12} sm={0}>
          <Button auto scale={1} px={.6} type="abort" icon={<Menu />} onClick={() => setOpen(true)} />
        </Grid.Container>

        {/* Dark Mode */}
        <Button auto scale={1} px={.6} icon={theme === 'coolLight' ? <Moon /> : <Sun />} onClick={switchTheme} />

        {/* Drawer */}
        <Drawer className="drawer" visible={open} onClose={() => setOpen(false)} placement="left" width={15}>
          <Drawer.Title>Menu</Drawer.Title>
          <Drawer.Content>
            <NavMenu direction="column" className="nav-link-container">
              <NavMenuItem to="/" className={`nav-link ${linkActive('/')}`}>Home</NavMenuItem>
              <NavMenuItem to="/me" className={`nav-link ${linkActive('/me')}`}>Me</NavMenuItem>
              <NavMenuItem to="/works" className={`nav-link ${linkActive('/works')}`}>Works</NavMenuItem>
              <NavMenuItem to="/journal" className={`nav-link ${linkActive('/journal')}`}>Journal</NavMenuItem>
              <NavMenuItem to="https://drive.google.com/drive/folders/1tQ-XdvNNTeTvO3ubBxNL_075NFa0eARd" isExternal className="nav-link" target="_blank">Resume</NavMenuItem>
            </NavMenu>
          </Drawer.Content>
        </Drawer>

      </Grid>
      <style jsx global>{`
        .nav-link-container {
          gap: 1.5rem;
        }

        .nav-link {
          color: ${palette.accents_6} !important;
        }

        .nav-link.active {
          font-weight: 600;
        }

        .nav-link:hover {
          background-color: ${palette.accents_2} !important;
          color: ${palette.accents_8} !important;
          transition: all .2s ease-in-out;
        }

        .drawer {
          border-radius: 0 !important;

          align-items: flex-start;
        }
      `}</style>
    </Grid.Container >
  )
}

export default Navbar