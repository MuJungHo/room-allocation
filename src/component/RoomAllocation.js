import React from 'react';
import CustomInputNumber from './custom/CustomInputNumber';

const RoomAllocation = () => {
  const [value, setValue] = React.useState(0)
  const onChange = e => {
    setValue(e.target.value)
  }
  const onBlur = e => {
    console.log(e.target.value)
  }
  return (
    <>
      {value}
      <CustomInputNumber
        value={value}
        max={15}
        min={-15}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  )
}

export default RoomAllocation