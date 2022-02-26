import { Button } from '@/components/Button'

const SmallButtons = () => {
  return (
    <div className="flex gap-4">
      <Button
        color="primary"
        size="small"
      >
        button
      </Button>
      <Button
        color="secondary"
        size="small"
      >
        button
      </Button>
      <Button
        color="gray"
        size="small"
      >
        button
      </Button>
      <Button
        color="success"
        size="small"
      >
        button
      </Button>
      <Button
        color="error"
        size="small"
      >
        button
      </Button>
    </div>
  )
}

const MediumButtons = () => {
  return (
    <div className="flex gap-4">
      <Button
        color="primary"
        size="medium"
      >
        button
      </Button>
      <Button
        color="secondary"
        size="medium"
      >
        button
      </Button>
      <Button
        color="gray"
        size="medium"
      >
        button
      </Button>
      <Button
        color="success"
        size="medium"
      >
        button
      </Button>
      <Button
        color="error"
        size="medium"
      >
        button
      </Button>
    </div>
  )
}

const LargeButtons = () => {
  return (
    <div className="flex gap-4">
      <Button
        color="primary"
        size="large"
      >
        button
      </Button>
      <Button
        color="secondary"
        size="large"
      >
        button
      </Button>
      <Button
        color="gray"
        size="large"
      >
        button
      </Button>
      <Button
        color="success"
        size="large"
      >
        button
      </Button>
      <Button
        color="error"
        size="large"
      >
        button
      </Button>
    </div>
  )
}

const SizesColors = () => {
  return (
    <div>
      <h2>Small sizes</h2>
      <SmallButtons />
      <h2>Medium sizes</h2>
      <MediumButtons />
      <h2>Large sizes</h2>
      <LargeButtons />
    </div>
  )
}

export default SizesColors
