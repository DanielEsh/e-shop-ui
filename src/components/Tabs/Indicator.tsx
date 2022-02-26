import { FC, CSSProperties, useContext } from 'react'
import cn from 'classnames'

import { TabsContext } from '@/components/Tabs/Context'

type IndicatorProps = {
    styles: CSSProperties
}

export const Indicator: FC<IndicatorProps> = ({ styles }) => {
  const { color } = useContext(TabsContext)

  const colorsList = {
    primary: 'bg-primary-500',
    secondary: 'bg-light-500 dark:bg-dark-500',
  }

  const classes = cn(
    'absolute rounded-md transition-all duration-300',
    colorsList[color],
  )

  return (
    <div
      className={classes}
      style={styles}
    />
  )
}
