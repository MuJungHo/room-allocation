import React from 'react';
import CustomInputNumber from './CustomInputNumber';

const RoomAllocation = () => {
  const [value, setValue] = React.useState(0)
  const onChange = e => {
  }
  return (
    <CustomInputNumber onChange={onChange} />
  )
}

export default RoomAllocation