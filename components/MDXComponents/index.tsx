import { Link as GeistLink, Text } from "@geist-ui/core"

const MDXComponents = {
  p: (props : any) => <Text p {...props} />,
  a: (props : any) => <GeistLink {...props} />,
  h1: (props : any) => <Text h1 {...props} />,
}

export default MDXComponents