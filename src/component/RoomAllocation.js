import React from 'react';
import CustomInputNumber from './CustomInputNumber';

const RoomAllocation = () => {
  const [value, setValue] = React.useState(0)
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <>
      {value}
      <CustomInputNumber onChange={onChange} value={value} />
    </>
  )
}

export default RoomAllocation