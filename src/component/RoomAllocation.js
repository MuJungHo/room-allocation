import React from 'react';
import CustomInputNumber from './custom/CustomInputNumber';

const RoomAllocation = () => {
  const [state, setState] = React.useState([
    { id: 1, adult: 1, child: 0 },
    { id: 2, adult: 1, child: 0 },
  ])
  const onChange = (e, room) => {
    console.log(e)
    const updated = state.map(room_ => {
      if (room_.id === room.id) {
        return {
          ...room,
          adult: Number(e.target.value)
        }
      } else {
        return { ...room_ }
      }
    })
    setState(updated)
  }
  return (
    <div>
      {
        state.map(room => <input type="number" key={room.id} value={room.adult} onChange={e => onChange(e, room)} />)
      }

      {
        state.map(room => <CustomInputNumber
          id={room.id}
          key={room.id}
          value={room.adult}
          max={10}
          min={1}
          step={1}
          onChange={e => onChange(e, room)}
        />)
      }
    </div>
  )
}

export default RoomAllocation