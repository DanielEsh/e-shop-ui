import { Checkbox } from '@/components/_new/Checkbox'

const SizeColors = () => {
  return (
    <div className="flex">
      <Checkbox
        className="mr-4"
        color="primary"
      >
        small primary
      </Checkbox>
      <Checkbox
        className="mr-4"
        color="secondary"
      >
        small secondary
      </Checkbox>
      <Checkbox
        className="mr-4"
        color="gray"
      >
        small gray
      </Checkbox>
      <Checkbox
        className="mr-4"
        color="success">
        small success
      </Checkbox>
      <Checkbox
        className="mr-4"
        color="error">
        small error
      </Checkbox>
    </div>
  )
}

export default SizeColors
