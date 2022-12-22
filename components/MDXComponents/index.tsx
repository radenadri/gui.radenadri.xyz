import { Link as GeistLink, Text } from "@geist-ui/core"

const MDXComponents = {
  p: (props : any) => <Text p className="p" {...props} />,
  a: (props : any) => <GeistLink underline className="a" {...props} />,
  h1: (props : any) => <Text h1 className="h1" {...props} />,
}

export default MDXComponents