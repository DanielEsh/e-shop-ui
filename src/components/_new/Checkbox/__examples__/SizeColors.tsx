import { Checkbox } from '@/components/_new/Checkbox'

const SizeColors = () => {
  return (
    <>
      <div className="flex mt-4">
        <Checkbox
          className="mr-4"
          color="primary"
          size="small"
        >
          small primary
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="secondary"
          size="small"
        >
          small secondary
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="gray"
          size="small"
        >
          small gray
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="success"
          size="small"
        >
          small success
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="error"
          size="small"
        >
          small error
        </Checkbox>
      </div>

      <div className="flex mt-4">
        <Checkbox
          className="mr-4"
          color="primary"
        >
          medium primary
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="secondary"
        >
          medium secondary
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="gray"
        >
          medium gray
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="success">
          medium success
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="error">
          medium error
        </Checkbox>
      </div>

      <div className="flex mt-4">
        <Checkbox
          className="mr-4"
          color="primary"
          size="large"
        >
          large primary
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="secondary"
          size="large"
        >
          large secondary
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="gray"
          size="large"
        >
          large gray
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="success"
          size="large"
        >
          large success
        </Checkbox>
        <Checkbox
          className="mr-4"
          color="error"
          size="large"
        >
          large error
        </Checkbox>
      </div>
    </>
  )
}

export default SizeColors
