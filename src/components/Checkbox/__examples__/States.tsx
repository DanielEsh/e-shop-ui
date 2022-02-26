import { Checkbox } from '@/components/Checkbox'

const States = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Checkbox
          disabled
        >
          disabled
        </Checkbox>
      </div>
      <div>
        <Checkbox
          checked
        >
          checked
        </Checkbox>
      </div>
    </div>
  )
}

export default States
