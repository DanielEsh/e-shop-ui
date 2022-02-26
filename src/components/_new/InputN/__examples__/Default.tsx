import { Input } from '@/components/_new/InputN'
import { action } from '@storybook/addon-actions'

const Default = () => {
  return (
    <div>
      <div className="w-64">
        <Input
          id="1"
          label="Label"
          value=""
          color="primary"
          onChange={action('onChange')}
          onClick={action('onClick')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
    </div>
  )
}

export default Default
