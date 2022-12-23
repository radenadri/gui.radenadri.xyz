import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import MDXComponents from "@/components/MDXComponents"

const MDXRenderer = ({ mdxSource, ...rest } : any) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout components={MDXComponents} {...rest} />
}

export default MDXRenderer