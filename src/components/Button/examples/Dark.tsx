import React, { useRef } from 'react'
import { Button } from '../index'
import { action } from '@storybook/addon-actions'

const Dark = (): JSX.Element => {
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <Button
      ref={ btnRef }
      color="dark"
      outline
      size="large"
      onClick={action('onClick')}
    >
      Dark outlined button
    </Button>
  )
}

export default Dark
