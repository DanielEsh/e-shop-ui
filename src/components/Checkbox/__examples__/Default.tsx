import { Checkbox } from '@/components/Checkbox'
import { action } from '@storybook/addon-actions'

const Default = () => {
  return (
    <div>
      <Checkbox
        onClick={action('onClick')}
        onChange={action('onChange')}
        onFocus={action('onFocus')}
        onBlur={action('onBlur')}
      >
        checkbox
      </Checkbox>
    </div>
  )
}

export default Default
