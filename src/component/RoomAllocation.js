import React from 'react';
import Room from './Room';

const RoomAllocation = ({
  guest,
  room,
  onChange
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
  const onChange_ = (value, key, room) => {
    setState({
      ...state,
      ['room_' + room.id]: {
        ...room,
        [key]: Number(value)
      }
    })
    onChange(Object.values({
      ...state,
      ['room_' + room.id]: {
        ...room,
        [key]: Number(value)
      }
    }).map(result => ({
      adult: result.adult,
      child: result.child,
    })))
  }
  return (
    <div className="container">
      <div className="margin"><span className="title">{`住客人數: ${guest} 人 / ${room} 房`}</span></div>
      <div className="unassigned"><span>{`尚未分配人數: ${guest - total}`}</span></div>
      {
        Object.values(state).map(room_ =>
          <Room
            key={room_.id}
            room={room_}
            onChange={onChange_}
            disabled={guest <= total}
          />)
      }
      {room <= 0 && <div className="margin"><span>未設定房間數</span></div>}
    </div>
  )
}

export default RoomAllocation