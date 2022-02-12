import React from 'react';
import CustomInputNumber from './custom/CustomInputNumber';

const Room = ({ room, onChange, disabled }) => {
  return (
    <div className="room">
      <span>{`房間: ${room.adult + room.child} 人 `}</span>
      {room.adult + room.child === 4 && <span>( 房間已滿 )</span>}
      <div className="flex">
        <div className="spacer">
          <span>大人</span>
        </div>
        <CustomInputNumber
          value={room.adult}
          max={10}
          min={1}
          step={1}
          upDisabled={disabled || room.adult + room.child === 4}
          downDisabled={disabled}
          onChange={e => onChange(e.target.value, 'adult', room)}
        />
      </div>
      <div className="flex">
        <div className="spacer">
          <span>小孩</span>
        </div>
        <CustomInputNumber
          value={room.child}
          max={10}
          min={0}
          step={1}
          upDisabled={disabled || room.adult + room.child === 4}
          downDisabled={disabled}
          onChange={e => onChange(e.target.value, 'child', room)}
        />
      </div>
    </div>
  )
}

export default Room