import { Code, Divider, Image, Link as GeistLink, Table, Text } from "@geist-ui/core"
import Seo from '@/components/Seo'

const MDXComponents = {
  h1: (props : any) => <Text h1 className="h1" {...props} />,
  h2: (props : any) => <Text h2 {...props} />,
  h3: (props : any) => <Text h3 {...props} />,
  h4: (props : any) => <Text h4 {...props} />,
  h5: (props : any) => <Text h5 {...props} />,
  h6: (props : any) => <Text h6 {...props} />,
  p: (props : any) => <Text p className="p" {...props} />,
  a: (props : any) => <GeistLink underline className="a" {...props} />,
  code: (props : any) => <Code block {...props} />,
  hr: (props : any) => <Divider {...props} />,
  img: (props : any) => <Image alt={props.alt} {...props} />,
  table: (props : any) => <Table {...props} />,
  Seo: (props : any) => <Seo {...props} />
}

export default MDXComponents