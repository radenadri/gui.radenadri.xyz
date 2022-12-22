import Link from "next/link"
import { Link as GeistLink } from "@geist-ui/core"

type NavMenuItemProps = {
  children: React.ReactNode
  to: string
  isExternal?: boolean
  [x:string]: any
}

const NavMenuItem = ({ children, to, isExternal = false, ...props } : NavMenuItemProps) => {
  return (
    <>
      {isExternal ? (
        <GeistLink block href={to} target="_blank" {...props}>{children}</GeistLink>
      ) : (
        <Link href={to} legacyBehavior>
          <GeistLink block {...props}>{children}</GeistLink>
        </Link>
      )}
    </>
  )
}

export default NavMenuItem