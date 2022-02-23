import { FC, CSSProperties } from 'react'

type IndicatorProps = {
    styles: CSSProperties
}

export const Indicator: FC<IndicatorProps> = ({ styles }) => {
  return (
    <div
      className="absolute h-full ml-5px rounded-md bg-primary-500 transition-all duration-300"
      style={styles}
    />
  )
}
