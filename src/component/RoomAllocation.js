import React from 'react';
import Room from './Room';

const RoomAllocation = ({
  guest,
  room
}) => {
  var state_ = []
  for (let i = 0; i < room; i++) {
    state_['room_' + i] = {
      id: i,
      adult: 1,
      child: 0
    }
  }
  const [state, setState] = React.useState(state_)
  const count = Object.values(state).reduce((total, currentObj) => {
    return {
      adult: total.adult + currentObj.adult,
      child: total.child + currentObj.child,
    }
  }, { adult: 0, child: 0 });
  const total = count.adult + count.child;
  console.log(total);
  const onChange = (value, key, room) => {
    setState({
      ...state,
      ['room_' + room.id]: {
        ...room,
        [key]: Number(value)
      }
    })
  }
  return (
    <div className="container">
      <div><span>{`住客人數: ${guest} 人 / ${room} 房`}</span></div>
      <div><span>{`尚未分配人數: ${guest - total}`}</span></div>

      {/* {JSON.stringify(Object.values(state))} */}
      {
        Object.values(state).map(room => <Room key={room.id} room={room} onChange={onChange} />)
      }
    </div>
  )
}

export default RoomAllocation