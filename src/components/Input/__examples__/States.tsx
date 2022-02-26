import React from 'react'
import { Input } from '@/components/Input'

const States = () => {
  return (
    <div>
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
      <div className="w-64 mt-4">
        <Input
          id="1"
          label="Label"
          value=""
          color="error"
          errorField="Поле обязательно для заполнения"
        />
      </div>
      <div className="w-64 mt-4">
        <Input
          id="2"
          label="Label"
          value=""
          color="success"
        />
      </div>
    </div>
  )
}

export default States
