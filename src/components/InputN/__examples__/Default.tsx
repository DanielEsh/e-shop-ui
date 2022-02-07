import React from 'react'
import { Input } from '@/components/InputN'

const Default = () => {
  return (
    <div>
      <div className="w-64">
        <Input
          id="1"
          label="Label"
          value=""
        />
      </div>
      <div className="w-64 mt-4">
        <Input
          id="2"
          label="Label"
          value=""
          disabled
        />
      </div>
      <div className="w-64 mt-4">
        <Input
          id="3"
          label="Label"
          value="12321"
          readOnly
        />
      </div>
    </div>
  )
}

export default Default
