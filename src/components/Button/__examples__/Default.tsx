import { Button } from '@/components/Button'
import { action } from '@storybook/addon-actions'

const Default = () => {
  return (
    <Button
      onMouseEnter={action('onMouseEnter')}
      onClick={action('onClick')}
      onMouseLeave={action('onMouseLeave')}
      onFocus={action('onFocus')}
      onBlur={action('onBlur')}
    >
      default button
    </Button>
  )
}

export default Default
