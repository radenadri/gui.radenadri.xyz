import { Grid } from "@geist-ui/core"

type NavMenuProps = {
  children: React.ReactNode
  [x:string]: any
}

const NavMenu = ({ children, ...props } : NavMenuProps) => {
  return (
    <Grid.Container {...props}>
      {children}
    </Grid.Container>
  )
}

export default NavMenu