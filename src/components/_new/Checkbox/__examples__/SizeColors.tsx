import { Checkbox } from '@/components/_new/Checkbox'

const SizeColors = () => {
  return (
    <div className="flex">
      <Checkbox>
        small primary
      </Checkbox>
      <Checkbox>
        small secondary
      </Checkbox>
      <Checkbox>
        small gray
      </Checkbox>
      <Checkbox>
        small success
      </Checkbox>
      <Checkbox>
        small error
      </Checkbox>
    </div>
  )
}

export default SizeColors
