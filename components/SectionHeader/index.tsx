import { Text, useTheme } from "@geist-ui/core"

type SectionHeaderProps = {
  title: string
  subtitle?: string
}

const SectionHeader = ({ title, subtitle } : SectionHeaderProps) => {

  const { palette } = useTheme()

  return (
    <>
      <Text h2>{title}</Text>
      {subtitle && <Text h5 className="font-normal" style={{ color: palette.accents_6 }}>
        {subtitle}
      </Text>}
    </>
  )
}

export default SectionHeader