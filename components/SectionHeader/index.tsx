import { Text, useTheme } from "@geist-ui/core"

type SectionHeaderProps = {
  title: string
  subtitle?: string
  h1?: boolean
}

const SectionHeader = ({ title, subtitle, h1 = false} : SectionHeaderProps) => {

  const { palette } = useTheme()

  return (
    <>
      {h1 ? <Text h1 className="h1">{title}</Text> : <Text h2>{title}</Text>}
      {subtitle &&
        <Text h5 className="font-normal" style={{ color: palette.accents_6 }}>
          {subtitle}
        </Text>
      }
    </>
  )
}

export default SectionHeader