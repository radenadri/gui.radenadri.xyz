import Link from "next/link"
import { Link as GeistLink } from "@geist-ui/core"

type NavMenuItemProps = {
  to: string
  children: React.ReactNode
  [x:string]: any
}

const NavMenuItem = ({ children, to, ...props } : NavMenuItemProps) => {
  return (
    <Link href={to} legacyBehavior>
      <GeistLink block {...props}>{children}</GeistLink>
    </Link>
  )
}

export default NavMenuItem