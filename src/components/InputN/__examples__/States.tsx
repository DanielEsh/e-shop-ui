import React from 'react'
import { Input } from '@/components/InputN'

const States = () => {
  return (
    <div>
      <div className="w-64">
        <Input
          id="1"
          placeholder="Label"
          value=""
          error
          errorField="Поле обязательно для заполнения"
        />
      </div>
      <div className="w-64 mt-4">
        <Input
          id="2"
          placeholder="Label"
          value=""
          disabled
        />
      </div>
    </div>
  )
}

export default States
