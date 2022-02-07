import { Input } from '@/components/InputN'
import React from 'react'

const AutoFocus = () => {
  return (
    <div className="w-64">
      <Input
        id="1"
        label="Label"
        value=""
        color="primary"
        autoFocus
      />
    </div>
  )
}

export default AutoFocus
