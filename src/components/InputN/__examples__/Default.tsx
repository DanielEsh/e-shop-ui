import React from 'react'
import { Input } from '@/components/InputN'

const Default = () => {
  return (
    <div>
      <div className="w-64">
        <Input
          id="1"
          placeholder="Label"
          value=""
        />
      </div>
      <div className="w-64 mt-4">
        <Input
          id="1"
          placeholder="Label"
          value=""
          disabled
        />
      </div>
    </div>
  )
}

export default Default
